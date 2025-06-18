# Language Integration Documentation for Disutils Team Website

> [!NOTE]
> This documentation provides a professional and detailed guide on how to create and integrate new language files for the Disutils Team website. It is essential to follow these instructions to ensure consistency, proper functionality, and adherence to project standards.

## Table of Contents
- [Overview](#overview)
- [Directory Structure](#directory-structure)
- [Adding a New Language](#adding-a-new-language)
- [Updating the Language Middleware](#updating-the-language-middleware)
- [Translation Guidelines](#translation-guidelines)
- [Special Section: Error Messages](#special-section-error-messages)
- [Common Errors and Solutions](#common-errors-and-solutions)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Example Language File](#example-language-file)
- [Code of Conduct](#code-of-conduct)

---

## Overview

> [!IMPORTANT]
> **Language Proficiency**: Contributors must have a strong understanding of English or one of the existing languages in the `configuration/translations/website` directory. This ensures accurate translations and avoids errors.
>
> **File Integrity**: Do not create fake or malicious files. All pull requests are thoroughly scanned for inappropriate or harmful content. Violations will result in immediate rejection and potential reporting.
>
> **Code of Conduct**: Respect the structure, placeholders, and naming conventions outlined in this documentation.

---

## Directory Structure

The project uses the following structure for language support:

```
/configuration
    /translations
        /website
            en.json  (English - Base language)
            es.json  (Spanish)
            fr.json  (French)
            lt.json  (Lithuanian)
            pa.json  (Punjabi)
            // Add your language file here
/middleware
    /website
        language.py
```

- `middleware/website/language.py`: Middleware class to handle language detection and loading
- `configuration/translations/website/`: Directory containing individual language files as JSON (e.g., `en.json` for English, `es.json` for Spanish)

---

## Adding a New Language

### Step 1: Create a New Language File
1. Navigate to the `configuration/translations/website` directory.
2. Create a new file named after the [ISO 639-1 language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (e.g., `de.json` for German).
3. Use the existing files as a template to structure your file, specifically following the structure of the base language file (`en.json`).

### Step 2: Translate the Content
- Copy the entire contents of `en.json` into your new language file.
- Replace the English text with translated text for your language while preserving the JSON structure.
- **Do not change placeholders, team names, or user names** (e.g., `RejectModders`, `Disutils Team`).
- Ensure all placeholders like `{seconds}`, `{minutes}`, `{time}`, etc. remain intact.

Example from French translation:
```json
"navigation": {
    "primary": {
      "home": "Menu principal",
      "news": "Nouvelles",
      "faq": "FAQ",
      "team": "Notre équipe",
      "partners": "Nos partenaires",
      "bots": "Nos Bots",
      "contact": "Nous contacter",
      "more": "Plus",
      "login": "Se connecter"
    }
}
```

---

## Updating the Language Middleware

The `LanguageMiddleware` class in `middleware/website/language.py` is automatically set up to detect new language files in the translations directory. As long as your language file follows the correct naming convention (`[language-code].json`) and is placed in the `configuration/translations/website` directory, it should be automatically detected.

However, you might want to confirm that your language appears in the language selection interface after integration.

---

## Translation Guidelines

### DO's
- ✅ Maintain the exact same JSON structure as the base language file (`en.json`)
- ✅ Keep all keys the same as in the original file
- ✅ Preserve all placeholders like `{seconds}`, `{minutes}`, `{time}`, etc.
- ✅ Maintain HTML tags (e.g., `<a>`, `<strong>`) in their original position
- ✅ Use appropriate cultural and linguistic adaptations where necessary
- ✅ Follow proper grammar, punctuation, and capitalization rules of the target language
- ✅ Be creative with error messages while keeping them appropriate (see Special Section below)

### DON'Ts
- ❌ Translate team names, product names, or brand names (e.g., "Disutils Team", "RejectModders")
- ❌ Add, remove, or rename JSON keys
- ❌ Remove, modify, or reposition placeholders
- ❌ Translate code comments in the JSON file
- ❌ Use machine translation without proper review and editing
- ❌ Add political, offensive, or inappropriate content (even in humor sections)

---

## Special Section: Error Messages

The `system.errors` section in language files allows for creative humor and culturally-relevant jokes. This is the **only** section where you can deviate from direct translation to include humor appropriate to the target language and culture.

### Guidelines for Error Messages
- Keep humor friendly and appropriate for all ages
- Adapt jokes to be culturally relevant for the target language
- Maintain the same meaning/intent of the error message
- Preserve all HTML links and formatting
- Ensure humor doesn't target specific groups or include offensive material

### Example of the `system.errors` Section
```json
"system": {
    "errors": {
      "meta": {
        "title": "Error",
        "description": "An error has occurred while processing your request."
      },
      "titles": {
        "bad_request": "Bad Request!",
        "unauthorized": "Unauthorized Access!",
        "forbidden": "Forbidden Zone!",
        "not_found": "Lost in Space!",
        "internal_server_error": "Server Meltdown!",
        "unknown_error": "Unknown Error!"
      },
      "messages": {
        "bad_request": "Bad Request! That was more confusing than a cat doing calculus. Try again, but maybe with fewer typos and more coffee.",
        "unauthorized": "Unauthorized! Who goes there?! Only those with the sacred credentials may pass. Speak 'friend' and enter... or just log in properly.",
        "forbidden": "Forbidden! You've stumbled into the forbidden zone. Legend says only the Chosen One may enter. Spoiler: it's not you.",
        "not_found": "Not Found! This page has gone on vacation, left no forwarding address, and isn't answering texts. Try looking elsewhere before we file a missing page report.",
        "internal_server_error": "Internal Server Error! The server just rage-quit. We're bribing it with snacks and compliments. Please stand by.",
        "unknown_error": "Unknown Error! Something broke in a mysterious, dramatic way. Even our tech wizard is scratching his beard. Try again, or summon a goat for sacrifice. (Just kidding... mostly.)"
      },
      "actions": {
        "home": "Go back home",
        "search_now": "Why not try to search again? <a class=\"uc-link\" href=\"#uc-search-modal\" data-uc-toggle>Search now</a>",
        "search_text": "What are you looking for?",
        "search_keyword": "Type your keyword..."
      }
    }
}
```

When translating these messages, feel free to adapt the humor to match your language's cultural context while keeping the messages appropriate and friendly.

---

## Common Errors and Solutions

### 1. Missing Keys Error
**Error:** `KeyError` or missing translations on the website
**Cause:** Missing translation keys or sections in your language file.
**Solution:** Compare your file with `en.json` to ensure all sections and keys are present.

### 2. Placeholder Errors
**Error:** Website displays incorrect text or missing content where dynamic content should appear.
**Cause:** Placeholders like `{seconds}` were removed or modified.
**Solution:** Ensure all placeholders from the original file are maintained in the same format.

### 3. JSON Syntax Errors
**Error:** File not loading or errors appearing in the browser console
**Cause:** Missing commas, quotes, or brackets in your JSON file.
**Solution:** Use a JSON validator or editor with syntax highlighting to check for syntax errors.

### 4. Encoding Issues
**Error:** Strange characters appear in the website text.
**Cause:** File was not saved with UTF-8 encoding.
**Solution:** Ensure your file is saved with UTF-8 encoding to support all characters.

### 5. Language Not Appearing
**Error:** New language option doesn't appear in the website.
**Cause:** Language file not properly placed or named incorrectly.
**Solution:** Verify that your file is in the correct directory with the proper ISO language code naming.

---

## Pull Request Guidelines

Before submitting a Pull Request (PR) with your new language integration, please ensure:

1. **Complete Translation**
   - Your file includes translations for ALL sections and keys in the base language file
   - No placeholder content or temporary translations remain

2. **Documentation**
   - Include the language name and code in the PR title (e.g., "Add German (de) Translation")
   - Mention your fluency level in the language
   - Note any specific cultural adaptations you made, especially in the `errors` section

3. **Self-Review Checklist**
   - [ ] My translation follows the structure of the base language file
   - [ ] All placeholders and HTML tags are preserved
   - [ ] Team names and product names are not translated
   - [ ] The file uses proper indentation and formatting
   - [ ] My file is correctly placed in the translations directory with the proper ISO language code
   - [ ] The humor in my `errors` section is appropriate and culturally relevant

4. **Responsiveness**
   - Be prepared to respond to review comments and make requested changes

> [!NOTE]
> **No Testing Required**: Since the website is not open source, you cannot test your translation directly. Focus on accuracy and completeness according to the base language file.

PRs that do not meet these guidelines may be delayed or rejected. We appreciate your contribution and want to ensure the quality and consistency of the project.

---

## Example Language File

Here's a shortened example of a language file (French, `fr.json`):

```json
{
  "meta": {
    "config": {
      "description": "Un groupe dédié de développeurs déterminés à améliorer et à simplifier l'expérience Discord pour tous les utilisateurs.",
      "footer": "Copyright © Disutils Team 24-25. All rights reserved."
    },
    "footer": {
      "brief": "Améliorez votre expérience de serveur avec des robots et des utilitaires de premier ordre.",
      "topgg": "Voter sur Top.gg",
      "discollaborg": "Voter sur Discollab.org"
    }
  },

  "navigation": {
    "primary": {
      "home": "Menu principal",
      "news": "Nouvelles",
      "faq": "FAQ",
      "team": "Notre équipe",
      "partners": "Nos partenaires",
      "bots": "Nos Bots",
      "contact": "Nous contacter",
      "more": "Plus",
      "login": "Se connecter"
    },
    "secondary": {
      "mainpages": "Pages principales",
      "statuspages": "Pages de statut",
      "support": "Support",
      "community": "Communité",
      "voting": "Voter",
      "otherpages": "Autres pages",
      "changelogs": "Changements",
      "documentation": "Documentation",
      "prices": "Prix",
      "botstatus": "Statut des bots",
      "overallstatus": "Statut global",
      "supportserver": "Serveur de support",
      "emailus": "Nous envoyer un E-mail",
      "discordserver": "Notre serveur discord",
      "applyforstaff": "Devenir un staff",
      "applyforpartner": "Devenir partenaire",
      "topgg": "Top.gg",
      "discollaborg": "Discollab.org",
      "blacklistappeal": "Se faire Dé-bannir",
      "terms": "Conditions de service",
      "privacy": "Politique de confidentialitée",
      "languages": "Langues"
    }
  }
}
```

The complete file would contain all sections present in the base `en.json` file.

---

## Code of Conduct

> [!WARNING]
> **Fake or Malicious Files**: Submitting fake or harmful files is strictly prohibited. All pull requests are scanned for malicious content, and violations will result in immediate rejection and potential reporting.
>
> **Translation Accuracy**: Ensure translations are accurate and contextually appropriate. Poor-quality translations may be rejected.

By contributing to this project, you agree to:
1. Provide high-quality, accurate translations
2. Respect the structure and guidelines outlined in this documentation
3. Respond to feedback and make necessary adjustments
4. Avoid inserting political, offensive, or divisive content
5. Help maintain and update your language file as the project evolves

---

Thank you for your interest in contributing to the Disutils Team website language integration. Your contribution helps make our tools and resources accessible to a wider audience.

For any questions or assistance, please contact a team member through our Discord server or open an issue on GitHub.
