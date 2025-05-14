/**
 * French Translation File for Disutils Team Website
 *
 * This file contains all the French translations for the Disutils Team website.
 * It includes text for navigation, footer, pages, and other UI elements.
 *
 * Language Code: fr
 * Author: NytrixFM
 * Discord: nytrixfm
 * Last Updated: 05/14/2025
 *
 * Usage:
 * - This file is automatically loaded by the language middleware.
 * - Ensure all keys match the structure defined in the base language file (e.g., `en.js`).
 * - Do not remove or rename keys, as this may break functionality.
 *
 * Guidelines:
 * - Placeholders (e.g., {seconds}, {minutes}) must remain intact.
 * - Team names, usernames, and specific terms (e.g., "RejectModders", "Disutils Team") must not be translated.
 * - Use consistent formatting and indentation for readability.
 *
 * Note: If adding new keys, ensure they are added to all other language files for consistency.
 */

module.exports = {
    config: {
        description: "Un groupe dédié de développeurs déterminés à améliorer et à simplifier l'expérience Discord pour tous les utilisateurs.",
        footer: "Copyright © Disutils Team 24-25. All rights reserved."
    },

    nav: {
        home: "Menu principal",
        news: "Nouvelles",
        faq: "FAQ",
        team: "Notre équipe",
        partners: "Nos partenaires",
        bots: "Nos Bots",
        contact: "Nous contacter",
        more: "Plus",
        login: "Se connecter",
    },

    navsub: {
        mainpages: "Pages principales",
        statuspages: "Pages de statut",
        support: "Support",
        community: "Communitée",
        voting: "Voter",
        otherpages: "Autres pages",

        // Main Pages
        changelogs: "Changements",
        documentation: "Documentation",
        prices: "Prix",

        // Status Pages
        botstatus: "Statut des bots",
        overallstatus: "Statut global",

        // Support
        supportserver: "Serveur de support",
        emailus: "Nous envoyer un E-mail",

        // Community
        discordserver: "Notre serveur discord",
        applyforstaff: "Devenir un staff",
        applyforpartner: "Devenir partenaire",

        // Voting
        topgg: "Top.gg", // keep English
        discollaborg: "Discollab.org", // keep English

        // Other Pages
        blacklistappeal: "Se faire Dé-bannir",
        terms: "Conditions de service",
        privacy: "Politique de confidentialitée",

        // Languages
        languages: "Langues"
    },

    footer: {
        brief: "Améliorez votre expérience de serveur avec des robots et des utilitaires de premier ordre.",
        topgg: "Voter sur Top.gg",
        discollaborg: "Voter sur Discollab.org"
    },

    home: {
        meet: "Nous voir",
        supportserver: "Serveur de support",
        custombots: "Bots personalisés",
        showcase: "Bots présentés",
        ourselection: "Notre séléction de bots présentés",
        ourselectionbrief: "Notre séléction de bots présentés, sélectionnés pour leurs performances et leur fiabilité exceptionnelles.",
        learnmore: "En lire plus...",

        harmodifybrief: "Harmodify est un puissant bot musical offrant une lecture fluide et un son de haute qualité. Idéal pour les sessions de jeu ou les moments de détente.",
        playdisbrief: "Playdis est un bot de jeu amusant avec des parties captivantes et un système économique intégré. Idéal pour une compétition amicale et des récompenses.",
        utilicorebrief: "UtiliCore est un bot utilitaire tout-en-un doté de fonctionnalités telles que des intégrations exceptionnelles et des notifications en temps réel. Idéal pour optimiser la gestion de votre serveur.",
        privateeyesbrief: "PrivateEyes est un bot polyvalent, adapté aux communautés matures et proposant du contenu SFW. Idéal pour les serveurs décontractés et divertissants."
    },

    news: {
        pagetitle: "Nouvelles",
        pagedescription: "Découvrez les importantes nouvelles de nos bots de notre équipe et de notre site web.",

        title1: "Nouvelle interface",
        description1: "Le site web bénéficie d'une nouvelle interface. On espère qu'elle vous plaira<br><br>Nous sommes aussi en train de travailler sur un panel pour la Disutils Team , qui va bientôt sortir. Restez au courents des prochaines mises a jour ici !",
        author1: "RejectModders Owner/Developer @Disutils Team",
        date1: "4/1/2025",

        title2: "Recrutements dans l'équipe de traduction",
        description2: "Nous sommes intéréses par une équipe de traduction. Une page dédiée a l'équipe de traduction pourra être crée.<br><br>Si vous maîtrisez une langue et souhaitez aider aux traductions, veuillez contacter RejectModders.",
        author2: "RejectModders Owner/Developer @Disutils Team",
        date2: "11/13/2024",

        title3: "Sortie du site web",
        description3: "Salut otut le monde !  Nous avons travaillé dur pour que ce site web soit bien, si vous voyez des problèmes, contactez nous !",
        author3: "RejectModders Owner/Developer @Disutils Team",
        date3: "10/31/2024"
    },

    faq: {
        title: "Questions fréquentes",

        question1: "C'est quoi Disutils Team ?",
        answer1: "Un groupe de personnes dévouées qui s'engagent à améliorer et à simplifier l'expérience Discord pour tous les utilisateurs.",

        question2: "Comment rejoindre la Disutils Team ?",
        answer2: "Vous pouvez postuler pour rejoindre la Disutils Team en visitant notre <a href=\"/apply-staff\" class=\"text-blue-500 underline\">page de candidature</a>.",

        question3: "Les bots sont-ils gratuits ?",
        answer3: "Oui, tous nos bots sont gratuits à utiliser. Cependant, nous proposons des fonctionnalités premium pour ceux qui souhaitent nous soutenir.",

        question4: "Comment inviter un bot sur mon serveur ?",
        answer4: "Cliquez sur le lien <a href=\"/bots\" class=\"text-blue-500 underline\">Inviter nos bots</a> et suivez les instructions.",

        question5: "Où puis-je trouver la documentation des bots ?",
        answer5: "Vous pouvez consulter la documentation sur la <a href=\"/docs\" class=\"text-blue-500 underline\">page Documentation</a> ou la <a href=\"/bots\" class=\"text-blue-500 underline\">page Bots</a>.",

        question6: "Comment obtenir du support ?",
        answer6: "Rejoignez notre <a href=\"/support\" class=\"text-blue-500 underline\">serveur Discord</a> ou envoyez-nous un e-mail à <a href=\"mailto:support@disutils.com\" class=\"text-blue-500 underline\">support@disutils.com</a>.",

        question7: "Que faire si je trouve un bug ?",
        answer7: "Utilisez la commande de signalement du bot, signalez-le sur notre Discord, ou envoyez-nous un e-mail.",

        question8: "Puis-je contribuer au développement des bots ?",
        answer8: "Oui ! Consultez notre <a href=\"https://github.com/disutils/disutils\" class=\"text-blue-500 underline\">page GitHub</a>.",

        question9: "Proposez-vous le développement de bots personnalisés ?",
        answer9: "Oui. Contactez-nous via notre <a href=\"/contact\" class=\"text-blue-500 underline\">page de contact</a>.",

        question10: "Comment rester informé des dernières actualités ?",
        answer10: "Consultez notre <a href=\"/news\" class=\"text-blue-500 underline\">page actualités</a> ou rejoignez notre serveur Discord."
    },

    team: {
        title: "Notre équipe",

        leaddev: "Développeurs principaux",
        backenddev: "Développeurs backend",
        webdev: "Développeurs web",
        juniordev: "Développeurs junior",
        sysadmin: "Administrateurs système",
        operationsmanager: "Responsables des opérations",
        hrmanager: "Responsables RH",
        manager: "Responsables",
        administrator: "Administrateurs",
        leadmoderator: "Modérateurs principaux",
        moderator: "Modérateurs",

        hiring: "Nous recrutons !",

        hiringdev: "Aucun développeur principal pour le moment. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">Postulez ici !</a>",
        hiringbackenddev: "Aucun développeur backend pour le moment. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">Postulez ici !</a>",
        hiringwebdev: "Aucun développeur web pour le moment. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">Postulez ici !</a>",
        hiringjuniordev: "Aucun développeur junior pour le moment. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">Postulez ici !</a>",
        hiringsysadmin: "Aucun administrateur système pour le moment. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">Postulez ici !</a>",
        hiringoperationsmanager: "Aucun responsable des opérations pour le moment. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">Postulez ici !</a>",
        hiringhrmanager: "Aucun responsable RH pour le moment. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">Postulez ici !</a>",
        hiringmanager: "Aucun responsable pour le moment. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">Postulez ici !</a>",
        hiringadministrators: "Aucun administrateur pour le moment. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">Postulez ici !</a>",
        hiringleadmoderators: "Aucun modérateur principal pour le moment. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">Postulez ici !</a>",
        hiringmoderators: "Aucun modérateur pour le moment. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">Postulez ici !</a>",
    },

    partners: {
        title: "Nos Partenaires",
        readmore: "Lire la suite",
        close: "Fermer",
        examplepartner: "Cela pourrait être vous !",
        joinus: "Rejoignez-nous et devenez partenaire pour profiter d'avantages exclusifs.",
        applyhere: "Postulez ici !"
    },

    bots: {
        title: "Nos Bots",
        corebots: "Bots Principaux",
        acquiredbots: "Bots Acquis",
        internalbots: "Bots Internes",
        comingsoon: "À venir"
    },

    status: {
        title: "Statut des Bots",
        description: "Vérifiez le statut de nos bots !",
        corebots: "Bots Principaux",
        acquiredbots: "Bots Acquis",
        internalbots: "Bots Internes",
        fetching: "Récupération...",
        online: "En ligne",
        offline: "Hors ligne",
        secondsago: "Il y a {seconds} secondes",
        minutesago: "Il y a {minutes} minutes",
        refreshtime: "Se rafraîchit toutes les {time} minutes",
        latency: "Latence Discord (ms)",
        dblatency: "Latence DB (ms)"
    },

    contact: {
        title: "Contactez-nous",
        description: "N'hésitez pas à nous contacter via les options ci-dessous. Notre équipe dédiée répondra rapidement à vos questions.",
        questionfeed: "Une question ou un commentaire ? Remplissez le formulaire ci-dessous.",
        submit: "Envoyer le message",
        name: "Nom complet",
        email: "Email",
        subject: "Objet",
        message: "Votre message...",
        emailmessage: 'Ou envoyez-nous un message via <a class="uc-link" href="mailto:support@disutils.com">email</a>.',
        othersupport: "Autres moyens de nous contacter",
        prioritysupport: "Obtenez un support prioritaire.",
        sendform: "Envoyer le formulaire",
        community: "Notre communauté",
        connect: "Connectez-vous avec les utilisateurs.",
        discord: "Rejoignez-nous maintenant !",
        emailsent: "Email envoyé avec succès !",
        emailfailed: "Échec de l'envoi de l'email.",
        sending: "Envoi en cours..."
    },

    appeal: {
        title: "Formulaire d'appel",
        description: "Si vous pensez avoir été mis sur liste noire à tort, veuillez remplir le formulaire ci-dessous pour faire appel.",
        submit: "Soumettre l'appel",
        username: "Entrez votre nom d'utilisateur",
        displayname: "Entrez votre nom affiché",
        userid: "Entrez votre identifiant utilisateur",
        email: "Entrez votre adresse email",
        reason: "Expliquez la raison de votre appel...",
        sendform: "Envoyer le formulaire",
        emailsent: "Email envoyé avec succès !",
        emailfailed: "Échec de l'envoi de l'email.",
        sending: "Envoi en cours...",
        emailmessage: 'Ou envoyez-nous un message via <a class="uc-link" href="mailto:support@disutils.com">email</a>.'
    },

    prices: {
        title: "Tarifs personnalisés des bots",
        description: "Découvrez nos services et nos options tarifaires. Tous les prix sont en <strong>USD</strong>, à partir de <strong>8 $</strong>.",
        categories: {
            title: "💰 Catégories & Tarifs",
            items: [
                {name: "Économie", price: "+7 $"},
                {name: "Modération", price: "+5 $"},
                {name: "Tickets", price: "+4 $"},
                {name: "NSFW", price: "+4 $"}
            ]
        },
        features: {
            title: "🚀 Fonctionnalités",
            groups: [
                {
                    title: "Fonctionnalités Économie",
                    items: [
                        "Système de niveaux",
                        "Profil",
                        "Travail (avec mini-jeux)",
                        "Métiers",
                        "Classement",
                        "Voler",
                        "Pierre Papier Ciseaux",
                        "Morpion"
                    ]
                },
                {
                    title: "Fonctionnalités Modération",
                    items: [
                        "Expulsion",
                        "Bannissement",
                        "Temps mort",
                        "Définir un délai pour les messages",
                        "Suivi des invitations"
                    ]
                }
            ]
        },
        custom: {
            title: "🛠️ Fonctionnalités personnalisées",
            description: "Les tarifs commencent à <strong>4 $</strong>, selon la complexité. <strong><u>Remarque : Nous n'acceptons pas les demandes de bots musicaux.</u></strong>"
        },
        hosting: {
            title: "☁️ Extensions d’hébergement",
            items: [
                {name: "Hébergement VPS", price: "+5 $"},
                {name: "Base de données cloud", price: "+5 $"},
                {name: "Hébergement continu", price: "6 $/mois (les deux) ou 3 $/mois (service unique)"}
            ]
        },
        afterServices: {
            title: "🔧 Services après-vente",
            items: [
                {name: "Corrections de bugs", description: "Gratuit (non valable si des modifications tierces sont apportées)"},
                {name: "Modifications", description: "À négocier"}
            ]
        },
        discounts: {
            title: "🎉 Réductions & Parrainage",
            items: [
                {name: "Premier achat du pack complet", discount: "20 % de réduction"},
                {name: "Commandes répétées du pack complet", discount: "10 % de réduction"},
                {name: "Parrainez un ami", discount: "5 % de réduction sur votre prochain achat"},
                {name: "Votre ami reçoit", discount: "10 % de réduction sur son premier achat"}
            ]
        },
        contact: {
            title: "📩 Contactez-nous",
            description: "Pour passer une commande ou poser des questions, envoyez un message direct à notre bot ModMail."
        }
    },

    privacy: {
        title: "Politique de confidentialité",
        description: "Chez Disutils Team, nous nous engageons à protéger votre vie privée. Cette politique de confidentialité décrit comment nous collectons, utilisons et protégeons vos informations personnelles. Dans ce document, « Nos Bots » fait référence aux bots développés par l’équipe Disutils.",
        generalprov: "Dispositions générales",
        general: {
            acceptance: "<strong>Acceptation des conditions :</strong> En utilisant Nos Bots, vous acceptez cette politique de confidentialité. Si vous êtes en désaccord avec une partie de cette politique, veuillez ne pas utiliser Nos Bots.",
            modifications: "<strong>Modifications de la politique :</strong> Nous pouvons mettre à jour cette politique de confidentialité périodiquement. Il est de votre responsabilité de la consulter régulièrement. La poursuite de l’utilisation de Nos Bots après toute modification vaut acceptation de la politique révisée.",
            scope: "<strong>Champ d’application :</strong> Cette politique de confidentialité s’applique à toutes les interactions avec Nos Bots et ne couvre pas les services ou sites tiers liés à Nos Bots."
        },
        datacollection: "Collecte de données",
        collection: {
            userdata: "<strong>Données utilisateur :</strong> Nos Bots collectent et stockent les identifiants des utilisateurs et les messages pertinents uniquement afin d’exécuter leurs fonctions efficacement.",
            feedbackdata: "<strong>Données de retour :</strong> Si vous nous fournissez un retour concernant Nos Bots, nous pouvons le collecter et l’utiliser pour leur amélioration continue. Cela peut inclure des suggestions et commentaires."
        },
        datausage: "Utilisation des données",
        usage: {
            commandexecution: "<strong>Exécution de commandes :</strong> Les données collectées sont utilisées uniquement pour exécuter les commandes. Elles ne sont utilisées à aucune autre fin.",
            feedbackusage: "<strong>Utilisation des retours :</strong> Les retours peuvent être utilisés pour améliorer les fonctionnalités de Nos Bots, sans jamais divulguer vos informations personnelles sans votre consentement explicite."
        },
        datasecurity: "Sécurité des données",
        security: {
            dataprotection: "<strong>Protection des données :</strong> Nous mettons en place des mesures raisonnables pour protéger les données collectées, mais nous ne garantissons pas une sécurité absolue. Nous ne sommes pas responsables des violations de données."
        },
        datadeletion: "Suppression des données",
        deletion: {
            datarequest: "<strong>Demande d'accès :</strong> Vous pouvez demander à consulter les données enregistrées à tout moment via notre support. <strong><u>Remarque : une seule demande par période de 30 jours.</u></strong>",
            datadeletion: "<strong>Demande de suppression :</strong> Vous pouvez demander la suppression de vos données à tout moment. <strong><u>Remarque : une seule demande par période de 30 jours.</u></strong>"
        },
        datadisclosure: "Divulgation des données",
        disclosure: {
            thirdparty: "<strong>Services tiers :</strong> Nos Bots ne vendent, partagent ni ne divulguent vos données à des tiers. Le code source est privé. Certains services tiers peuvent être utilisés pour l’hébergement ou le support, avec leurs propres politiques de confidentialité."
        },
        nsfwcontent: "Contenu NSFW",
        nsfw: {
            explicitcontent: "<strong>Contenu explicite :</strong> Nos Bots peuvent donner accès à du contenu explicite uniquement destiné aux utilisateurs majeurs ayant consenti à y accéder.",
            useracknowledgment: "<strong>Reconnaissance de l'utilisateur :</strong> En utilisant les fonctions NSFW, vous reconnaissez y accéder volontairement. Si vous êtes mineur ou mal à l’aise, veuillez ne pas utiliser ces fonctions."
        },
        contact: "Pour toute question, contactez-nous à <a href=\"mailto:support@disutilsteam.com\" class=\"text-blue-400 underline hover:text-blue-600\">support@disutilsteam.com</a>.",
        lastupdated: "Dernière mise à jour : 1er avril 2025"
    },

    terms: {
        title: "Conditions d'utilisation",
        description: "Chez Disutils Team, nous nous engageons à fournir des services de qualité. Ces conditions définissent les règles relatives à l'utilisation de Nos Bots. « Nos Bots » désigne les bots développés par Disutils Team.",
        generalprov: "Dispositions générales",
        general: {
            acceptance: "<strong>Acceptation des conditions :</strong> En intégrant Nos Bots à votre serveur, vous acceptez ces conditions. Si vous n’êtes pas d’accord, veuillez ne pas les ajouter.",
            modifications: "<strong>Modifications :</strong> Nous nous réservons le droit de modifier ces conditions à tout moment. Il est de votre responsabilité de les consulter régulièrement. L’usage continu vaut acceptation des modifications."
        },
        userresponsibilities: "Responsabilités de l'utilisateur",
        responsibilities: {
            compliance: "<strong>Conformité :</strong> Vous devez respecter toutes les lois et réglementations applicables lors de l'utilisation de Nos Bots.",
            conduct: "<strong>Conduite :</strong> Vous vous engagez à ne pas utiliser Nos Bots à des fins illégales ou interdites (harcèlement, spam, abus...)."
        },
        supportfeedback: "Support et retours",
        support: {
            feedback: "<strong>Commentaires :</strong> Vos retours sont les bienvenus. En nous les transmettant, vous nous autorisez à les utiliser pour améliorer Nos Bots.",
            support: "<strong>Support :</strong> Nous ferons de notre mieux pour offrir un support technique, sans garantie de service ininterrompu. Nous pouvons mettre fin au service sans préavis."
        },
        termination: "Résiliation",
        terminationdetails: {
            user: "<strong>Par l’utilisateur :</strong> Vous pouvez retirer Nos Bots de votre serveur à tout moment.",
            us: "<strong>Par nous :</strong> Nous pouvons mettre fin au service à notre entière discrétion, sans préavis."
        },
        disclaimer: "Exclusion de garantie",
        warranty: {
            nowarranty: "<strong>Sans garantie :</strong> Nos Bots sont fournis « tels quels », sans aucune garantie, explicite ou implicite, quant à leur exactitude, fiabilité ou disponibilité."
        },
        liability: "Limitation de responsabilité",
        liabilitydetails: {
            liability: "<strong>Responsabilité :</strong> En aucun cas, les créateurs ou affiliés de Nos Bots ne peuvent être tenus responsables de dommages directs, indirects ou spéciaux liés à leur utilisation ou leur indisponibilité."
        },
        contact: "Pour toute question, contactez-nous à <a href=\"mailto:support@disutilsteam.com\" class=\"text-blue-400 underline hover:text-blue-600\">support@disutilsteam.com</a>.",
        lastupdated: "Dernière mise à jour : 1er avril 2025"
    },

    song: {
        clickme: "^^ Cliquez ici ^^"
    },

    maintenance: {
        title: "Nous revenons bientôt !",
        globalmaintenance: "Notre site est en maintenance programmée pour améliorer votre expérience. Merci de votre patience. Revenez nous voir bientôt.",
        pagemaintenance: "Cette page est temporairement indisponible en raison de travaux. Nous travaillons à rétablir l’accès au plus vite. Merci de votre compréhension."
    },

    errors: {
        badrequest: "Requête incorrecte !",
        unauthorized: "Accès non autorisé !",
        forbidden: "Zone interdite !",
        notfound: "Perdu dans l’espace !",
        internalservererror: "Erreur serveur !",
        unknownerror: "Erreur inconnue !",

        badrequesttext: "Requête incorrecte ! Plus déroutant qu’un chat faisant du calcul. Essayez encore, avec moins de fautes et plus de café.",
        unauthorizedtext: "Non autorisé ! Qui va là ? Seuls ceux avec les bons identifiants peuvent passer. Dites « ami » et entrez... ou connectez-vous correctement.",
        forbiddentext: "Interdit ! Vous êtes dans une zone interdite. Seul l’Élu peut entrer. Spoiler : ce n’est pas vous.",
        notfoundtext: "Introuvable ! Cette page est partie en vacances sans laisser d’adresse. Essayez ailleurs avant qu’on déclare sa disparition.",
        internalservererrortext: "Erreur interne ! Le serveur a fait un burn-out. On le motive avec des cookies. Merci de patienter.",
        unknownerrortext: "Erreur inconnue ! Quelque chose a explosé de façon mystérieuse. Même notre sorcier tech est perplexe. Réessayez... ou sacrifiez une chèvre. (Juste une blague… en partie.)",

        home: "Retour à l’accueil",
        searchnow: "Pourquoi ne pas faire une nouvelle recherche ? <a class=\"uc-link\" href=\"#uc-search-modal\" data-uc-toggle>Rechercher maintenant</a>",
        searchtext: "Que cherchez-vous ?",
        searchkeyword: "Saisissez votre mot-clé..."
    }
};
