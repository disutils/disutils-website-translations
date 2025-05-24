/**
 * Spanish Translation File for Disutils Team Website
 *
 * This file contains all the Spanish translations for the Disutils Team website.
 * It includes text for navigation, footer, pages, and other UI elements.
 *
 * Language Code: es
 * Author: Alex
 * Discord: alex_gallego2005
 * Last Updated: 5/24/2025
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
        description: "Un grupo de personas dedicadas a mejorar y simplificar la experiencia de Discord para todos los usuarios.",
        footer: "Copyright © Disutils Team 24-25. Todos los derechos reservados."
    },

    nav: {
        home: "Inicio",
        news: "Noticias",
        faq: "FAQ",
        team: "Quiénes somos",
        partners: "Socios",
        bots: "Bots",
        contact: "Contáctanos",
        more: "Más",
        login: "Iniciar sesión",
    },

    navsub: {
        mainpages: "Páginas principales",
        statuspages: "Páginas de estado",
        support: "Soporte",
        community: "Comunidad",
        voting: "Votacioens",
        otherpages: "Otras páginas",

        // Main Pages
        changelogs: "Registro de cambios",
        documentation: "Documentación",
        prices: "Precios",

        // Status Pages
        botstatus: "Bots",
        overallstatus: "Servicios",

        // Support
        supportserver: "Servidor de soporte",
        emailus: "Envia un email",

        // Community
        discordserver: "Servidor de Discord",
        applyforstaff: "Únetenos",
        applyforpartner: "Hazte socio",

        // Voting
        topgg: "Top.gg", // keep English
        discollaborg: "Discollab.org", // keep English

        // Other Pages
        blacklistappeal: "Apelaciones",
        terms: "Términos de servicio",
        privacy: "Política de privacidad",

        // Languages
        languages: "Idiomas"
    },

    footer: {
        brief: "Mejorando tu experiencia en servidores con bots y utilidades de primera categoría.",
        topgg: "Vota en Top.gg",
        discollaborg: "Vota en Discollab.org"
    },

    home: {
        meet: "Conoce a",
        supportserver: "¿Necesitas soporte?",
        custombots: "¿Quieres un bot propio?",
        showcase: "Bots destacados",
        ourselection: "Nuestra selección de bots destacados",
        ourselectionbrief: "Nuestra selección de bots destacados, escogidos a mano por su excepcional rendimiento y fiabilidad.",
        learnmore: "Lee más",

        harmodifybrief: "Harmodify es un potente bot de música con reproducción y sonido de alta calidad. Ideal para noches de juego o quedadas.",
        playdisbrief: "Playdis es un bot repleto de entretenidos y divertidos juegos, incluyendo un sistema de economía propio. Perfecto para competir con tus amigos y ganar premios.",
        utilicorebrief: "UtiliCore es un bot todo-en-uno con características como embeds llamativos y notificaciones en tiempo real. Lo mejor en cuanto gestión de servidores.",
        privateeyesbrief: "PrivateEyes es un bot NSFW versatil con contenido para comunidades maduras y contenido SFW. No puede faltar en la tarde del viernes con amigos."
    },

    news: {
        pagetitle: "Noticias",
        pagedescription: "Obtén información importante sobre nuestros servicios y equipo, ¡incluyendo nuestra página web!",

        title1: "Nueva actualización de interfaz",
        description1: "La interfaz del sitio web se ha actualizado con un nuevo diseño. ¡Esperamos que les guste!<br><br>También estamos trabajando en un panel de control para el equipo de Disutils, que se lanzará pronto. ¡Estén atentos para más actualizaciones!",
        author1: "RejectModders Owner/Developer @Disutils Team",
        date1: "4/1/2025",

        title2: "Reclutamiento de equipo de traducción",
        description2: "Buscamos personas dedicadas para unirse a nuestro Equipo de Traducción. Se creará una página personal para el Equipo de Traducción en el sitio web de Disutils para mostrar sus contribuciones.<br><br>Si domina algún idioma y le interesa ayudar con las traducciones, póngase en contacto con RejectModders.",
        author2: "RejectModders Owner/Developer @Disutils Team",
        date2: "11/13/2024",

        title3: "¡Nueva página publicada!",
        description3: "¡Hola a todos! Hemos trabajado muy duro en este sitio web para que se vea genial. Esperamos que les guste. Si detectan algún problema, ¡por favor, infórmennoslo!",
        author3: "RejectModders Owner/Developer @Disutils Team",
        date3: "10/31/2024"
    },

    faq: {
        title: "Preguntas frecuentes",

        question1: "¿Qué es Disutils Team?",
        answer1: "Somos un grupo dedicado de personas comprometidas a mejorar y simplificar la experiencia en Discord a todos sus usuarios.",

        question2: "¿Cómo puedo unirme al equipo de Disutils?",
        answer2: "Puedes unirte al equipo visitando nuestra <a href=\"/apply-staff\" class=\"text-blue-500 underline\">página de aplicaciones</a>.",

        question3: "¿Pueden usarse los bots gratuitamente?",
        answer3: "Sí, todos nuestros bots son gratuitos. No obstante, ofrecemos características premium para aquellos que quieran apoyarnos.",

        question4: "¿Cómo puedo añadir un bot a uno de mis servidores?",
        answer4: "Haz clic en el enlace para <a href=\"/bots\" class=\"text-blue-500 underline\">invitar a nuestros bots</a> y sigue las instrucciones.",

        question5: "¿Dónde puedo encontrar la documentación de los bots?",
        answer5: "Puedes encontrar la documentación en la página de <a href=\"/docs\" class=\"text-blue-500 underline\">documentación</a> o la de <a href=\"/bots\" class=\"text-blue-500 underline\">bots</a>.",

        question6: "¿Cómo puedo obtener ayuda/soporte?",
        answer6: "Únete a nuestro <a href=\"/support\" class=\"text-blue-500 underline\">servidor de Discord</a> o envíanos un correo a <a href=\"mailto:support@disutils.com\" class=\"text-blue-500 underline\">support@disutils.com</a>.",

        question7: "¿Qué debería hacer si encuentro un error?",
        answer7: "Utiliza el comando de reporte de errores del bot, notifícanos en Discord o envíanos un correo.",

        question8: "¿Puedo contribuir al desarrollo de los bots?",
        answer8: "¡Claro! Échale un vistazo a <a href=\"https://github.com/disutils/disutils\" class=\"text-blue-500 underline\">nuestra página de GitHub</a>.",

        question9: "¿Ofrecéis desarrollo para bots personalizados?",
        answer9: "Sí. Contáctanos a través de nuestra <a href=\"/contact\" class=\"text-blue-500 underline\">página de contacto</a>.",

        question10: "¿Cómo puedo mantenerme al tanto de las últimas novedades?",
        answer10: "Sigue nuestra <a href=\"/news\" class=\"text-blue-500 underline\">página de noticias</a> o únete a nuestro servidor de Discord."
    },

    team: {
        title: "Nuestro Equipo",

        leadBotDev: "Desarrolladores Principales de Bots",
        leadBackendDev: "Desarrolladores Principales de Backend",
        leadWebDev: "Desarrolladores Principales Web",
        juniorBotDev: "Desarrolladores Junior de Bots",
        juniorBackendDev: "Desarrolladores Junior de Backend",
        juniorWebDev: "Desarrolladores Junior Web",
        sysAdmins: "Administradores de Sistemas",
        opsManagers: "Directores de Operaciones",
        managers: "Gerentes",
        admins: "Administradores",
        leadMods: "Moderadores Principales",
        mods: "Moderadores",

        hiring: "¡Contratando!",

        hiringleadbot: "No hay Desarrolladores Principales de Bots actualmente. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">¡Únete aquí!</a>",
        hiringleadbackend: "No hay Desarrolladores Principales de Backend actualmente. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">¡Únete aquí!</a>",
        hiringleadweb: "No hay Desarrolladores Principales Web actualmente. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">¡Únete aquí!</a>",
        hiringjuniorbot: "No hay Desarrolladores Junior de Bots actualmente. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">¡Únete aquí!</a>",
        hiringjuniorbackend: "No hay Desarrolladores Junior de Backend actualmente. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">¡Únete aquí!</a>",
        hiringjuniorweb: "No hay Desarrolladores Junior Web actualmente. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">¡Únete aquí!</a>",
        hiringsysadmins: "No hay Administradores de Sistemas actualmente. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">¡Únete aquí!</a>",
        hiringopsmanagers: "No hay Directores de Operaciones actualmente. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">¡Únete aquí!</a>",
        hiringmanagers: "No hay Gerentes actualmente. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">¡Únete aquí!</a>",
        hiringadmins: "No hay Administradores actualmente. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">¡Únete aquí!</a>",
        hiringleadmods: "No hay Moderadores Principales actualmente. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">¡Únete aquí!</a>",
        hiringmods: "No hay Moderadores actualmente. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">¡Únete aquí!</a>"
    },

    partners: {
        title: "Nuestros socios",
        readmore: "Leer más",
        close: "Cerrado",
        examplepartner: "Todo lienzo en blanco es un mundo por descubrir.",
        joinus: "Únete a nosotros y vuélvete socio para descubrir beneficios exclusivos. ",
        applyhere: "¡Únete aquí!"
    },

    bots: {
        title: "Nuestros bots",
        corebots: "Bots principales",
        acquiredbots: "Bots adquiridos",
        internalbots: "Bots internos",
        comingsoon: "Próximamente..."
    },

    status: {
        title: "Estado de bots",
        description: "Echa un vistazo al estado de nuestros bots.",
        corebots: "Bots principales",
        acquiredbots: "Bots adquiridos",
        internalbots: "Bots internos",
        fetching: "Obteniendo datos...",
        online: "Conectado",
        offline: "Desconectado",
        secondsago: "Hace {seconds} segundos",
        minutesago: "Hace {minutes} minutos",
        refreshtime: "Recarga cada {time} minutos",
        latency: "Latencia de Discord (ms)",
        dblatency: "Latencia de BD (ms)"
    },

    contact: {
        title: "Contáctanos",
        description: "Siéntete libre de contactarnos usando las opciones a continuación, nuestro equipo dedicado responderá tus consultas con prontitud.",
        questionfeed: "¿Tienes preguntas u opiniones? Rellena el formulario a continuación.",
        submit: "Mandar mensaje",
        name: "Nombre completo",
        email: "Correo",
        subject: "Asunto",
        message: "Tu mensaje...",
        emailmessage: 'O envíanos un mensaje vía <a class="uc-link" href="mailto:support@disutils.com">correo electrónico</a>.',
        othersupport: "Otras formas de contactarnos",
        prioritysupport: "Obtén soporte de prioridad.",
        sendform: "Enviar formulario",
        community: "Nuestra comunidad",
        connect: "Conecta con personas.",
        discord: "¡Únetenos ya!",
        emailsent: "Correo enviado correctamente.",
        emailfailed: "Error al enviar el correo. :(",
        sending: "Mandando..."
    },

    appeal: {
        title: "Apelaciones",
        description: "Si crees que has sido baneado o vetado injustamente, por favor rellena el formulario a continuación para apelar tu caso.",
        submit: "Enviar apelación",
        username: "Escribe tu usuario",
        displayname: "Escribe tu apodo",
        userid: "Escribe tu Id",
        email: "Escribe tu correo",
        reason: "Explica la razón de tu apelación.",
        sendform: "Enviar formulario",
        emailsent: "Correo enviado correctamente.",
        emailfailed: "Error al enviar el correo. :(",
        sending: "Mandando...",
        emailmessage: 'O envíanos un mensaje vía <a class="uc-link" href="mailto:support@disutils.com">correo electrónico</a>.',
    },

    prices: {
        title: "Precios de bots personalizados",
        description: "Explora nuestras opciones y precios. Todos los precios están en <strong>USD</strong>, empezando en <strong>$8</strong>.",
        categories: {
            title: "💰 Categorías y precios",
            items: [
                {name: "Economía", price: "+$7"},
                {name: "Moderación", price: "+$5"},
                {name: "Tiques", price: "+$4"},
                {name: "NSFW", price: "+$4"}
            ]
        },
        features: {
            title: "🚀 Características",
            groups: [
                {
                    title: "Economía",
                    items: [
                        "Sistema de niveles",
                        "Perfiles",
                        "Trabaja (con minijuegos)",
                        "Empleos",
                        "Clasificaciones",
                        "Roba",
                        "Piedra papel tijera",
                        "Tres en raya"
                    ]
                },
                {
                    title: "Moderación",
                    items: [
                        "Expulsión",
                        "Baneo",
                        "Aislamiento",
                        "Configurar canales",
                        "Seguimiento de invitaciones"
                    ]
                }
            ]
        },
        custom: {
            title: "🛠️ Características personalizadas",
            description: "El precio empieza en <strong>$4</strong>, dependiendo de la complejidad. <strong><u>Nota: No aceptamos propuestas para bots de música.</u></strong>"
        },
        hosting: {
            title: "☁️ Complementos de alojamiento",
            items: [
                {name: "Alojamiento de VPS", price: "+$5"},
                {name: "Cloud DB", price: "+$5"},
                {name: "Alojamiento mensual", price: "$6/mes (ambos) o $3/mes (un servicio)"}
            ]
        },
        afterServices: {
            title: "🔧 Mantenimiento",
            items: [
                {
                    name: "Correción de errores",
                    description: "Gratis (nulo si se realizan modificaciones por parte de terceros)"
                },
                {name: "Modificaciones", description: "Negociable"}
            ]
        },
        discounts: {
            title: "🎉 Descuentos y programa de referencias",
            items: [
                {name: "Primera compra del paquete completo", discount: "20% descuento"},
                {name: "Recompra de paquetes completos", discount: "10% descuento"},
                {name: "Recomiéndanos a un amigo", discount: "5% descuento en tu siguiente compra"},
                {name: "Tu amigo consigue", discount: "10% descuento en su primera compra"}
            ]
        },
        contact: {
            title: "📩 Contáctanos",
            description: "Para realizar un pedido o hacer preguntas, envía un mensaje a nuestro bot ModMail."
        }
    },

    privacy: {
        title: "Política de privacidad",
        description: "En Disutils Team, nos comprometemos a proteger su privacidad. Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos su información personal. En este documento, «Nuestros Bots» se refiere a los bots desarrollados por el equipo de Disutils.",
        generalprov: "Disposiciones generales",
        general: {
            acceptance: "<strong>Aceptación de términos:</strong> Al usar nuestros bots, acepta esta Política de Privacidad. Si no está de acuerdo con alguna parte de esta política, absténgase de usar nuestros bots.",
            modifications: "<strong>Modificaciones a la política:</strong> Podemos actualizar esta Política de Privacidad periódicamente. Es su responsabilidad revisarla periódicamente. El uso continuado de Nuestros Bots después de cualquier cambio indica su aceptación de la política revisada.",
            scope: "<strong>Alcance de la política:</strong> Esta Política de Privacidad se aplica a todas las interacciones con Nuestros Bots y no cubre ningún servicio o sitio web de terceros que pueda estar vinculado desde Nuestros Bots."
        },
        datacollection: "Recopilación de datos",
        collection: {
            userdata: "<strong>Datos de usuario:</strong> Nuestros bots recopilan y almacenan identificaciones de usuarios y mensajes relevantes únicamente con el propósito de ejecutar sus funciones de manera efectiva.",
            feedbackdata: "<strong>Datos de comentarios:</strong> Si nos proporciona comentarios sobre nuestros bots, podremos recopilarlos y utilizarlos para su mejora y desarrollo continuos. Estos datos pueden incluir sugerencias y comentarios."
        },
        datausage: "Uso de datos",
        usage: {
            commandexecution: "<strong>Ejecución de comandos:</strong> Los datos de usuario recopilados por nuestros bots se utilizan exclusivamente para ejecutar sus comandos. No los utilizamos para ningún otro fin.",
            feedbackusage: "<strong>Uso de comentarios:</strong> Los comentarios que nos proporcione podrán utilizarse para mejorar las funciones y la experiencia de usuario de nuestros bots. Sin embargo, no divulgaremos su información personal sin su consentimiento explícito."
        },
        datasecurity: "Seguridad de datos",
        security: {
            dataprotection: "<strong>Protección de datos:</strong> Implementamos medidas razonables para proteger los datos recopilados por nuestros bots, pero no podemos garantizar una seguridad absoluta. No nos responsabilizamos de ninguna filtración de datos."
        },
        datadeletion: "Eliminación de datos",
        deletion: {
            datarequest: "<strong>Solicitud de datos:</strong> Puede solicitar ver los datos almacenados por nuestros bots en cualquier momento comunicándose con nuestro equipo de soporte. <strong><u>Nota: Las solicitudes de datos solo se pueden realizar una vez cada 30 días.</u></strong>",
            datadeletion: "<strong>Eliminación de datos:</strong> Puede solicitar la eliminación de cualquier dato almacenado por Nuestros Bots en cualquier momento contactando a nuestro equipo de soporte. <strong><u>Nota: Las solicitudes de eliminación de datos solo se pueden realizar una vez cada 30 días.</u></strong>"
        },
        datadisclosure: "Divulgación de datos",
        disclosure: {
            thirdparty: "<strong>Servicios de terceros:</strong> Nuestros bots no venden, comparten ni divulgan datos de usuarios a terceros. El código fuente de nuestros bots se mantiene privado y no se divulga a nadie. Podemos utilizar servicios de terceros para alojamiento, almacenamiento o soporte, pero estos están sujetos a sus propias políticas de privacidad y medidas de seguridad."
        },
        nsfwcontent: "Contenido NSFW",
        nsfw: {
            explicitcontent: "<strong>Contenido explícito:</strong> Nuestros bots pueden proporcionar acceso a contenido explícito destinado únicamente a usuarios mayores de edad en su jurisdicción que consientan ver material para adultos.",
            useracknowledgment: "<strong>Reconocimiento del usuario:</strong> Al utilizar las funciones NSFW de nuestros bots, reconoces y aceptas que accedes a contenido explícito a tu propia discreción. Si eres menor de edad o te sientes incómodo con el material explícito, abstente de usar estas funciones."
        },
        contact: "Para cualquier consulta sobre nuestra Política de Privacidad, contáctenos en <a href=\"mailto:support@disutilsteam.com\" class=\"text-blue-400 underline hover:text-blue-600\">support@disutilsteam.com</a>.",
        lastupdated: "Última actualización: 1 de Abril, 2025"
    },

    terms: {
        title: "Términos de servicio",
        description: "En el equipo de Disutils, nos comprometemos a brindar servicios de calidad. Estos Términos de Servicio describen las normas y regulaciones para el uso de nuestros bots. En este documento, «Nuestros Bots» se refiere a los bots desarrollados por el equipo de Disutils.",
        generalprov: "Disposiciones generales",
        general: {
            acceptance: "<strong>Aceptación de términos:</strong> Al integrar Nuestros Bots en su servidor, usted reconoce y acepta estos Términos de Servicio. Si no está de acuerdo con alguna parte de estos Términos, absténgase de agregar Nuestros Bots.",
            modifications: "<strong>Modificaciones a los términos:</strong> Nos reservamos el derecho de modificar estos Términos en cualquier momento. Es su responsabilidad revisarlos periódicamente. El uso continuado de Nuestros Bots después de cualquier cambio constituye su aceptación de los Términos actualizados."
        },
        userresponsibilities: "Responsabilidades del usuario",
        responsibilities: {
            compliance: "<strong>Cumplimiento:</strong> Los usuarios deben cumplir con todas las leyes y regulaciones aplicables al utilizar nuestros bots.",
            conduct: "<strong>Conducta:</strong> Usted acepta no utilizar nuestros Bots para ninguna actividad ilegal o prohibida, incluyendo, entre otras, acoso, spam o cualquier forma de abuso."
        },
        supportfeedback: "Soporte y comentarios",
        support: {
            feedback: "<strong>Comentarios:</strong> Agradecemos sus comentarios y sugerencias para mejorar nuestros bots. Al compartir sus ideas, nos autoriza a incorporarlas en las mejoras continuas.",
            support: "<strong>Soporte:</strong> Haremos todo lo posible para brindar soporte técnico a nuestros bots. Sin embargo, no garantizamos un servicio ininterrumpido y nos reservamos el derecho de cancelar sus servicios en cualquier momento sin previo aviso."
        },
        termination: "Terminación",
        terminationdetails: {
            user: "<strong>Terminación por parte del Usuario:</strong> Puede eliminar nuestros bots de su servidor en cualquier momento, a su discreción.",
            us: "<strong>Terminación por nosotros:</strong> Nos reservamos el derecho de cancelar los servicios de Nuestros Bots a nuestra discreción, sin previo aviso ni explicación."
        },
        disclaimer: "Descargo de responsabilidad de garantía",
        warranty: {
            nowarranty: "<strong>Sin garantía:</strong> Nuestros Bots se proporcionan en su estado actual, sin garantías de ningún tipo, ni expresas ni implícitas. No garantizamos la precisión, fiabilidad ni disponibilidad de los servicios de Nuestros Bots."
        },
        liability: "Limitación de responsabilidad",
        liabilitydetails: {
            liability: "<strong>Responsabilidad:</strong> En ningún caso los creadores o afiliados de Nuestros Bots serán responsables de ningún daño directo, indirecto, especial o consecuente que surja del uso o la imposibilidad de usar Nuestros Bots."
        },
        contact: "Para cualquier consulta sobre nuestros Términos de Servicio, contáctenos en <a href=\"mailto:support@disutilsteam.com\" class=\"text-blue-400 underline hover:text-blue-600\">support@disutilsteam.com</a>.",
        lastupdated: "Última actualización: 1 de Abril, 2025"
    },

    song: {
        clickme: "^^ Hazme clic ^^"
    },

    maintenance: {
        title: "¡Volvemos pronto!",
        globalmaintenance: "Nuestra página web está actualmente bajo un mantenimiento programado para mejorar tu experiencia. Agradecemos tu paciencia y te invitamos a que vuelvas pronto.",
        pagemaintenance: "Está página está temporalmente fuera de servicio debido a un mantenimiento programado. Estamos trabajando para restablecer el acceso tan rápido como nos es posible. Gracias por su entendimiento.",
    },

    errors: {
        badrequest: "¡Solicitud incorrecta!",
        unauthorized: "¡Acceso no autorizado!",
        forbidden: "¡Zona prohibida! Fuera de aquí, ¡sabandija!",
        notfound: "Has llegado tan lejos que te has perdido.",
        internalservererror: "¡Calma! Estás derritiendo los servidores.",
        unknownerror: "Nosotros tampoco sabemos qué ha ido mal.",

        badrequesttext: "¿Alguna vez has leído un texto en inglés sin comas? Vuelve a intentarlo pero con más calma y sin errores tipográficos.",
        unauthorizedtext: "¡Ajá! ¿Creías poder evadirme? ¡¿Que no me daría cuenta?! ¡Ja! Cuenta es con la que deberías iniciar sesión para poder entrar en mis dominios...",
        forbiddentext: "Cuentan las leyendas que aquellos que han llegado aquí no se les ha vuelto a ver... ¿Dónde estás?",
        notfoundtext: "La página que has buscado ha dejado de existir, seguro que antes existía, tu memoria no falla, es solo que nos gusta borrar co—",
        internalservererrortext: "Te has portado mal con el servidor. Eso no se hace, le has hecho daño, ¿es que no te importa?. En fin, intentaré arreglar esta tontería que has hecho, espera un momento.",
        unknownerrortext: "Has conseguido hacer algo que ni nosotros creíamos posible, has sobrepasado los límites y has descubierto algo nuevo. Gracias a ti, ahora podremos dedicar horas a arreglar un problema que nunca tendría por qué haber existido...gracias.",

        home: "Vuelve al inicio",
        searchnow: "¿Intentamos buscar otra vez? <a class=\"uc-link\" href=\"#uc-search-modal\" data-uc-toggle>Busca algo</a>",
        searchtext: "¿Qué es lo que estás buscando?",
        searchkeyword: "Escribe una palabra clave..."
    }
};
