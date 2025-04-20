# Language Integration Documentation for Disutils Team Website

This documentation provides a step-by-step guide on how to create and integrate new language files for the Disutils Team website. Follow these instructions to ensure consistency and proper functionality.

---

## Directory Structure

The project uses the following structure for language support:

```
/middleware
    languages.js
/languages
    en.js
    es.js
    lt.js
```

- `middleware/languages.js`: Middleware to handle language detection and loading.
- `languages/`: Directory containing individual language files (e.g., `en.js` for English, `es.js` for Spanish).

---

## Adding a New Language

### Step 1: Create a New Language File
1. Navigate to the `languages` directory.
2. Create a new file named after the language code (e.g., `fr.js` for French).
3. Use the following template to structure the file:

```javascript
module.exports = {
    config: {
        description: "A brief description of your team or website.",
        footer: "Copyright © Disutils Team 24-25. All rights reserved."
    },

    nav: {
        home: "Home",
        news: "News",
        faq: "FAQ",
        team: "Our Team",
        partners: "Our Partners",
        bots: "Our Bots",
        contact: "Contact Us",
        more: "More",
        login: "Login"
    },

    navsub: {
        mainpages: "Main Pages",
        statuspages: "Status Pages",
        support: "Support",
        community: "Community",
        voting: "Voting",
        otherpages: "Other Pages",
        changelogs: "Changelogs",
        documentation: "Documentation",
        prices: "Prices",
        botstatus: "Bot Status",
        overallstatus: "Overall Status",
        supportserver: "Support Server",
        emailus: "Email Us",
        discordserver: "Discord Server",
        applyforstaff: "Apply for Staff",
        applyforpartner: "Apply for Partner",
        topgg: "Top.gg",
        discollaborg: "Discollab.org",
        blacklistappeal: "Blacklist Appeal",
        terms: "Terms of Service",
        privacy: "Privacy Policy",
        languages: "Languages"
    },

    footer: {
        brief: "Enhancing your server experience with top-notch bots and utilities.",
        topgg: "Vote on Top.gg",
        discollaborg: "Vote on Discollab.org"
    },

    // Add other sections like `home`, `news`, `faq`, etc., following the structure in `en.js`.
};
```

### Step 2: Translate the Content
- Replace the English text with the translated text for the new language.
- **Do not change placeholders, team names, or user names** (e.g., `RejectModders`, `Disutils Team`).

Example:
```javascript
nav: {
    home: "Accueil", // French for "Home"
    news: "Actualités", // French for "News"
    faq: "FAQ",
    team: "Notre Équipe",
    partners: "Nos Partenaires",
    bots: "Nos Bots",
    contact: "Contactez-nous",
    more: "Plus",
    login: "Connexion"
}
```

---

## Updating the Middleware

1. Open `middleware/languages.js`.
2. Add the new language code to the `require` statements and the `languages` object.

Example for adding French (`fr`):
```javascript
const en = require('../languages/en');
const es = require('../languages/es');
const lt = require('../languages/lt');
const fr = require('../languages/fr'); // Add this line

const languages = { en, es, lt, fr }; // Add `fr` here
```

3. Update the `if` condition to include the new language code:
```javascript
if (['en', 'es', 'lt', 'fr'].includes(lang)) { // Add `fr` here
    req.language = lang;
    req.translations = languages[lang];
    res.cookie('language', lang, { maxAge: 30 * 24 * 60 * 60 * 1000 });
    next();
}
```

---

## Testing the New Language

1. Start the server.
2. Access the website with the new language code in the URL (e.g., `/fr` for French).
3. Verify that all translations are displayed correctly.

---

## Best Practices

- **Consistency**: Follow the structure and naming conventions in `en.js`.
- **Placeholders**: Do not modify placeholders like `{seconds}`, `{minutes}`, or `{time}`.
- **Team/User Names**: Do not translate names like `RejectModders` or `Disutils Team`.
- **HTML Tags**: Ensure HTML tags (e.g., `<a>`, `<strong>`) remain intact.

---

## Example Language File: French (`fr.js`)

```javascript
module.exports = {
    config: {
        description: "Un groupe dédié à améliorer et simplifier l'expérience Discord pour tous les utilisateurs.",
        footer: "Copyright © Disutils Team 24-25. Tous droits réservés."
    },

    nav: {
        home: "Accueil",
        news: "Actualités",
        faq: "FAQ",
        team: "Notre Équipe",
        partners: "Nos Partenaires",
        bots: "Nos Bots",
        contact: "Contactez-nous",
        more: "Plus",
        login: "Connexion"
    },

    navsub: {
        mainpages: "Pages Principales",
        statuspages: "Pages de Statut",
        support: "Support",
        community: "Communauté",
        voting: "Votes",
        otherpages: "Autres Pages",
        changelogs: "Journal des Modifications",
        documentation: "Documentation",
        prices: "Tarifs",
        botstatus: "Statut des Bots",
        overallstatus: "Statut Global",
        supportserver: "Serveur de Support",
        emailus: "Envoyez-nous un Email",
        discordserver: "Serveur Discord",
        applyforstaff: "Postuler pour l'Équipe",
        applyforpartner: "Postuler pour un Partenariat",
        topgg: "Top.gg",
        discollaborg: "Discollab.org",
        blacklistappeal: "Appel de Liste Noire",
        terms: "Conditions d'Utilisation",
        privacy: "Politique de Confidentialité",
        languages: "Langues"
    },

    footer: {
        brief: "Améliorez votre expérience serveur avec des bots et utilitaires de premier ordre.",
        topgg: "Votez sur Top.gg",
        discollaborg: "Votez sur Discollab.org"
    }
};
```

---

By following this guide, you can easily add new languages to the Disutils Team website while maintaining consistency and functionality.
