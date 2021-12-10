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
            maxTimeText2: 'Select the maximum points (0 if you do not want to apply a maximum score):'
          },
          error: {
              nojugadores: 'First add the players and select the type of game and score'
          },
          description: {
            nojugadores: 'No players',
            jugadores: 'Players',
            nuevojugador: 'New player',
            ordenaleatorio: 'Random order',
            empezar: 'Begin',
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
            puntosmaximo: 'MAX POINTS',
            handicap: 'handicap',
            instrucciones: 'Instructions'
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
            juez: 'judge'
          },
          gametype: {
            modojuego: 'Game mode',
            tipopuntuacion: 'Points type',
            modojuegotiempo: 'A section is chosen and all participants will run it one by one and in the pre-established order. You run to points with time and maximum score and the possibility of making a fiasco. The winner will be the player with less points with a time tiebreaker.',
            modojuegopuntos: 'A section is chosen and all participants will run it one by one and in the pre-established order. Points are run and the winner will be the player with the lowest score.',
            modojuegorey: 'There is no pre-established route and the first participant, the King, chooses the path when playing. All participants run at the same time in line following the same route as the King. If a player scores he goes to the end of the queue. The winner will be the player with the lowest score.',
            simple: 'Simple',
            completa: 'Complete',
            descripcionPuntosSimple: 'Score: Winch, touch, obstacle jump, repair, door, overturn and progression door. There is no time or maximum points. There is no max time or max points',
            descripcionPuntosCompleta: 'Score: Winch, touch, distance, obstacle jump, repair, door, overturn, progression door, improper anchor, baggage and judge. Optional time and maximum points. In this mode it is possible to apply maximum time and / or maximum score and make a fiasco in case of exceeding it. In the event of a fiasco, the player will score the maximum between the defined times / points and the current score.',
            tiempo: 'Time',
            puntos: 'Points',
            rey: 'The King'
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
            maxTimeText2: 'Selecciona el máximo de puntos (0 si no quieres aplicar puntuación máxima):'
          },
          error: {
              nojugadores: 'Primero añade los jugadores y selecciona el tipo de juego y puntuación'
          },
          description: {
              nojugadores: 'No hay jugadores',
              jugadores: 'Jugadores',
              nuevojugador: 'Nuevo jugador',
              ordenaleatorio: 'Orden aleatorio',
              empezar: 'Empezar',
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
              puntosmaximo: 'MAX PUNTOS',
              handicap: 'handicap',
              instrucciones: 'Instrucciones'
          },
          points: {
            vuelco: 'vuelco',
            tocar: 'tocar',
            puerta: 'puerta',
            saltoobstaculo: 'salto obstaculo',
            reparacion: 'reparacion',
            winch: 'winch',
            puertaprogresion: 'puerta progresion',
            distancia: 'distancia',
            equipaje: 'equipaje',
            anclajeindebido: 'anclaje indebido',
            juez: 'juez'
          },
          gametype: {
            modojuego: 'Modo de juego',
            tipopuntuacion: 'Tipo de puntuacion',
            modojuegotiempo: 'Se escoge un tramo y todos los participantes lo correrán uno por uno y en el orden preestablecido. Se corre a puntos con tiempo y puntuación máxima y la posibilidad de hacer fiasco. El ganador será el jugador con menor puntos con desempate de tiempo.',
            modojuegopuntos: 'Se escoge un tramo y todos los participantes lo correrán uno por uno y en el orden preestablecido. Se corre a puntos y el ganador será el jugador con menor puntuación.',
            modojuegorey: 'No hay ruta preestablecida y el primer participante, el Rey, escoge el camino al jugar. Todos los participantes corren a la vez en línea siguiendo la misma ruta que el Rey. Si un jugador puntúa pasa al final de la cola. El ganador será el jugador con menor puntuación.',
            simple: 'Simple',
            completa: 'Completa',
            descripcionPuntosSimple: 'Puntuación: Winch, tocar, salto obstaculo, reparacion, puerta, vuelco y puerta progresion. No hay tiempo ni puntos máximos. No se aplica tiempo ni puntuación máxima.',
            descripcionPuntosCompleta: 'Puntuación: Winch, tocar, distancia, salto obstaculo, reparacion, puerta, vuelco, puerta progresion, anclaje indebido, equipaje y juez. Tiempo y puntos máximos opcionales. En éste modo es posible aplicar tiempo máximo y/o puntuación máxima y realizar un fiasco en caso de superarla. En caso de fiasco el jugador puntuará el máximo entre los tiempos / puntos definidos y la puntuación actual.',
            tiempo: 'Tiempo',
            puntos: 'Puntos',
            rey: 'El Rey'
          }
        }
      }
    }
  });

export default i18n;