import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translation: {
          content: {
            aboutus: 'arises from the hobby of a group of friends after discovering the world of the rc crawler, entering the 1/24 scale.',
            aboutus1: 'After going out on the field a couple of times, we realized that it would be a good idea to have a scoreboard for the matches, where we can manage the points in the different game modes that we practice.',
            aboutus2: 'If you have any questions, comments or suggestions, do not hesitate to contact us at crawlear.com@gmail.com',
            aboutus3: 'Barcelona (Spain) 2021',
            welcomeMessage: 'is a professional and social score board for your 1/10 or 1/24 crawler AECAR, ISRCC, Levante 1/24, Mini Crawler Passion and ZonaRc regional Championship compatible events or competitions.',
            instrucciones: 'First add the players, select the game mode, the points type and push the Begin button.',
            instrucciones1: 'By clicking on the player you can define a positive (initial advantage) or negative (initial disadvantage) handicap. At the end of the game, the handicap will be added to the player\'s points to calculate the total points.',
            maxTimeText1: 'Select the maximum time (0 if you do not want to apply maximum time):',
            maxTimeText2: 'Select the maximum points (0 if you do not want to apply a maximum score):',
            usuariodesistema: 'You can search and add a crawlear registered user, or add a non-registered one:',
            usuarionosistema: 'You can search users:',
            puedesbuscarusuarios: 'You can search for users:',
            clickenusuariooseguir: 'Click on user to view his pilot profile and click on follow/unfollow tol fill your pilot\'s wall',
            enviorequest: 'To add a registered player, send him play request',
            enviorequest2: 'The player must accept the request to be added to the game',
            peticionjuegoconfirmacion: 'Do you want to send a game request?',
            seguroborrarjuego: 'Do you want to delete the game?',
            seguroborrarpost: 'Do you want to delete the post?',
            nogeolocation: 'Your browser does not support geolocation',
            landingMainText: 'Sign In with your Google.com account to get all the functionality',
            landingSecondText: 'Or just play a',
            seleccionZonas: 'Select the number of zones',
            seleccionPuertas: 'Select the number of progression gates for each zone',
            seleccionapilotoyzona: 'Select a player and a zone to continue',
            pulsafinjugador: 'Push End Player to finish the zone',
            quiereseditarpartida: 'Do you want to edit the previous saved play?',
            cerrarpartida: 'Do you want to close the play? you will not be abe to edit it again',
            finalizarreparacion: 'Do you wanna finish the repair status?',
            marcarfiascoreparacion: 'Do you want to set the repair fiasco?',
            quieresempezarzona: 'Do you want to begin the play?',
            seguroeditarpartidaenjuego: 'If you edit a zone and player and they are still going on, you can lose play data. ¿Are you sure that you want to edit the game?',
            licenseText: 'Contact us if you are interested in license the crawlear tool for an official event or competition at crawlear.com@gmail.com',
            zonascompletadas: 'Completed zones by group:',
            estadozona: 'Zone status:',
            quieresenviarpeticiondepresencia: 'Do you want to send a presence request?',
            aceptarpresencia: 'Do you want to clean the presence request?',
            selecciongrupos: 'Select the number of groups',
            colaboraciones: 'Collaborates:',
            editprofile: 'You can edit the user profile clicking on name, description or instagram username',
            userprofilenotlogged: 'You must be logged with a google account to see the user profile',
            urlEmbed: '(optional) url to an instagram, youtube or tiktok post',
            textEmbed: 'text message of the post',
            gameEmbed: 'if the post is related with one of your public games, select it to asociate it to the post and the users will see the results and location (if available).',
            nopost: 'There is no posts at youy profile. Fill the profile with your lastest photos and videos from instagram, tiktok and youtube',
            nofeedpost: 'There is no posts at your pilot feed. Follow to your friends or favorite pilots to get their posts.',
            shareProfileText: 'Hey! Check this crawlear.com pilot profile ',
            sharePostText: 'Hey! Check this crawlear.com post ',
            comparteenredespiloto: 'Share this pilot profile in social networks:',
            comparteenredespost: 'Share this post in social networks:',
            ayudasocialprofile: 'Are you looking to view or edit your pilot profile? Open the lateral menu and go to Social Profile or click this help',
            offlineMainText: 'Your browser is offline, check again in minutes'
          },
          error: {
              nojugadores: 'Add the players',
              nojueces: 'Add the judges',
              nonombre: 'Fill in at least the name of the game to continue',
              nogeolocation: 'Cant get geolocation or there is a permission error',
              juegoencurso: 'Player is already playing the zone',
              reparacionencurso: 'Player is currently repairing',
              rellenargrupos: 'Check the configuration, there is a group with no pilots',
              nodirectordepartida: 'Check at least one judge as Game director',
              noposttext: 'The post text is empty',
              noposturl: 'The post url is empty',
              nosocialurl: 'The url must be a youtube, instagram or tiktok public post'
          },
          description: {
            juego: 'game',
            juegopublico: 'public game',
            nojugadores: 'No players',
            nojueces: 'No judges',
            nopartidas: 'No current games',
            norequests: 'No current game requests',
            jugadores: 'Players',
            juezdepista: 'Track Judge',
            juezdecarpa: 'Tent Judge',
            iniciarreparacion: 'Start repair',
            enreparaciondesde: 'Since:',
            jueces: 'Judges',
            nuevojugador: 'New player',
            ordenaleatorio: 'Random order',
            empezar: 'Begin',
            crear: 'New game',
            atras: 'Back',
            ganador: 'WINNER',
            empate: 'TIE GAME',
            tiempo: 'TIME',
            puntos: 'POINTS',
            finjugador: 'end player',
            total: 'TOTAL',
            ordenruta: 'Rute ORDER',
            fin: 'End',
            reset: 'Reset',
            continuar: 'Continue',
            tiempomaximo: 'MAX TIME',
            zonas: 'Zones',
            zona: 'Zone',
            puntosmaximo: 'MAX POINTS',
            handicap: 'handicap',
            instrucciones: 'Instructions',
            paginaprincipal: 'Main page',
            aboutus: 'About us',
            politicaprivacidad: 'Privacy policy',
            registro: 'Registration',
            descripcion: 'Description',
            partidascomopiloto: 'Pilot games',
            partidasenjuego: 'Current Games',
            partidasdejuez: 'Judge Games',
            partidascreadas: 'Created Games',
            partidasprevias: 'Previous Games',
            jugador: 'Player',
            nuevaPartida: 'New Game',
            nombre: 'Name',
            fecha: 'Date',
            esPublica: 'Is public',
            localizacion: 'Location',
            obtener: 'Get',
            obteniendo: 'Getting',
            buscarusuario: 'User search',
            resultado: 'Result',
            vergooglemaps: 'View in Google Maps',
            verperfil: 'View social profile',
            ver: 'View',
            usuariosenpartida: 'Players in game',
            juecesenpartida: 'Judges in game',
            peticionesdejuego: 'Game requests',
            peticionde: 'Request from',
            parajuego: 'para el juego',
            peticionespendientes: 'pending requests',
            enviar: 'send',
            resumen: 'Brief',
            detalle: 'Detail',
            penalizaciones: 'Penalties',
            penalizacionesadicionales: 'Additional penalties',
            avancepuerta: 'Gate',
            fallospuerta: 'gate fails',
            puertas: 'gates',
            bonificacion: 'bonification',
            jugadorseleccionado: 'Selected player',
            zonaseleccionada: 'Selected zone',
            nohayreparaciones: 'There is no repairs',
            cerrarpartida: 'Cerrar partida',
            waiting: 'waiting',
            repair: 'repair',
            done: 'done',
            playing: 'playing',
            estado: 'Status',
            reparacionfinalizada: 'repair end',
            portiempo: 'by time',
            grupo: 'Group',
            grupos: 'Groups',
            directordepartida: 'Game director',
            ocupado: 'Busy',
            libre: 'Free',
            peticionesdepresencia: 'Presence requests',
            nopeticionespresencia: 'No presence requests',
            de: 'De:',
            aceptar: 'Accept',
            reclamarpresencia: 'Claim presence',
            entrenamientos: 'Mange trainings',
            bonificacionaccesorios: 'Accessory bonification',
            ayuda: 'Help',
            estadisticas: 'Statistics',
            posts: 'Posts',
            texto: 'Text',
            publicar: 'Post an entry',
            compartir: 'Share',
            noasignarjuego: 'don\'t assign a game',
            sinjuego: 'no game assigned',
            juegoasignado: 'Game assigned',
            murodepiloto: 'Pilot Wall',
            murodefollows: 'Follows Wall',
            secciondejuego: 'Game tool',
            resolverjuego: 'get game result',
            herramientajuego: 'Game Tool',
            volverherramientajuego: 'go back to the game tool',
            tendenciapiloto: 'Profile trend: PiLOT',
            tendenciajuez: 'Profile trend: JUDGE',
            tendencianeutral: 'Profile trend: PiLOT and JUDGE',
            perfilsocial: 'Social profile',
            follow: 'Follow',
            unfollow: 'Unfollow',
            logout: 'Logout',
            refrescar: 'Reload',
            seguidores: 'Followers',
            siguiendo: 'Following',
            eliminarpartida: 'Remove game',
            jugarpartida: 'Play game',
            regenerarpartida: 'Regenerate play'
          },
          points: {
            vuelco: 'overturn',
            tocar: 'touch',
            puerta: 'gate',
            saltoobstaculo: 'obstacle jump',
            reparacion: 'repair',
            winch: 'winch',
            puertaprogresion: 'progression gate',
            distancia: 'distance',
            equipaje: 'baggage',
            anclajeindebido: 'improper anchor',
            juez: 'judge',
            saltopelota: 'ball jump',
            nocomunicarcambio: 'change not comunicated',
            bateria: 'battery load',
            conductaincivica: 'unsportsmanlike conduct',
            perdidacarnet: 'loss of road license',
            modificarpista: 'modify track conditions',
            perdidadorsal: 'loss of bib',
            modificarcoche: 'car manipulation',
            sacarcoche: 'take the car out of the compound',
            nodorsal: 'no dorsal',
            incumplimientotecnico: 'Non-compliance with Technical Regulations',
            recolocacionbateria: 'car body/battery relocation',
            puertamarchaatras: 'reverse gate',
            retroceso: 'backward',
            direcciondelcurso: 'direction way',
            limite: 'límite',
            fueraespecificacion: 'out of specification',
            usodispositivo: 'device used',
            noempezado: 'not started',
            fiascos: 'Fiascos',
            noterminado: 'not finished',
            tocarcochenoavanzar: 'car touch',
            tocarcochepuerta: 'car touch (passing gate)',
            empujarcocheacompañar:'Push car when accompanying',
            reparacion30mins:'Repair in Pits maximum 30min',
            conectarentiempoajuste: 'Connect transmitter and receiver at time of adjustment',
            nococheparquecerrado: 'Do not have the car in a closed park at the beginning of the zone',
            acaompañarcoche: 'Accompany car (car and a half)',
            saltarsepuerta: 'Skip gate',
            reparacionherramientasinsitu:'Repair with tools in situ',
            manipulacionvehiculocarpa: 'Vehicle handling on the way to the tent',
            saltarzona: 'Skip tricky zone (car + medium)',
            tocarcocheiniciovuelco: 'Touch car when turning over',
            vuelcoasistidotoque: 'Assisted rollover with a touch on the door or pilot',
            vuelcoasistido: 'Assisted rollover',
            caidapuente: 'Bridge fall',
            recolocarpuente: 'Relocate on bridge',
            utilizacionextrawinch: 'EXTRA use of the WINCH',
            vuelcotoquepuertapiloto: 'Rollover touching door or pilot',
            terminarzonasinobjeto: 'Zone end without an object',
            tocarcoche: 'Touch the car',
            tocarpuerta: 'Touch the door',
            vuelconoasistido: 'Non-assisted rollover',
            interferiraccionjuez: 'Interfere in the action of a Judge',
            moverwinch: 'Move the vehicle >2cm when using the WINCH',
            tiemposentrenamiento: 'Not respecting the training times',
            unaruedaejetrasero: 'Pass only one wheel of the rear axle through the door',
            tocarpuertaunarueda: 'To knock on a door and pass only 1 rear wheel through it',
            puertabonificada: 'gate bonification',
            masuno: '+1',
            masdos: '+2',
            mastres: '+3',
            mascuatro: '+4',
            mascinco: '+5',
            bonificacion: 'bonus'
          },
          gametype: {
            partidarapida: 'Partida rápida',
            modojuego: 'Game mode',
            tipopuntuacion: 'Points type',
            modojuegotiempo: 'A section is chosen and all participants will run it one by one and in the pre-established order. You run to points with time and maximum score and the possibility of making a fiasco. The winner will be the player with less points with a time tiebreaker.',
            modojuegopuntos: 'A section is chosen and all participants will run it one by one and in the pre-established order. Points are run and the winner will be the player with the lowest score.',
            modojuegorey: 'There is no pre-established route and the first participant, the King, chooses the path when playing. All participants run at the same time in line following the same route as the King. If a player scores he goes to the end of the queue. The winner will be the player with the lowest score.',
            modojuegoarcar: 'By points game using the AECAR rules and scores',
            modojuegoisrcc: 'By points game using the ISRCC rules and scores',
            modojuegolevante124: 'By points game using the Levante 1/24 rules and scores',
            modojuegominicrawlerpassion: 'By points game with basic but effective rules and scores',
            modojuegogeneric: 'By pointa using generic rules and scores',
            simple: 'Simple',
            completa: 'Complete',
            descripcionPuntosSimple: 'Score: Winch, touch, obstacle jump, repair, door, overturn and progression door. There is no time or maximum points. There is no max time or max points',
            descripcionPuntosCompleta: 'Score: Winch, touch, distance, obstacle jump, repair, door, overturn, progression door, improper anchor, baggage, judge, ball jump, change not comunicated, battery load, unsportsmanlike conduct,loss of road license,modify track conditions, loss of bib, car manipulation, car out of the compound,no dorsal,non-compliance with Technical Regulations,car body/battery relocation, reverse gate. Variable number of zones, progression gates, optional time and maximum points. In this mode it is possible to apply maximum time and / or maximum score and make a fiasco in case of exceeding it. In the event of a fiasco, the player will score the maximum between the defined times / points and the current score.',
            tiempo: 'Time',
            puntos: 'Points',
            rey: 'The King',
            isrcc: 'ISRCC Rules',
            aecar: 'AECAR Rules',
            levante124: '1/24 Levante Rules',
            generic: 'Generic Rules',
            copaespana: 'Regional ZonaRc',
            minicrawlerpassion: 'Mini Crawler Passion',
            modojuegocopaespana: 'By points game with full ZonaRc Regional Championship rules and scores'
          }
        }
      },
      es: {
        translation: {
          content: {
            aboutus: 'surge a partir de la afición de un grupo de amigos después de descubrir el mundo del crawler rc, entrando por la escala 1/24.',
            aboutus1: 'Después de salir al terreno de juego un par de veces nos dimos cuenta que sería una buena idea tener un marcador para las partidas, donde poder gestionar los puntos en los diferentes modos de juegos que practicamos.',
            aboutus2: 'Si tienes alguna duda, comentario o sugerencia no dudes en contactar con nosotros en crawlear.com@gmail.com',
            aboutus3: 'takezoRc, Barcelona 2022',
            welcomeMessage: 'es un tablero profesional y social de puntuación para tus eventos o competiciones de Crawler 1/10 o 1/24 compatible con las reglas de AECAR, ISRCC, Levante 1/24, Mini Crawler Passion y el Campeonato Regional de ZonaRc.',
            instrucciones: 'Primero añade los jugadores, selecciona el modo de juego, el tipo de puntuación y pulsa Empezar.',
            instrucciones1: 'Pulsando en el jugador podrás definir un handicap positivo (ventaja inicial) o negativo (desventaja inicial). A final de partida el handicap se sumará a los puntos del jugador para calcular el total de puntos.',
            maxTimeText1: 'Selecciona el tiempo máximo (0 si no quieres aplicar tiempo máximo):',
            maxTimeText2: 'Selecciona el máximo de puntos (0 si no quieres aplicar puntuación máxima):',
            usuariodesistema: 'Puedes buscar y añadir un usuario registrado en crawlear, o añadir un usuario no registrado:',
            usuarionosistema: 'Puedes añadir usuarios:',
            puedesbuscarusuarios: 'Puedes buscar usuarios:',
            clickenusuariooseguir: 'Pulsa un usuario para ir a su perfil de piloto y pulsa seguir/dejar de seguir para rellenar tu muro de pilotos',
            enviorequest: 'Para agregar un usuario registrado, envía una petición de juego',
            enviorequest2: 'El usuario deberá aceptar la petición para poder ser agregado a la partida',
            peticionjuegoconfirmacion: '¿Quieres enviar una petición de juego?',
            seguroborrarjuego: '¿Quieres ELIMINAR el juego?',
            seguroborrarpost: '¿Quieres ELIMINAR la entrada?',
            nogeolocation: 'Tu navegador no soporta geolocalizacíon',
            landingMainText: 'Ingresa con tu cuenta de Google.com para acceder a las funcionalidades completas',
            landingSecondText: 'O si lo prefieres, puedes jugar simplemente una',
            seleccionZonas: 'Selecciona el número de zonas o sectores',
            seleccionPuertas: 'Selecciona el número de puertas de progresión por cada zona',
            seleccionapilotoyzona: 'Selecciona un piloto y una zona para continuar',
            pulsafinjugador: 'Pulsa Fin Jugador para acabar la zona',
            quiereseditarpartida: '¿Quieres editar las puntuaciones previamente guardadas?',
            cerrarpartida: '¿Quieres cerrar la partida? No será posible volver a editar las puntuaciones',
            finalizarreparacion: '¿Quieres finalizar la reparación?',
            marcarfiascoreparacion: '¿Quieres marcar fiasco de reparación?',
            quieresempezarzona: '¿Quieres empezar el juego?',
            seguroeditarpartidaenjuego: 'Si editas un juego en marcha podrás perder datos de la partida. ¿Estás seguro que quieres editar una zona en curso?',
            licenseText: 'Contacta con nosotros en crawlear.com@gmail.com si estás interesado en licenciar la herramienta crawlear para un evento o competición oficial',
            zonascompletadas: 'Zonas completadas por grupo:',
            estadozona: 'Estado de zonas:',
            quieresenviarpeticiondepresencia: '¿Quieres enviar una petición de presencia al director del juego?',
            aceptarpresencia: '¿Quieres limpiar la petición de presencia?',
            selecciongrupos: 'Selecciona el número de grupos en la partida',
            colaboraciones: 'Colabora:',
            editprofile: 'Puedes editar los datos haciendo click en el nombre, descripción o nombre de usuario en instagram',
            userprofilenotlogged: 'Haz Sign In en crawlear.com con una cuenta de google para poder ver la información del perfil de usuario',
            urlEmbed: '(opcional) url a un post de insagram, youtube o tiktok',
            textEmbed: 'mensaje de la entrada',
            gameEmbed: 'si está relacionado con la entrada puedes seleccionar unos de tus juegos marcados como PÚBLICO y los usuarios podrán ver el resultado y la localización (si hubiese)',
            nopost: 'No hay ninguna entrada en tu perfil. Rellénalo con tus últimas fotografías y videos de instagram. Tiktok, Facebook y Youtube',
            nofeedpost: 'No hay ninguna entrada en tu muro de pilotos seguidos. Sigue a tus amigos o pilotos favoritos para ver aquí sus entradas.',
            shareProfileText: 'Hey! Echa un ojo a éste perfil de piloto en crawlear.com ',
            sharePostText: 'Hey! Echa un ojo a ésta entrada en crawlear.com ',
            comparteenredespost: 'Comparte ésta entrada en redes sociales:',
            comparteenredespiloto: 'Comparte éste perfil de piloto en redes sociales:',
            ayudasocialprofile: 'Nuevo Perfil de Piloto Social en Crawlear.com! Accede desde el menú lateral > Perfil Social o haciendo click aqui.',
            offlineMainText: 'Tu navegador no tiene conexión, comprueba de nuevo en unos minutos'
          },
          error: {
              nojugadores: 'Añade a los jugadores',
              nojueces: 'Añade a los jueces',
              nonombre: 'Rellena al menos el nombre de la partida para continuar',
              nogeolocation: 'No se puede obtener la geolocalización o no hay permisos',
              juegoencurso: 'El jugador y la zona ya está en juego',
              reparacionencurso: 'El jugador está en estado de reparación',
              rellenargrupos: 'Repasa la configuración, existe algun grupo sin pilotos',
              nodirectordepartida: 'Marca al menos un juez como director de partida',
              noposttext: 'El texto de la entrada está vacío',
              noposturl: 'La url de la entrada está vacía',
              nosocialurl: 'La url debe apuntar a una entrada de youtube, tiktok o instagram'
          },
          description: {
              juego: 'juego',
              juegopublico: 'juego público',
              nojugadores: 'No hay jugadores',
              nojueces: 'No hay jueces',
              nopartidas: 'No hay partidas en curso',
              norequests: 'No hay peticiones de juego en curso',
              jugadores: 'Jugadores',
              jueces: 'Jueces',
              enreparaciondesde: 'Desde:',
              iniciarreparacion: 'Iniciar reparación',
              juezdepista: 'Juez de Pista',
              juezdecarpa: 'Juez de Carpa',
              nuevojugador: 'Nuevo jugador',
              ordenaleatorio: 'Orden aleatorio',
              empezar: 'Empezar',
              crear: 'Crear juego',
              atras: 'Atrás',
              ganador: 'GANADOR',
              empate: 'EMPATE',
              tiempo: 'TIEMPO',
              puntos: 'PUNTOS',
              finjugador: 'fin jugador',
              total: 'TOTAL',
              ordenruta: 'ORDEN de Ruta',
              fin: 'Fin',
              reset: 'Reiniciar',
              continuar: 'Continuar',
              tiempomaximo: 'TIEMPO MAX',
              zonas: 'Zonas',
              zona: 'Zona',
              puntosmaximo: 'MAX PUNTOS',
              handicap: 'handicap',
              instrucciones: 'Instrucciones',
              paginaprincipal: 'Página principal',
              aboutus: 'Sobre nosotros',
              politicaprivacidad: 'Política de privacidad',
              registro: 'Registro',
              descripcion: 'Descripción',
              partidascomopiloto: 'Partidas como Piloto',
              partidasenjuego: 'Partidas en proceso',
              partidasdejuez: 'Partidas como Juez',
              partidascreadas: 'Partidas creadas',
              partidasprevias: 'Partidas previas',
              jugador: 'Jugador',
              nuevaPartida: 'Nuevo juego',
              nombre: 'Nombre',
              fecha: 'Fecha',
              esPublica: 'Es pública',
              localizacion: 'Localización',
              obtener: 'Obtener',
              obteniendo: 'Obteniendo',
              buscarusuario: 'Buscar usuario',
              resultado: 'Resultado',
              vergooglemaps: 'Ver en Google Maps',
              verperfil: 'Ver perfil social',
              ver: 'Ver',
              usuariosenpartida: 'Jugadores en partida',
              juecesenpartida: 'Jueces en partida',
              peticionesdejuego: 'Peticiones de Juego',
              peticionde: 'Petición de',
              parajuego: 'para el juego',
              peticionespendientes: 'peticiones pendientes',
              enviar: 'enviar',
              resumen: 'Resumen',
              detalle: 'Detalle',
              penalizaciones: 'Penalizaciones',
              penalizacionesadicionales: 'Penalizaciones adicionales',
              avancepuerta: 'Puertas',
              fallospuerta: 'puertas fallidas',
              puertas: 'puertas',
              bonificacion: 'bonificación',
              jugadorseleccionado: 'Piloto seleccionado',
              zonaseleccionada: 'Zona seleccionada',
              nohayreparaciones: 'No hay reparaciones',
              cerrarpartida: 'Cerrar partida',
              waiting: 'espera',
              repair: 'reparación',
              done: 'hecho',
              playing: 'en juego',
              estado: 'Estado',
              reparacionfinalizada: 'reparación finalizada',
              portiempo: 'por tiempo',
              grupo: 'Grupo',
              grupos: 'Grupos',
              directordepartida: 'Director de juego',
              ocupado: 'Ocupado',
              libre: 'Libre',
              peticionesdepresencia: 'Peticiones de presencia',
              nopeticionespresencia: 'Sin peticiones de presencia',
              de: 'de:',
              aceptar: 'Aceptar',
              reclamarpresencia: 'Reclamar presencia',
              entrenamientos: 'Gestionar entrenamientos',
              bonificacionaccesorios: 'Bonificación de accesorios',
              ayuda: 'Ayuda',
              estadisticas: 'Estadísticas',
              posts: 'Entradas',
              texto: 'Texto',
              publicar: 'Publicar entrada',
              compartir: 'Compartir',
              noasignarjuego: 'no asignar juego',
              sinjuego: 'sin juego asignado',
              juegoasignado: 'Juego asignado',
              murodepiloto: 'Muro de Piloto',
              murodefollows: 'Muro de Pilotos',
              secciondejuego: 'Herramienta de juego',
              resolverjuego: 'ver resultado del juego',
              herramientajuego: 'Herramienta de juego',
              volverherramientajuego: 'volver a la herramienta de juego',
              tendenciapiloto: 'Tendencia del perfil: PiLOTO',
              tendenciajuez: 'Tendencia del perfil: JUEZ',
              tendencianeutral: 'Tendencia del perfil: JUEZ y PiLOTO',
              perfilsocial: 'Perfil social',
              follow: 'Seguir',
              unfollow: 'Dejar de serguir',
              logout: 'Salir',
              refrescar: 'Recargar',
              seguidores: 'Seguidores',
              siguiendo: 'Siguiendo',
              eliminarpartida: 'Eliminar partida',
              jugarpartida: 'Jugar partida',
              regenerarpartida: 'Regenerar partida'
          },
          points: {
            vuelco: 'vuelco',
            tocar: 'tocar',
            puerta: 'puerta',
            saltoobstaculo: 'salto obstaculo',
            reparacion: 'reparación',
            winch: 'winch',
            puertaprogresion: 'puerta de progresion',
            distancia: 'distancia',
            equipaje: 'equipaje',
            anclajeindebido: 'anclaje indebido',
            juez: 'juez',
            saltopelota: 'salto de pelota',
            nocomunicarcambio: 'cambio no comunicado',
            bateria: 'carga de bateria',
            conductaincivica: 'conducta incívica',
            perdidacarnet: 'pérdida de carnet',
            modificarpista: 'modificar condición de pista',
            perdidadorsal: 'perdida de dorsal',
            modificarcoche: 'manipulación del coche',
            sacarcoche: 'coche fuera del recinto',
            nodorsal: 'no dorsal',
            incumplimientotecnico: 'no cumplir reglamento técnico',
            recolocacionbateria: 'recolocación bateria/carrocería',
            puertamarchaatras: 'puerta marcha atrás',
            retroceso: 'retroceso',
            direcciondelcurso: 'dirección del curso',
            limite: 'límite',
            fueraespecificacion: 'fuera especificación',
            usodispositivo: 'uso de dispositivo',
            noempezado: 'no empezado',
            fiascos: 'Fiascos',
            noterminado: 'no terminado',
            tocarcochenoavanzar: 'tocar coche (sin avanzar)',
            tocarcochepuerta: 'tocar coche (pasando puerta)',
            
            empujarcocheacompañar:'Empujar coche al acompañar',
            reparacion30mins:'Reparación en Boxes máximo 30min',
            
            conectarentiempoajuste: 'Conectar emisora y receptor en tiempo de Ajuste',
            nococheparquecerrado: 'No tener el coche en parque cerrado al inicio de la zona',
            manipulacionvehiculocarpa: 'Manipulación Vehículo en trayecto a carpa',
            tiemposentrenamiento: 'No respetar los tiempos de entrenamiento',


            acaompañarcoche: 'Acompañar coche (coche y medio)',
            saltarsepuerta: 'Saltarse Puerta',
            reparacionherramientasinsitu:'Reparación con herramientas in situ',
            saltarzona: 'Saltar zona complicada (coche + medio)',
            tocarcocheiniciovuelco: 'Tocar coche al iniciar vuelco',
            vuelcoasistidotoque: 'Vuelco Asistido con toque en puerta o piloto',
            vuelcoasistido: 'Vuelco Asistido ',
            caidapuente: 'Caída de puente',
            recolocarpuente: 'Recolocar en puente',
            utilizacionextrawinch: 'Utilización EXTRA del WINCH',
            vuelcotoquepuertapiloto: 'Vuelco con toque en puerta o piloto',
            terminarzonasinobjeto: 'Terminar la zona sin algún objeto',
            tocarcoche: 'Tocar el coche',
            tocarpuerta: 'Tocar puerta',
            vuelconoasistido: 'Vuelco no asistido',
            interferiraccionjuez: 'Interferir en la acción de un Juez',
            moverwinch: 'Mover el vehículo >2cm al sacar el WINCH',
            unaruedaejetrasero: 'Pasar solo una rueda del eje trasero por la puerta',
            tocarpuertaunarueda: 'Tocar puerta y pasar solo 1 rueda trasera por ella',
            puertabonificada: 'Puerta bonificada',
            masuno: '+1',
            masdos: '+2',
            mastres: '+3',
            mascuatro: '+4',
            mascinco: '+5',
            bonificacion: 'bonus'
          },
          gametype: {
            partidarapida: 'Partida rápida',
            modojuego: 'Modo de juego',
            tipopuntuacion: 'Tipo de puntuacion',
            modojuegotiempo: 'Se escoge un tramo y todos los participantes lo correrán uno por uno y en el orden preestablecido. Se corre a puntos con tiempo y puntuación máxima y la posibilidad de hacer fiasco. El ganador será el jugador con menor puntos con desempate de tiempo.',
            modojuegopuntos: 'Se escoge un tramo y todos los participantes lo correrán uno por uno y en el orden preestablecido. Se corre a puntos y el ganador será el jugador con menor puntuación.',
            modojuegorey: 'No hay ruta preestablecida y el primer participante, el Rey, escoge el camino al jugar. Todos los participantes corren a la vez en línea siguiendo la misma ruta que el Rey. Si un jugador puntúa pasa al final de la cola. El ganador será el jugador con menor puntuación.',
            modojuegoarcar: 'Por puntos usando el reglamento y puntuaciones del reglamento ARCAR',
            modojuegoisrcc: 'Por puntos usando el reglamento y puntuaciones del reglamento ISRCC',
            modojuegolevante124: 'Por puntos usando reglas y puntuaciones del regalmento Levante 1/24',
            modojuegocopaespana: 'Por puntos usando reglas y puntuaciones completas del Campeonato Regional de ZonaRc',
            modojuegominicrawlerpassion: 'Por puntos usando reglas y puntuaciones básicas pero efectivas',
            modojuegogeneric: 'Por puntos usando reglas y puntuaciones genéricas',
            simple: 'Simple',
            completa: 'Completa',
            descripcionPuntosSimple: 'Puntuación: Winch, tocar, salto obstaculo, reparacion, puerta, vuelco y puerta progresion. No hay tiempo ni puntos máximos. No se aplica tiempo ni puntuación máxima.',
            descripcionPuntosCompleta: 'Puntuación: Winch, tocar, distancia, salto obstaculo, reparacion, puerta, vuelco, puerta progresion, anclaje indebido, equipaje, juez, salto de pelota ,cambio no comunicado, carga de bateria, conducta incívica, pérdida de carnet, modificar condición de pista, perdida de dorsal, manipulación del coche, coche fuera del recinto, no dorsal, no cumplir reglamento técnico, recolocación bateria/carrocería y puerta marcha atrás. Número de zonas variables, puertas de progresión, Tiempo y puntos máximos opcionales. En éste modo es posible aplicar tiempo máximo y/o puntuación máxima y realizar un fiasco en caso de superarla. En caso de fiasco el jugador puntuará el máximo entre los tiempos / puntos definidos y la puntuación actual.',
            tiempo: 'Tiempo',
            puntos: 'Puntos',
            rey: 'El Rey',
            isrcc: 'Reglas ISRCC',
            aecar: 'Reglas AECAR',
            levante124: '1/24 Levante',
            generic: 'Reglas genéricas',
            copaespana: 'Regional ZonaRc',
            minicrawlerpassion: 'Mini Crawler Passion'
          }
        }
      }
    }
  });

export default i18n;