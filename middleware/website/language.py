import json
from pathlib import Path
from typing import Any, override

from fastapi import Request
from fastapi.responses import RedirectResponse
from starlette.middleware.base import (
    BaseHTTPMiddleware,
    RequestResponseEndpoint,
)
from starlette.responses import Response

supported_languages = {"en", "es", "lt", "pa", "fr"}
languages_dir = Path("configuration/translations/website")
asset_prefixes = (
    "/assets/",
    "/static/",
    "/favicon.ico",
    "/robots.txt",
    "/staff-images/",
)


def get_translations(lang: str) -> dict[str, Any]:
    """
    Load translations for the specified language.

    Parameters
    ----------
    lang : str
        The language code to load translations for.

    Returns
    -------
    dict[str, Any]
        Dictionary containing translations for the language.
        Returns empty dictionary if translation file doesn't exist.
    """
    path = languages_dir / f"{lang}.json"
    if path.exists():
        with open(path, "r", encoding="utf-8") as f:
            return json.load(f)
    return {}


class LanguageMiddleware(BaseHTTPMiddleware):
    """Middleware that handles language detection and routing based on URL prefixes."""

    @override
    async def dispatch(
        self, request: Request, call_next: RequestResponseEndpoint
    ) -> Response:
        """
        Process the request and determine language settings.

        Parameters
        ----------
        request : Request
            The incoming HTTP request.
        call_next : RequestResponseEndpoint
            The next middleware or endpoint in the processing chain.

        Returns
        -------
        Response
            Either a redirect to the language-prefixed URL or the response
            from the next handler.
        """
        path = request.url.path

        if path == "/" or not any(
            path.startswith(prefix) for prefix in asset_prefixes
        ):
            path_parts = path.strip("/").split("/")
            lang = (
                path_parts[0]
                if path_parts and path_parts[0] in supported_languages
                else None
            )

            if lang:
                request.state.language = lang
                request.state.translations = get_translations(lang)
                response = await call_next(request)
                response.set_cookie(
                    "language", lang, max_age=30 * 24 * 60 * 60
                )
                return response
            else:
                cookie_lang = request.cookies.get("language")
                lang = (
                    cookie_lang if cookie_lang in supported_languages else "en"
                )
                request.state.language = lang
                if path == "/":
                    new_path = f"/{lang}"
                else:
                    new_path = f"/{lang}{path if path.startswith('/') else '/' + path}"
                return RedirectResponse(url=new_path, status_code=302)
        else:
            return await call_next(request)
