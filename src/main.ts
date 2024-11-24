// Variables globales
let puntuacion: number = 0;
let juegoTerminado: boolean = false;

// Lista de cartas posibles
const cartas = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];

// Función para mostrar la puntuación
function muestraPuntuacion(): void {
  const divPuntuacion = document.getElementById("puntuacion");
  if (divPuntuacion) {
    divPuntuacion.textContent = `Puntuación: ${puntuacion.toFixed(1)}`;
  }
}

// Función para generar una carta aleatoria
function dameCarta(): number {
  const indice = Math.floor(Math.random() * cartas.length);
  return cartas[indice];
}

// Función para mostrar la carta
function mostrarCarta(carta: number): void {
  const imgCarta = document.getElementById("cartaActual") as HTMLImageElement;
  if (imgCarta) {
    switch (carta) {
      case 1:
        imgCarta.src = "assets/CARDS-01.png";
        break;
      case 2:
        imgCarta.src = "assets/CARDS-02.png";
        break;
      case 3:
        imgCarta.src = "assets/CARDS-03.png";
        break;
      case 4:
        imgCarta.src = "assets/CARDS-04.png";
        break;
      case 5:
        imgCarta.src = "assets/CARDS-05.png";
        break;
      case 6:
        imgCarta.src = "assets/CARDS-06.png";
        break;
      case 7:
        imgCarta.src = "assets/CARDS-07.png";
        break;
      case 10:
        imgCarta.src = "assets/CARDS-10.png";
        break;
      case 11:
        imgCarta.src = "assets/CARDS-11.png";
        break;
      case 12:
        imgCarta.src = "assets/CARDS-12.png";
        break;

      default:
        imgCarta.src = "assets/CARDS-back.png";
        break;
    }
  }
}

// Función para manejar el botón de pedir carta
function pedirCarta(): void {
  if (juegoTerminado) return;

  const carta = dameCarta();
  mostrarCarta(carta);

  // Calcular puntuación (figuras valen 0.5 puntos)
  const valorCarta = carta > 7 ? 0.5 : carta;
  puntuacion += valorCarta;
  muestraPuntuacion();

  if (puntuacion > 7.5) {
    terminarJuego("¡Te has pasado! Game Over.");
  }
}

// Función para manejar el botón "Me planto"
function mePlanto(): void {
  if (juegoTerminado) return;

  let mensaje: string;
  if (puntuacion < 4) {
    mensaje = "Has sido muy conservador.";
  } else if (puntuacion === 5) {
    mensaje = "Te ha entrado el canguelo eh?";
  } else if (puntuacion <= 7) {
    mensaje = "Casi casi...";
  } else if (puntuacion === 7.5) {
    mensaje = "¡Lo has clavado! ¡Enhorabuena!";
  } else {
    mensaje = "Error inesperado.";
  }
  terminarJuego(mensaje);
}

// Función para mostrar el mensaje final y terminar el juego
function terminarJuego(mensaje: string): void {
  juegoTerminado = true;

  const divMensaje = document.getElementById("mensaje");
  if (divMensaje) {
    divMensaje.textContent = mensaje;
  }

  const botonNuevaPartida = document.getElementById("nuevaPartida");
  if (botonNuevaPartida) {
    botonNuevaPartida.style.display = "block";
  }
}

// Función para iniciar una nueva partida
function nuevaPartida(): void {
  puntuacion = 0;
  juegoTerminado = false;

  muestraPuntuacion();

  const divMensaje = document.getElementById("mensaje");
  if (divMensaje) {
    divMensaje.textContent = "";
  }

  const imgCarta = document.getElementById("cartaActual") as HTMLImageElement;
  if (imgCarta) {
    imgCarta.src =
      "https://github.com/Lemoncode/fotos-ejemplos/blob/main/cartas/back.jpg";
  }

  const botonNuevaPartida = document.getElementById("nuevaPartida");
  if (botonNuevaPartida) {
    botonNuevaPartida.style.display = "none";
  }
}

// Eventos
document.addEventListener("DOMContentLoaded", () => {
  muestraPuntuacion();

  const botonNuevaCarta = document.getElementById("nuevaCarta");
  if (botonNuevaCarta) {
    botonNuevaCarta.addEventListener("click", pedirCarta);
  }

  const botonMePlanto = document.getElementById("mePlanto");
  if (botonMePlanto) {
    botonMePlanto.addEventListener("click", mePlanto);
  }

  const botonNuevaPartida = document.getElementById("nuevaPartida");
  if (botonNuevaPartida) {
    botonNuevaPartida.addEventListener("click", nuevaPartida);
  }
});
