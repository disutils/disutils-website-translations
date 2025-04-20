const en = require('../languages/en');
const es = require('../languages/es');
const lt = require('../languages/lt');

const languages = { en, es, lt };

const languageMiddleware = (req, res, next) => {
    const supportedLanguages = Object.keys(languages);
    let lang = req.path.split('/')[1];

    if (supportedLanguages.includes(lang)) {
        req.language = lang;
        req.translations = languages[lang];
        res.cookie('language', lang, { maxAge: 30 * 24 * 60 * 60 * 1000 });
        next();
    } else {
        const cookieLang = req.cookies.language;
        if (supportedLanguages.includes(cookieLang)) {
            lang = cookieLang;
        } else {
            lang = 'en';
        }

        const newPath = req.path === '/' ? `/${lang}` : `/${lang}${req.path}`;
        return res.redirect(newPath);
    }
};

module.exports = languageMiddleware;
