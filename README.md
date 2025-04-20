# Language Integration Documentation for Disutils Team Website

This documentation provides a professional and detailed guide on how to create and integrate new language files for the Disutils Team website. It is essential to follow these instructions to ensure consistency, proper functionality, and adherence to project standards.

---

## **Important Requirements**

1. **Language Proficiency**: Contributors must have a strong understanding of English or one of the existing languages in the `languages` directory. This ensures accurate translations and avoids errors.
2. **File Integrity**: Do not create fake or malicious files. All pull requests are thoroughly scanned for inappropriate or harmful content. Violations will result in immediate rejection and potential reporting.
3. **Code of Conduct**: Respect the structure, placeholders, and naming conventions outlined in this documentation.

---

## **Directory Structure**

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

## **Adding a New Language**

### **Step 1: Create a New Language File**
1. Navigate to the `languages` directory.
2. Create a new file named after the language code (e.g., `fr.js` for French).
3. Use the following template to structure the file:

```javascript
/**
 * [Language Name] Translation File for Disutils Team Website
 *
 * This file contains all the translations for the Disutils Team website in [Language Name].
 * It includes text for navigation, footer, pages, and other UI elements.
 *
 * Language Code: [language_code]
 * Author: [Your Name]
 * Discord: [Your Discord Username]
 * Last Updated: [Date]
 *
 * Usage:
 * - This file is automatically loaded by the language middleware.
 * - Ensure all keys match the structure defined in the base language file (e.g., `en.js`).
 * - Do not remove or rename keys, as this may break functionality.
 *
 * Guidelines:
 * - Placeholders (e.g., {seconds}, {minutes}) must remain intact.
 * - Team names, user names, and specific terms (e.g., "RejectModders", "Disutils Team") must not be translated.
 * - Use consistent formatting and indentation for readability.
 *
 * Note: If adding new keys, ensure they are added to all other language files for consistency.
 */

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

    // Add other sections like `navsub`, `footer`, `home`, etc., following the structure in `en.js`.
};
```

### **Step 2: Translate the Content**
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

## **Updating the Middleware**

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
if (Object.keys(languages).includes(lang)) { // Automatically checks all supported languages
    req.language = lang;
    req.translations = languages[lang];
    res.cookie('language', lang, { maxAge: 30 * 24 * 60 * 60 * 1000 });
    next();
}
```

---

## **Testing the New Language**

1. Start the server.
2. Access the website with the new language code in the URL (e.g., `/fr` for French).
3. Verify that all translations are displayed correctly and that the structure matches the base language file (`en.js`).

---

## **Best Practices**

- **Consistency**: Follow the structure and naming conventions in `en.js`.
- **Placeholders**: Do not modify placeholders like `{seconds}`, `{minutes}`, or `{time}`.
- **Team/User Names**: Do not translate names like `RejectModders` or `Disutils Team`.
- **HTML Tags**: Ensure HTML tags (e.g., `<a>`, `<strong>`) remain intact.
- **File Integrity**: Ensure the file is free of malicious or inappropriate content.

---

## **Warning**

- **Fake or Malicious Files**: Submitting fake or harmful files is strictly prohibited. All pull requests are scanned for malicious content, and violations will result in immediate rejection and potential reporting.
- **Translation Accuracy**: Ensure translations are accurate and contextually appropriate. Poor-quality translations may be rejected.

---

## **Example Language File: French (`fr.js`)**

```javascript
/**
 * French Translation File for Disutils Team Website
 *
 * This file contains all the French translations for the Disutils Team website.
 * It includes text for navigation, footer, pages, and other UI elements.
 *
 * Language Code: fr
 * Author: [Your Name]
 * Discord: [Your Discord Username]
 * Last Updated: [Date]
 *
 * Note: Do not modify placeholders, team names, or user names (e.g., "RejectModders", "Disutils Team").
 */

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

    // Add other sections like `navsub`, `footer`, `home`, etc., following the structure in `en.js`.
};
```

---

By adhering to this guide, you can contribute new languages to the Disutils Team website while maintaining high standards of quality and functionality.
