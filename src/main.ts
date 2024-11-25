// Variables globales
let puntuacion: number = 0;

// Función para generar un numero aleatorio
const dameNumeroAleatorio = () => {
  return Math.floor(Math.random() * 10);
};

// Función para generar una carta aleatoria
const dameNumeroCarta = (numeroAleatorio: number) => {
  if (numeroAleatorio > 7) {
    return numeroAleatorio + 2;
  }

  return numeroAleatorio;
};

// Función para mostrar la carta
const dameUrlCarta = (numeroCarta: number) => {
  switch (numeroCarta) {
    case 1:
      return "assets/CARDS-01.png";
    case 2:
      return "assets/CARDS-02.png";
    case 3:
      return "assets/CARDS-03.png";
    case 4:
      return "assets/CARDS-04.png";
    case 5:
      return "assets/CARDS-05.png";
    case 6:
      return "assets/CARDS-06.png";
    case 7:
      return "assets/CARDS-07.png";
    case 10:
      return "assets/CARDS-10.png";
    case 11:
      return "assets/CARDS-11.png";
    case 12:
      return "assets/CARDS-12.png";
    default:
      return "assets/CARDS-back.png";
  }
};

// Función para pintar la carta
const pintarUrlCarta = (urlCarta: string) => {
  const imgElement = document.getElementById("cartaActual");

  if (
    imgElement !== null &&
    imgElement !== undefined &&
    imgElement instanceof HTMLImageElement
  ) {
    imgElement.src = urlCarta;
  }
};

// Función para dar valor a la carta
const damePuntosCarta = (carta: number) => {
  if (carta > 7) {
    return 0.5;
  }

  return carta;
};

//Función para sumar puntuacion total
const sumarPuntos = (puntos: number) => {
  return puntos + puntuacion;
};

//Función para actualizar marcador
const actualizarPuntuacion = (puntosActuales: number) => {
  puntuacion = puntosActuales;
};

//Función para estatus de partida
const comprobarPartida = () => {
  if (puntuacion === 7.5) {
    console.log("Has ganado");
  }

  if (puntuacion > 7.5) {
    console.log("Has perdido");
  }
};

// Función para estatus de plantarse
const plantarse = () => {
  if (puntuacion < 4) {
    console.log("Has sido muy conservador");
  }

  if ((puntuacion = 5)) {
    console.log("Te ha entrado el canguelo eh?");
  }

  if (((puntuacion = 6), 7)) {
    console.log("Casi, casi...");
  }

  if ((puntuacion = 7.5)) {
    console.log("Lo has clavado");
  }
};

//Función principal
const dameCarta = () => {
  const aleatorio = dameNumeroAleatorio();
  const carta = dameNumeroCarta(aleatorio);
  const urlCarta = dameUrlCarta(carta);
  pintarUrlCarta(urlCarta);
  const puntosCarta = damePuntosCarta(carta);
  const puntosSumados = sumarPuntos(puntosCarta);
  actualizarPuntuacion(puntosSumados);
  comprobarPartida();
};

// Función boton PEDIR CARTA
const nuevaCartaBoton = document.getElementById("nuevaCarta");

if (
  nuevaCartaBoton !== null &&
  nuevaCartaBoton !== undefined &&
  nuevaCartaBoton instanceof HTMLButtonElement
) {
  nuevaCartaBoton.addEventListener("click", () => {
    dameCarta();
  });
}

//Función boton ME PLANTO
const mePlantoBoton = document.getElementById("mePlanto");

if (
  mePlantoBoton !== null &&
  mePlantoBoton !== undefined &&
  mePlantoBoton instanceof HTMLButtonElement
) {
  mePlantoBoton.addEventListener("click", () => {
    plantarse();
  });
}
