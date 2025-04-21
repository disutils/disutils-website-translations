/**
 * Lithuanian Translation File for Disutils Team Website
 *
 * This file contains all the Lithuanian translations for the Disutils Team website.
 * It includes text for navigation, footer, pages, and other UI elements.
 *
 * Language Code: lt
 * Author: nextrin
 * Discord: nextrin
 * Last Updated: 4/21/2025
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
        description: "Speciali grupė asmenų, įsipareigojusių pagerinti ir supaprastinti „Discord“ patirtį visiems vartotojams.",
        footer: "Autorių teisės © Disutils Team 24-25.  Visos teisės saugomos."
    },

    nav: {
        home: "Pagrindinis",
        news: "Naujienos",
        faq: "Dažni klausimai",
        team: "Komanda",
        partners: "Partneriai",
        bots: "Botai",
        contact: "Susisiekite su mumis",
        more: "Daugiau",
        login: "Prisijungti",
    },

    navsub: {
        mainpages: "Pagrindiniai puslapiai",
        statuspages: "Būklės puslapiai",
        support: "Pagalba",
        community: "Bendruomenė",
        voting: "Balsavimas",
        otherpages: "Kiti puslapiai",

        // Main Pages
        changelogs: "Keitimai",
        documentation: "Dokumentacija",
        prices: "Kainos",

        // Status Pages
        botstatus: "Botų būklė",
        overallstatus: "Bendra būklė",

        // Support
        supportserver: "Pagalbos serveris",
        emailus: "Susisiekite su mumis El. paštu",

        // Community
        discordserver: "'Discord' serveris",
        applyforstaff: "Kreipkis dėl darbo kaip personalas",
        applyforpartner: "Kreipkis dėl partnerystės",

        // Voting
        topgg: "Top.gg", // keep English
        discollaborg: "Discollab.org", // keep English

        // Other Pages
        blacklistappeal: "Juodraščio apeliacija",
        terms: "Paslaugų teikimo sąlygos",
        privacy: "Privatumo politika",

        // Languages
        languages: "Kalbos"
    },

    footer: {
        brief: "Pagerinkite savo serverio patirtį naudodami aukščiausios klasės robotus ir paslaugas.",
        topgg: "Balsuokite su Top.gg",
        discollaborg: "Balsuokite su Discollab.org"
    },

    home: {
        meet: "Susipažinkite su",
        supportserver: "Pagalbos serveris",
        custombots: "Personalūs botai",
        showcase: "Demonstruoti botai",
        ourselection: "Mūsų demonstruotų botų pasirinkimas.",
        ourselectionbrief: "Mūsų demonstruotų botų pasirinkimas, atrinktas dėl išskirtinio našumo ir patikimumo.",
        learnmore: "Sužinokite daugiau",

        harmodifybrief: "Harmodify yra galingas muzikos botas su sklandžiu atkūrimu ir aukštos kokybės garsu. Idealiai tinka žaidimų sesijoms ar \"Hangout\".",
        playdisbrief: "Playdis yra linksmas žaidimų botas su patraukliais žaidimais ir integruota ekonomiška sistema. Idealiai tinka draugiškoms varžyboms ir apdovanojimams.",
        utilicorebrief: "UtiliCore yra \"viskas viename\" naudingumo botas su tokiomis funkcijomis kaip stulbinantys įterpimai ir pranešimai realiuoju laiku. Idealiai tinka optimizuoti serverio valdymą.",
        privateeyesbrief: "PrivateEyes yra universalus NSFW botas su funkcijomis, skirtomis suaugusioms bendruomenėms ir SFW turiniui. Idealiai tinka linksmiems ir atsipalaidavusiems serveriams."
    },

    news: {
        pagetitle: "Naujienos",
        pagedescription: "Gauk svarbią informaciją apie mūsų paslaugas ir komandą, bei mūsų svetainę!",

        title1: "Naujas vartotojo sąsajos naujinys",
        description1: "Svetainės vartotojo sąsaja buvo atnaujinta į naują dizainą. Tikimės, kad jums patiks!<br><br>Taip pat dirbame su Disutils komandai skirtu prietaisų skydeliu, kuris netrukus bus išleistas. Sekite naujienas!",
        author1: "RejectModders Owner/Developer @Disutils Team",
        date1: "2025-04-01",

        title2: "Vertėjų komandos įdarbinimas",
        description2: "Mes ieškome atsidavusių asmenų, kurie prisijungtų prie mūsų vertimų komandos. \"Disutils\" svetainėje bus sukurtas asmeninis vertimų komandos puslapis, kuriame bus pristatytas jūsų indėlis.<br><br>Jei mokate kalbą ir norite padėti išversti, susisiekite su \"RejectModders\".",
        author2: "RejectModders Owner/Developer @Disutils Team",
        date2: "2024-11-13",

        title3: "Svetainė išleista!",
        description3: "Sveiki visi! Labai daug dirbome, kad ši svetainė atrodytų tikrai gerai, tikimės, kad jums patiks ir, jei pastebėsite kokių nors problemų, praneškite mums!",
        author3: "RejectModders Owner/Developer @Disutils Team",
        date3: "2024-10-31"
    },

    faq: {
        title: "Dažnai klausti klausimai",

        question1: "Kas yra Disutils komanda?",
        answer1: "Skirta asmenų grupė, pasiryžusi pagerinti ir supaprastinti Discord patirtį visiems vartotojams.",

        question2: "Kaip galiu prisijungti prie Disutils komandos?",
        answer2: "Galite pateikti paraišką prisijungti prie Disutils komandos apsilankę mūsų <a href=\"/apply-staff\" class=\"text-blue-500 underline\">paraiškos puslapyje</a>.",

        question3: "Ar botus galima naudoti nemokamai?",
        answer3: "Taip, visi mūsų botai gali būti naudojami nemokamai. Tačiau mes siūlome aukščiausios kokybės funkcijas tiems, kurie nori mus palaikyti.",

        question4: "Kaip pakviesti botą į savo serverį?",
        answer4: "Spustelėkite nuorodą <a href=\"/bots\" class=\"text-blue-500 underline\">Pakviesti mūsų robotus</a> ir vadovaukitės instrukcijomis.",

        question5: "Kur galiu rasti botų dokumentaciją?",
        answer5: "Dokumentaciją galite rasti <a href=\"/docs\" class=\"text-blue-500 underline\">Dokumentacijos</a> puslapyje arba <a href=\"/bots\" class=\"text-blue-500 underline\">Botų</a> puslapyje.",

        question6: "Kaip galiu gauti pagalbą?",
        answer6: "Prisijunkite prie mūsų <a href=\"/support\" class=\"text-blue-500 underline\">Discord serverio</a> arba parašykite mums el. laišką adresu <a href=\"mailto:support@disutils.com\" class=\"text-blue-500 underline\">support@disutils.com</a>.",

        question7: "Ką daryti, jei randu klaidą?",
        answer7: "Naudokite boto pranešimo apie klaidas komandą, praneškite apie tai mūsų Discord arba atsiųskite mums el. laišką.",

        question8: "Ar galiu prisidėti prie botų kūrimo?",
        answer8: "Taip! Žr. mūsų <a href=\"https://github.com/disutils/disutils\" class=\"text-blue-500 underline\">GitHub puslapį</a>.",

        question9: "Ar siūlote pasirinktinio boto kūrimą?",
        answer9: "Taip. Susisiekite su mumis per mūsų <a href=\"/contact\" class=\"text-blue-500 underline\">kontaktų puslapį</a>.",

        question10: "Kaip gauti naujausias naujienas?",
        answer10: "Stebėkite mūsų <a href=\"/news\" class=\"text-blue-500 underline\">naujienų puslapį</a> arba prisijunkite prie mūsų Discord serverio."
    },

    team: {
        title: "Mūsų komanda",

        leaddev: "Pagrindiniai kūrėjai",
        backenddev: "'Backend' kūrėjai",
        webdev: "Svetainės kūrėjai",
        juniordev: "Jaunesnieji kūrėjai",
        sysadmin: "Sistemos administratoriai",
        operationsmanager: "Operacijų vadovai",
        hrmanager: "Personalo vadovai",
        manager: "Vadovai",
        administrator: "Administratoriai",
        leadmoderator: "Pagrindiniai moderatoriai",
        moderator: "Moderatoriai",

        hiring: "Samdome!",

        hiringdev: "Šiuo metu nėra pagrindinių kūrėjų. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">Pateikite paraišką čia!</a>",
        hiringbackenddev: "Šiuo metu nėra Backend kūrėjų. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">Pateikite paraišką čia!</a>",
        hiringwebdev: "Šiuo metu nėra žiniatinklio kūrėjų. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">Pateikite paraišką čia!</a>",
        hiringjuniordev: "Šiuo metu jaunesniųjų kūrėjų nėra. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">Pateikite paraišką čia!</a>",
        hiringsysadmin: "Šiuo metu nėra sistemos administratorių. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">Pateikite paraišką čia!</a>",
        hiringoperationsmanager: "Šiuo metu nėra operacijų vadovų. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">Pateikite paraišką čia!</a>",
        hiringhrmanager: "Šiuo metu personalo vadovų nėra. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">Pateikite paraišką čia!</a>",
        hiringmanager: "Šiuo metu nėra vadovų. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">Pateikite paraišką čia!</a>",
        hiringadministrators: "Šiuo metu nėra administratorių. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">Pateikite paraišką čia!</a>",
        hiringleadmoderators: "Šiuo metu nėra pagrindinio moderatoriaus. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">Pateikite paraišką čia!</a>",
        hiringmoderators: "Moderatorių šiuo metu nėra. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">Pateikite paraišką čia!</a>",
    },

    partners: {
        title: "Mūsų partneriai",
        readmore: "Skaityti daugiau",
        close: "Uždaryti",
        examplepartner: "Čia galėtumėte būti jūs!",
        joinus: "Prisijunkite prie mūsų ir tapkite partneriu, kad galėtumėte mėgautis išskirtiniais privalumais. ",
        applyhere: "Kreipkitės čia!!"
    },

    bots: {
        title: "Mūsų botai",
        corebots: "Pagrindiniai botai",
        acquiredbots: "Įgauti botai",
        internalbots: "Vidiniai botai",
        comingsoon: "Netrukus!"
    },

    status: {
        title: "Botų būklės",
        description: "Pasidomėkite mūsų botų būklėmis",
        corebots: "Pagrindiniai botai",
        acquiredbots: "Įgauti botai",
        internalbots: "Vidiniai botai",
        fetching: "Gaunama...",
        online: "Prijungtas",
        offline: "Atjungtas",
        secondsago: "Prieš {seconds} sekundes",
        minutesago: "Prieš {minutes} minutes",
        refreshtime: "Atsinaujina kas {time} minutes",
        latency: "Discord delsos laikas (ms)",
        dblatency: "DB delsos laikas (ms)"
    },

    contact: {
        title: "Kreipkitės į mus!",
        description: "Nedvejodami susisiekite su mumis naudodami toliau pateiktas parinktis, o mūsų skirta komanda nedelsdama atsakys į jūsų užklausas.",
        questionfeed: "Turite klausimų ar atsiliepimų?  Užpildykite žemiau esančią formą.",
        submit: "Siųsti žinutę",
        name: "Vardas ir Pavardė",
        email: "El. pašto adresas",
        subject: "Tema",
        message: "Jūsų žinutė...",
        emailmessage: 'Arba atsiųskite mums pranešimą <a class="uc-link" href="mailto:support@disutils.com">el. paštu</a>.',
        othersupport: "Kiti būdai susisiekti su mumis",
        prioritysupport: "Gaukite prioritetinę pagalba.",
        sendform: "Siųsti formą",
        community: "Mūsų bendruomenė",
        connect: "Susijunkite su naudotojais",
        discord: "Prisijunkite dabar!",
        emailsent: "el. paštas sėkmingai išsiūstas!",
        emailfailed: "Nepavyko išsiūsti el. pašto.",
        sending: "Siunčiama..."
    },

    appeal: {
        title: "Apeliacijos forma",
        description: "Jei manote, kad buvote klaidingai įtrauktas į juodąjį sąrašą, užpildykite toliau pateiktą formą, kad pateiktumėte apeliaciją.",
        submit: "Pateikti apeliaciją",
        username: "Įveskite savo vartotojo vardą",
        displayname: "Įveskite rodomą vardą",
        userid: "Įveskite savo vartotojo ID",
        email: "Įveskite savo el. pašto adresą",
        reason: "Paaiškinkite savo apeliacijos priežastį.",
        sendform: "Siųsti formą",
        emailsend: "El. laiškas sėkmingai išsiųstas!",
        emailfailed: "Nepavyko išsiųsti el. laiško.",
        sending: "Siunčiama...",
        emailmessage: "Arba atsiųskite mums žinutę <a class=\"uc-link\" href=\"mailto:support@disutils.com\">el. paštu</a>."
    },

    prices: {
        title: "Individualizuotos botų kainos",
        description: "Susipažinkite su mūsų paslaugomis ir kainodara. Visos kainos nurodytos <strong>$</strong>, pradedant nuo <strong>$8</strong>.",
        categories: {
            title: "💰 Kategorijos ir kainos",
            items: [
                {name: "Ekonomija", price: "+$7"},
                {name: "Moderacija", price: "+$5"},
                {name: "Ticket", price: "+$4"},
                {name: "NSFW", price: "+$4"}
            ]
        },
        features: {
            title: "🚀 Funkcijos",
            groups: [
                {
                    title: "Ekonominės funkcijos",
                    items: [
                        "Lygių sistema",
                        "Profilis",
                        "Darbas (su 'mini-games')",
                        "Darbai",
                        "Lyderių lentelė",
                        "Vogti",
                        "Rock Paper Scissors",
                        "Tic Tac Toe"
                    ]
                },
                {
                    title: "Moderacinės funkcijos",
                    items: [
                        "Išspirimas",
                        "Uždraudimas",
                        "Užtildymas",
                        "Kanalo vėsinimo nustatymas",
                        "Kvietimų skaičiavimas"
                    ]
                }
            ]
        },
        custom: {
            title: "🛠️ Individualios funkcijos",
            description: "Priklausomai nuo sudėtingumo, kaina prasideda nuo <strong>$4</strong>. <strong><u>Pastaba: nepriimame muzikos botų prašymų.</u></strong>"
        },
        hosting: {
            title: "☁️ Hosting Addons",
            items: [
                {name: "VPS Hosting", price: "+$5"},
                {name: "Cloud DB", price: "+$5"},
                {name: "Ongoing Hosting", price: "$6/mo (both) or $3/mo (single service)"}
            ]
        },
        afterServices: {
            title: "🔧 Paslaugos po sukūrimo",
            items: [
                {
                    name: "Klaidų taisymas",
                    description: "Nemokamai (negalioja, jei bus atlikti trečiosios šalies pakeitimai)"
                },
                {name: "Modifikacijos", description: "Galima derėtis"}
            ]
        },
        discounts: {
            title: "🎉 Nuolaidų ir rekomendacijų programa",
            items: [
                {name: "Pilnas paketas pirmą kartą", discount: "20% nuolaida"},
                {name: "Pakartojimas viso paketo užsakymų", discount: "10% nuolaida"},
                {name: "Rekomendavimas draugui", discount: "5% nuolaida kitam pirkiniui"},
                {name: "Jūsų draugas gauna", discount: "10% nuolaidą savo pirmam pirkiniui"}
            ]
        },
        contact: {
            title: "📩 Susisiekite su mumis",
            description: "Norėdami pateikti užsakymą arba užduoti klausimus, siųskite tiesioginį pranešimą mūsų ModMail botui."
        },
    },

    privacy: {
        title: "Privatumo Politika",
        description: "„Disutils Team“ įsipareigoja saugoti jūsų privatumą. Šioje privatumo politikoje aprašoma, kaip renkame, naudojame ir saugome jūsų asmeninę informaciją. Šiame dokumente \"Mūsų robotai\" reiškia „Disutils“ komandos sukurtus robotus.",
        generalprov: "Bendrosios nuostatos",
        general: {
            acceptance: "<strong>Sąlygų priėmimas:</strong> naudodami mūsų robotus sutinkate su šia privatumo politika. Jei nesutinkate su kuria nors šios politikos dalimi, nenaudokite mūsų robotų.",
            modifications: "<strong>Politikos pakeitimai:</strong> galime periodiškai atnaujinti šią privatumo politiką. Jūs privalote reguliariai peržiūrėti šią politiką. Tolesnis mūsų robotų naudojimas po bet kokių pakeitimų reiškia, kad sutinkate su peržiūrėta politika.",
            scope: "<strong>Politikos taikymo sritis:</strong> ši privatumo politika taikoma bet kokiai sąveikai su mūsų robotais ir netaikoma jokioms trečiųjų šalių paslaugoms ar svetainėms, kurios gali būti susietos iš mūsų robotų."
        },
        datacollection: "Duomenų rinkimas",
        collection: {
            userdata: "<strong>Naudotojo duomenys:</strong> mūsų robotai renka ir saugo naudotojų ID ir susijusius pranešimus tik tam, kad galėtų veiksmingai atlikti savo funkcijas.",
            feedbackdata: "<strong>Atsiliepimų duomenys:</strong> jei pateikiate atsiliepimų apie mūsų robotus, galime rinkti ir panaudoti tuos atsiliepimus nuolatiniam jų tobulinimui ir plėtrai. Šie duomenys gali apimti pasiūlymus ir komentarus."
        },
        datausage: "Duomenų naudojimas",
        usage: {
            commandexecution: "<strong>Komandų vykdymas:</strong> Mūsų robotų surinkti naudotojo duomenys naudojami tik jų komandoms vykdyti. Mes nenaudojame šių duomenų jokiais kitais tikslais.",
            feedbackusage: "<strong>Atsiliepimų naudojimas:</strong> pateikti atsiliepimai gali būti naudojami mūsų robotų funkcijoms ir naudotojo patirčiai pagerinti. Tačiau mes neatskleidžiame jūsų asmeninės informacijos be aiškaus jūsų sutikimo."
        },
        datasecurity: "Duomenų saugumas",
        security: {
            dataprotection: "<strong>Duomenų apsauga:</strong> įgyvendiname pagrįstas priemones, kad apsaugotume mūsų robotų surinktus duomenis, tačiau negalime garantuoti visiško saugumo. Mes nesame atsakingi už jokius duomenų pažeidimus."
        },
        datadeletion: "Duomenų pašalinimas",
        deletion: {
            datarequest: "<strong>Duomenų užklausa:</strong> bet kuriuo metu galite pateikti užklausą peržiūrėti mūsų robotų saugomus duomenis, susisiekę su mūsų pagalbos komanda. <strong><u>Pastaba: duomenų užklausas galima pateikti tik kartą per 30 dienų.</u></strong>",
            datadeletion: "<strong>Duomenų ištrynimas:</strong> susisiekę su mūsų pagalbos komanda galite bet kuriuo metu prašyti ištrinti visus mūsų robotų saugomus duomenis. <strong><u>Pastaba: duomenų ištrynimo užklausas galima pateikti tik kartą per 30 dienų.</u></strong>"
        },
        datadisclosure: "Duomenų atskleidimas",
        disclosure: {
            thirdparty: "<strong>Trečiųjų šalių paslaugos:</strong> mūsų robotai neparduoda, nebendrina ir neatskleidžia naudotojo duomenų trečiosioms šalims. Mūsų robotų šaltinio kodas taip pat yra privatus ir niekam neatskleidžiamas. Prieglobai, saugojimui ar palaikymui galime naudoti trečiųjų šalių paslaugas, tačiau jos yra saistomos savo privatumo politikos ir saugos priemonių."
        },
        nsfwcontent: "NSFW turinys",
        nsfw: {
            explicitcontent: "<strong>Nepadorus turinys:</strong> mūsų robotai gali suteikti prieigą prie nepadoraus turinio, skirto tik jų jurisdikcijoje pilnamečiams naudotojams, kurie sutinka žiūrėti suaugusiesiems skirtą medžiagą.",
            useracknowledgment: "<strong>Naudotojo patvirtinimas:</strong> naudodamiesi mūsų botų NSFW funkcijomis pripažįstate ir sutinkate, kad nepadorų turinį pasiekiate savo nuožiūra. Jei esate nepilnametis arba jums nepatinka atvira medžiaga, nenaudokite šių funkcijų."
        },
        contact: "Jei turite klausimų dėl mūsų privatumo politikos, susisiekite su mumis adresu <a href=\"mailto:support@disutilsteam.com\" class=\"text-blue-400 underline hover:text-blue-600\">support@disutilsteam.com</a>.",
        lastupdated: "Paskutinį kartą atnaujinta: Balandžio 1, 2025"
    },

    terms: {
        title: "Paslaugų teikimo sąlygos",
        description: "„Disutils Team“ įsipareigoja teikti kokybiškas paslaugas. Šiose paslaugų teikimo sąlygose išdėstytos mūsų robotų naudojimo taisyklės ir nuostatai. Šiame dokumente \"Mūsų robotai\" reiškia „Disutils“ komandos sukurtus robotus.",
        generalprov: "Bendrosios nuostatos",
        general: {
            acceptance: "<strong>Sąlygų priėmimas:</strong> integruodami mūsų robotus į savo serverį, jūs pripažįstate ir sutinkate su šiomis paslaugų teikimo sąlygomis. Jei nesutinkate su kuria nors šių sąlygų dalimi, nenaudokite mūsų robotų.",
            modifications: "<strong>Sąlygų pakeitimai:</strong> pasiliekame teisę bet kada keisti šias sąlygas. Jūs privalote periodiškai peržiūrėti šias Sąlygas. Jei po bet kokių pakeitimų toliau naudojatės mūsų robotais, tai reiškia, kad sutinkate su atnaujintomis sąlygomis."
        },
        userresponsibilities: "Naudotojo atsakomybės",
        responsibilities: {
            compliance: "<strong>Atitiktis:</strong> naudotojai, naudodami mūsų robotus, privalo laikytis visų taikomų įstatymų ir taisyklių.",
            conduct: "<strong>Elgesys:</strong> sutinkate nenaudoti mūsų robotų jokiai neteisėtai ar draudžiamai veiklai, įskaitant, bet tuo neapsiribojant, priekabiavimą, šlamšto siuntimą ar bet kokį piktnaudžiavimą."
        },
        supportfeedback: "Pagalba ir atsiliepimai",
        support: {
            feedback: "<strong>Atsiliepimai:</strong> laukiame jūsų atsiliepimų ir pasiūlymų, kaip patobulinti mūsų robotus. Pateikdami savo įžvalgas, suteikiate mums leidimą įtraukti jas į nuolatinius patobulinimus.",
            support: "<strong>Pagalba:</strong> dėsime pagrįstas pastangas, kad suteiktume techninę pagalbą mūsų robotams. Tačiau mes negarantuojame nenutrūkstamos paslaugos ir pasiliekame teisę bet kuriuo metu be išankstinio įspėjimo nutraukti Mūsų robotų paslaugas."
        },
        termination: "Nutraukimas",
        terminationdetails: {
            user: "<strong>Naudotojo atliktas nutraukimas:</strong> galite bet kuriuo metu savo nuožiūra pašalinti mūsų robotus iš serverio.",
            us: "<strong>Mūsų vykdomas nutraukimas:</strong> pasiliekame teisę savo nuožiūra be įspėjimo ar paaiškinimo nutraukti mūsų robotų paslaugas."
        },
        disclaimer: "Garantijos atsisakymas",
        warranty: {
            nowarranty: "<strong>Jokios garantijos:</strong> mūsų robotai teikiami tokie, kokie yra, be jokių tiesioginių ar numanomų garantijų. Mes negarantuojame mūsų robotų paslaugų tikslumo, patikimumo ar prieinamumo."
        },
        liability: "Atsakomybės apribojimas",
        liabilitydetails: {
            liability: "<strong>Atsakomybė:</strong> mūsų robotų kūrėjai ar filialai jokiu būdu nėra atsakingi už jokią tiesioginę, netiesioginę, specialią ar pasekminę žalą, atsiradusią dėl mūsų robotų naudojimo ar negalėjimo naudoti."
        },
        contact: "Jei turite klausimų dėl paslaugų teikimo sąlygų, susisiekite su mumis adresu <a href=\"mailto:support@disutilsteam.com\" class=\"text-blue-400 underline hover:text-blue-600\">support@disutilsteam.com</a>.",
        lastupdated: "Paskutinį kartą atnaujinta: Balandžio 1, 2025"
    },

    song: {
        clickme: "^^ Paspausk čia ^^"
    },

    errors: {
        badrequest: "Blogas prašymas!",
        unauthorized: "Neteisėta prieiga!",
        forbidden: "Uždrausta zona!",
        notfound: "Pasiklydę kosmose!",
        internalservererror: "Serverio žlugimas!",
        unknownerror: "Nežinoma klaida!",

        badrequesttext: "Blogas prašymas! Tai buvo labiau painu nei katė, atliekanti skaičiavimus. Bandykite dar kartą, bet galbūt su mažiau rašybos klaidų ir daugiau kavos.",
        unauthorizedtext: "Neleistina! Kas ten eina?! Gali praeiti tik tie, kurie turi šventus įgaliojimus. Kalbėkite, „draugas“, ir įveskite... arba tiesiog tinkamai prisijunkite.",
        forbiddentext: "Draudžiama! Jūs pakliuvote į draudžiamą zoną. Legenda sako, kad įeiti gali tik išrinktasis. Spoileris: tai ne jūs.",
        notfoundtext: "Nerasta! Šis puslapis išėjo atostogų, nepaliko persiuntimo adreso ir neatsako į žinutes. Prieš pateikdami trūkstamo puslapio ataskaitą, pabandykite ieškoti kitur.",
        internalservererrortext: "Vidinė serverio klaida! Serveris tiesiog pyksta, užgeso. Mes jį papirkinėjame užkandžiais ir komplimentais. Prašome palūkėti.",
        unknownerrortext: "Nežinoma klaida! Kažkas nutrūko paslaptingai, dramatiškai. Net mūsų technologijų vedlys kasosii barzdą. Bandykite dar kartą arba pasikvieskite ožką aukai. (Juokauju... Iš dalies.)",

        home: "Grįžti į pagrindinį puslapį",
        searchnow: "Kodėl nepabandžius ieškoti dar kartą? <a class=\"uc-link\" href=\"#uc-search-modal\" data-uc-toggle>Ieškoti dabar</a>",
        searchtext: "Ko ieškote?",
        searchkeyword: "Įveskite raktinį žodį…"
    },
};
