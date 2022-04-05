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
            welcomeMessage: 'is a score board for your crawler pachangas (spanish name for a "friends organized game").',
            instrucciones: 'First add the players, select the game mode, the points type and push the Begin button.',
            instrucciones1: 'By clicking on the player you can define a positive (initial advantage) or negative (initial disadvantage) handicap. At the end of the game, the handicap will be added to the player\'s points to calculate the total points.',
            maxTimeText1: 'Select the maximum time (0 if you do not want to apply maximum time):',
            maxTimeText2: 'Select the maximum points (0 if you do not want to apply a maximum score):',
            usuariodesistema: 'You can search and add a crawlear registered user, or add a non-registered one:',
            usuarionosistema: 'You can users:',
            enviorequest: 'To add a registered player, send him play request',
            enviorequest2: 'The player must accept the request to be added to the game',
            peticionjuegoconfirmacion: 'Do you want to send a game request?',
            seguroborrarjuego: 'Do you want to delete the game?',
            nogeolocation: 'Your browser does not support geolocation',
            landingMainText: 'To get advanced functionality you can log in using your google.com account',
            landingSecondText: 'Or just play a',
            seleccionZonas: 'Select the number of zones',
            seleccionPuertas: 'Select the number of progression gates',
            seleccionapilotoyzona: 'Select a player and a zone to continue'
          },
          error: {
              nojugadores: 'Add the players',
              nojueces: 'Add the judges',
              nonombre: 'Fill in at least the name of the game to continue',
              nogeolocation: 'Cant get geolocation or there is a permission error',
              juegoencurso: 'Player is already playing the zone'
          },
          description: {
            nojugadores: 'No players',
            nojueces: 'No judges',
            nopartidas: 'No previous games',
            norequests: 'No current game requests',
            jugadores: 'Players',
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
            partidasprevias: 'Pilot games',
            partidasenjuego: 'Current Games',
            partidasdejuez: 'Judge Games',
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
            avancepuerta: 'gate progression',
            fallospuerta: 'gate fails',
            bonificacion: 'bonification',
            jugadorseleccionado: 'Selected player',
            zonaseleccionada: 'Selected zone'

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
            fiascos: 'Fiascos'
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
            simple: 'Simple',
            completa: 'Complete',
            descripcionPuntosSimple: 'Score: Winch, touch, obstacle jump, repair, door, overturn and progression door. There is no time or maximum points. There is no max time or max points',
            descripcionPuntosCompleta: 'Score: Winch, touch, distance, obstacle jump, repair, door, overturn, progression door, improper anchor, baggage, judge, ball jump, change not comunicated, battery load, unsportsmanlike conduct,loss of road license,modify track conditions, loss of bib, car manipulation, car out of the compound,no dorsal,non-compliance with Technical Regulations,car body/battery relocation, reverse gate. Variable number of zones, progression gates, optional time and maximum points. In this mode it is possible to apply maximum time and / or maximum score and make a fiasco in case of exceeding it. In the event of a fiasco, the player will score the maximum between the defined times / points and the current score.',
            tiempo: 'Time',
            puntos: 'Points',
            rey: 'The King',
            isrcc: 'ISRCC Rules',
            aecar: 'AECAR Rules'
          }
        }
      },
      es: {
        translation: {
          content: {
            aboutus: 'surge a partir de la afición de un grupo de amigos después de descubrir el mundo del crawler rc, entrando por la escala 1/24.',
            aboutus1: 'Después de salir al terreno de juego un par de veces nos dimos cuenta que sería una buena idea tener un marcador para las partidas, donde poder gestionar los puntos en los diferentes modos de juegos que practicamos.',
            aboutus2: 'Si tienes alguna duda, comentario o sugerencia no dudes en contactar con nosotros en crawlear.com@gmail.com',
            aboutus3: 'takezoRc, Barcelona 2021',
            welcomeMessage: 'es un tablero de puntuación para tus pachangas de crawler con los amigos.',
            instrucciones: 'Primero añade los jugadores, selecciona el modo de juego, el tipo de puntuación y pulsa Empezar.',
            instrucciones1: 'Pulsando en el jugador podrás definir un handicap positivo (ventaja inicial) o negativo (desventaja inicial). A final de partida el handicap se sumará a los puntos del jugador para calcular el total de puntos.',
            maxTimeText1: 'Selecciona el tiempo máximo (0 si no quieres aplicar tiempo máximo):',
            maxTimeText2: 'Selecciona el máximo de puntos (0 si no quieres aplicar puntuación máxima):',
            usuariodesistema: 'Puedes buscar y añadir un usuario registrado en crawlear, o añadir un usuario no registrado:',
            usuarionosistema: 'Puedes añadir usuarios:',
            enviorequest: 'Para agregar un usuario registrado, envía una petición de juego',
            enviorequest2: 'El usuario deberá aceptar la petición para poder ser agregado a la partida',
            peticionjuegoconfirmacion: '¿Quieres enviar una petición de juego?',
            seguroborrarjuego: '¿Quieres ELIMINAR el juego?',
            nogeolocation: 'Tu navegador no soporta geolocalizacíon',
            landingMainText: 'Para obtener funcionalidades avanzadas puedes ingresar con tu cuenta de google.com',
            landingSecondText: 'O si lo prefieres, puedes jugar simplemente una',
            seleccionZonas: 'Selecciona el número de zonas o sectores',
            seleccionPuertas: 'Selecciona el número de puertas de progresión',
            seleccionapilotoyzona: 'Selecciona un piloto y una zona para continuar'
          },
          error: {
              nojugadores: 'Añade a los jugadores',
              nojueces: 'Añade a los jueces',
              nonombre: 'Rellena al menos el nombre de la partida para continuar',
              nogeolocation: 'No se puede obtener la geolocalización o no hay permisos',
              juegoencurso: 'El jugador y la zona ya se está en juego'
          },
          description: {
              nojugadores: 'No hay jugadores',
              nojueces: 'No hay jueces',
              nopartidas: 'No hay partidas guardadas',
              norequests: 'No hay peticiones de juego en curso',
              jugadores: 'Jugadores',
              jueces: 'Jueces',
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
              partidasprevias: 'Partidas como Piloto',
              partidasenjuego: 'Partidas en proceso',
              partidasdejuez: 'Partidas como Juez',
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
              avancepuerta: 'avance de puertas',
              fallospuerta: 'puertas fallidas',
              bonificacion: 'bonificación',
              jugadorseleccionado: 'Piloto seleccionado',
              zonaseleccionada: 'Zona seleccionada'
          },
          points: {
            vuelco: 'vuelco',
            tocar: 'tocar',
            puerta: 'puerta',
            saltoobstaculo: 'salto obstaculo',
            reparacion: 'reparacion',
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
            fiascos: 'Fiascos'
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
            simple: 'Simple',
            completa: 'Completa',
            descripcionPuntosSimple: 'Puntuación: Winch, tocar, salto obstaculo, reparacion, puerta, vuelco y puerta progresion. No hay tiempo ni puntos máximos. No se aplica tiempo ni puntuación máxima.',
            descripcionPuntosCompleta: 'Puntuación: Winch, tocar, distancia, salto obstaculo, reparacion, puerta, vuelco, puerta progresion, anclaje indebido, equipaje, juez, salto de pelota ,cambio no comunicado, carga de bateria, conducta incívica, pérdida de carnet, modificar condición de pista, perdida de dorsal, manipulación del coche, coche fuera del recinto, no dorsal, no cumplir reglamento técnico, recolocación bateria/carrocería y puerta marcha atrás. Número de zonas variables, puertas de progresión, Tiempo y puntos máximos opcionales. En éste modo es posible aplicar tiempo máximo y/o puntuación máxima y realizar un fiasco en caso de superarla. En caso de fiasco el jugador puntuará el máximo entre los tiempos / puntos definidos y la puntuación actual.',
            tiempo: 'Tiempo',
            puntos: 'Puntos',
            rey: 'El Rey',
            isrcc: 'Reglas ISRCC',
            aecar: 'Reglas AECAR'
          }
        }
      }
    }
  });

export default i18n;