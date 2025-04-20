# Language Integration Documentation for Disutils Team Website

> [!NOTE]
> This documentation provides a professional and detailed guide on how to create and integrate new language files for the Disutils Team website. It is essential to follow these instructions to ensure consistency, proper functionality, and adherence to project standards.

## Table of Contents
- [Overview](#overview)
- [Directory Structure](#directory-structure)
- [Adding a New Language](#adding-a-new-language)
- [Updating the Middleware](#updating-the-middleware)
- [Translation Guidelines](#translation-guidelines)
- [Common Errors and Solutions](#common-errors-and-solutions)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Example Language File](#example-language-file-french-frjs)
- [Code of Conduct](#code-of-conduct)

---

## Overview

> [!IMPORTANT]
> **Language Proficiency**: Contributors must have a strong understanding of English or one of the existing languages in the `languages` directory. This ensures accurate translations and avoids errors.
>
> **File Integrity**: Do not create fake or malicious files. All pull requests are thoroughly scanned for inappropriate or harmful content. Violations will result in immediate rejection and potential reporting.
>
> **Code of Conduct**: Respect the structure, placeholders, and naming conventions outlined in this documentation.

---

## Directory Structure

The project uses the following structure for language support:

```
/middleware
    languages.js
/languages
    en.js  (English - Base language)
    es.js  (Spanish)
    lt.js  (Lithuanian)
    // Add your language file here
```

- `middleware/languages.js`: Middleware to handle language detection and loading.
- `languages/`: Directory containing individual language files (e.g., `en.js` for English, `es.js` for Spanish).

---

## Adding a New Language

### Step 1: Create a New Language File
1. Navigate to the `languages` directory.
2. Create a new file named after the [ISO 639-1 language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (e.g., `fr.js` for French).
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

### Step 2: Translate the Content
- Replace the English text with the translated text for the new language.
- **Do not change placeholders, team names, or user names** (e.g., `RejectModders`, `Disutils Team`).
- Refer to the base language file (`en.js`) to ensure you've included all necessary sections and keys.

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

---

## Translation Guidelines

### DO's
- ✅ Maintain the exact same object structure as the base language file (`en.js`)
- ✅ Keep all keys the same as in the original file
- ✅ Preserve all placeholders like `{seconds}`, `{minutes}`, `{time}`, etc.
- ✅ Maintain HTML tags (e.g., `<a>`, `<strong>`) in their original position
- ✅ Use appropriate cultural and linguistic adaptations where necessary
- ✅ Follow proper grammar, punctuation, and capitalization rules of the target language

### DON'Ts
- ❌ Translate team names, product names, or brand names (e.g., "Disutils Team", "RejectModders")
- ❌ Add, remove, or rename object keys
- ❌ Remove, modify, or reposition placeholders
- ❌ Translate variable names or code comments
- ❌ Use machine translation without proper review and editing
- ❌ Add jokes, political statements, or inappropriate content

---

## Common Errors and Solutions

### 1. Missing Keys Error
**Error:** `TypeError: Cannot read property 'X' of undefined`
**Cause:** Missing translation keys or sections in your language file.
**Solution:** Compare your file with `en.js` to ensure all sections and keys are present.

### 2. Placeholder Errors
**Error:** Website displays `undefined` or broken text where dynamic content should appear.
**Cause:** Placeholders like `{seconds}` were removed or modified.
**Solution:** Ensure all placeholders from the original file are maintained in the same format.

### 3. JavaScript Syntax Errors
**Error:** `SyntaxError: Unexpected token`
**Cause:** Missing commas, quotes, or brackets in your JavaScript file.
**Solution:** Use a JavaScript linter or editor with syntax highlighting to check for syntax errors.

### 4. Encoding Issues
**Error:** Strange characters appear in the website text.
**Cause:** File was not saved with UTF-8 encoding.
**Solution:** Ensure your file is saved with UTF-8 encoding to support all characters.

### 5. Middleware Not Loading
**Error:** New language option doesn't appear in the website.
**Cause:** The middleware wasn't properly updated to include the new language.
**Solution:** Follow the "Updating the Middleware" section to properly register your language.

---

## Pull Request Guidelines

Before submitting a Pull Request (PR) with your new language integration, please ensure:

1. **Complete Translation**
   - Your file includes translations for ALL sections and keys in the base language file
   - No placeholder content or temporary translations remain

2. **Testing**
   - You have locally tested the language integration (if possible)
   - All placeholders and dynamic content render correctly

3. **PR Description**
   - Include the language name and code in the PR title (e.g., "Add French (fr) Translation")
   - Mention your fluency level in the language
   - Note any specific cultural adaptations you made

4. **Self-Review Checklist**
   - [ ] My translation follows the structure of the base language file
   - [ ] All placeholders and HTML tags are preserved
   - [ ] Team names and product names are not translated
   - [ ] The file uses proper indentation and formatting
   - [ ] I have updated the middleware file correctly
   - [ ] My file includes the appropriate documentation header

5. **Responsiveness**
   - Be prepared to respond to review comments and make requested changes

PRs that do not meet these guidelines may be delayed or rejected. We appreciate your contribution and want to ensure the quality and consistency of the project.

---

## Example Language File: French (`fr.js`)

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
