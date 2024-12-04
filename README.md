# Juego de las 7 y media

Variables globales: puntuacion es la variable que mantiene el puntaje del jugador.

Generación de número aleatorio: La función dameNumeroAleatorio() genera un número aleatorio entre 1 y 10.

Generación de carta: La función dameNumeroCarta(numeroAleatorio) ajusta el número aleatorio: si el valor es mayor a 7, le suma 2.

Mostrar cartas: La función dameUrlCarta(numeroCarta) devuelve una URL de la imagen asociada a la carta correspondiente (1 a 12). Si el número no corresponde a ninguna carta, devuelve una imagen de la parte posterior de la carta.

Pintar cartas: La función pintarUrlCarta() asegura que la carta se muestre correctamente en un elemento <img> de la página, verificando que el elemento sea válido antes de asignar la URL.

Mensajes y puntuación: Varias funciones se encargan de mostrar mensajes al usuario (pintarMensaje()) y actualizar la puntuación (sumarPuntos() y actualizarPuntuacion()).

Control de juego:

La función comprobarPartida() evalúa si el jugador ha ganado o perdido basándose en la puntuación actual (7.5 es el límite). Esto desactiva los botones de interacción cuando el juego termina.
La función plantarse() permite que el jugador se "plante" (deje de pedir cartas) y da un mensaje basado en la puntuación acumulada.
La función reiniciarPartida() restablece la puntuación y los elementos del juego para comenzar una nueva partida.
Botón Oráculo: El botón "oráculo" da una carta adicional de manera especial según la puntuación actual, con un mensaje personalizado.

Eventos de los botones:
"nuevaCarta" (pide una nueva carta)
"mePlanto" (el jugador se planta)
"nuevaPartida" (reinicia el juego)
"oraculo" (muestra un mensaje del oráculo)
Deshabilitar botones: La función deshabilitarBotones() desactiva los botones cuando el juego termina, y habilita el botón de "nueva partida" al finalizar. Esto asegura que no se pueda interactuar con los botones una vez que la partida haya concluido.
