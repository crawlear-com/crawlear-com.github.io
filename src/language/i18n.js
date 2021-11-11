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
            aboutus: 'is a page to help on your crawler "pachangas" (spanish name for a "friends organized game") with friends.'
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
            tiempo: 'TIME',
            puntos: 'POINTS',
            finjugador: 'end player',
            total: 'TOTAL',
            ordenruta: 'Rute ORDER',
            fin: 'End',
            reset: 'Reset'
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
            anclajeindebido: 'improper anchor',
            juez: 'judge'
          },
          gametype: {
            modojuego: 'Game mode',
            tipopuntuacion: 'Points type',
            modojuegotiempo: 'A section is chosen and all participants will run it one by one and in the pre-established order. It runs on time and the points accumulate seconds to the total time. The winner will be the player with the shortest time.',
            modojuegopuntos: 'A section is chosen and all participants will run it one by one and in the pre-established order. Points are run and the winner will be the player with the lowest score.',
            modojuegorey: 'There is no pre-established route and the first participant, the King, chooses the path when playing. All participants run at the same time in line following the same route as the King. If a player scores he goes to the end of the queue. The winner will be the player with the lowest score.',
            simple: 'Simple',
            completa: 'Complete',
            descripcionPuntosSimple: 'Winch, touch, obstacle jump, repair, door, overturn and progression door',
            descripcionPuntosCompleta: 'Winch, touch, distance, obstacle jump, repair, door, overturn, progression door, improper anchor and judge',
            tiempo: 'Time',
            puntos: 'Points',
            rey: 'The King'
          }
        }
      },
      es: {
        translation: {
          content: {
            aboutus: 'es una página para ayudar a puntuar las pachangas de crawler con los amigos.'
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
              tiempo: 'TIEMPO',
              puntos: 'PUNTOS',
              finjugador: 'fin jugador',
              total: 'TOTAL',
              ordenruta: 'ORDEN de Ruta',
              fin: 'Fin',
              reset: 'Reiniciar'
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
            anclajeindebido: 'anclaje indebido',
            juez: 'juez'
          },
          gametype: {
            modojuego: 'Modo de juego',
            tipopuntuacion: 'Tipo de puntuacion',
            modojuegotiempo: 'Se escoge un tramo y todos los participantes lo correrán uno por uno y en el orden preestablecido. Se corre a tiempo y los puntos acumulan segundos al tiempo total. El ganador será el jugador con menor tiempo.',
            modojuegopuntos: 'Se escoge un tramo y todos los participantes lo correrán uno por uno y en el orden preestablecido. Se corre a puntos y el ganador será el jugador con menor puntuación.',
            modojuegorey: 'No hay ruta preestablecida y el primer participante, el Rey, escoge el camino al jugar. Todos los participantes corren a la vez en línea siguiendo la misma ruta que el Rey. Si un jugador puntúa pasa al final de la cola. El ganador será el jugador con menor puntuación.',
            simple: 'Simple',
            completa: 'Completa',
            descripcionPuntosSimple: 'Winch, tocar, salto obstaculo, reparacion, puerta, vuelco y puerta progresion',
            descripcionPuntosCompleta: 'Winch, tocar, distancia, salto obstaculo, reparacion, puerta, vuelco, puerta progresion, anclaje indebido y juez',
            tiempo: 'Tiempo',
            puntos: 'Puntos',
            rey: 'El Rey'
          }
        }
      }
    }
  });

export default i18n;