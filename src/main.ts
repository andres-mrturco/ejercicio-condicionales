// Variables globales
let puntuacion: number = 0;

// Función generar numero aleatorio
const dameNumeroAleatorio = () => {
  return Math.floor(Math.random() * 10) + 1;
};

// Función carta aleatoria
const dameNumeroCarta = (numeroAleatorio: number) => {
  if (numeroAleatorio > 7) {
    return (numeroAleatorio += 2);
  }
  return numeroAleatorio;
};

// Función valor carta
const damePuntosCarta = (carta: number) => {
  if (carta > 7) {
    return 0.5;
  }
  return carta;
};

// Función mostrar carta
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

// Función pintar carta
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

// **Función pintar carta especial**
const mostrarCartaEspecial = (tipo: string) => {
  const imgElement = document.getElementById("cartaActual");

  let urlCarta = "assets/CARDS-back.png";

  if (tipo === "perdido") {
    urlCarta = "assets/CARDS-muerte.png";
  } else if (tipo === "oraculo") {
    urlCarta = "assets/CARDS-oraculo.png";
  } else if (tipo === "ganado") {
    urlCarta = "assets/CARDS-victoria.png";
  }

  if (
    imgElement !== null &&
    imgElement !== undefined &&
    imgElement instanceof HTMLImageElement
  ) {
    imgElement.src = urlCarta;
  }
};

// Función pintar el mensaje
const pintarMensaje = (mensaje: string) => {
  const mensajeElemento = document.getElementById("mensaje");
  if (
    mensajeElemento !== null &&
    mensajeElemento !== undefined &&
    mensajeElemento instanceof HTMLElement
  ) {
    mensajeElemento.textContent = mensaje;
  }
};

// Función sumar puntuación total
const sumarPuntos = (puntos: number) => {
  puntuacion += puntos;
};

// Función actualizar puntuación
const actualizarPuntuacion = () => {
  const puntuacionElemento = document.getElementById("puntuacion");
  if (
    puntuacionElemento !== null &&
    puntuacionElemento !== undefined &&
    puntuacionElemento instanceof HTMLElement
  ) {
    puntuacionElemento.textContent = `Puntuación: ${puntuacion}`;
  }
};

// Función comprobar partida
const comprobarPartida = () => {
  const mensajeElemento = document.getElementById("mensaje");
  if (
    mensajeElemento !== null &&
    mensajeElemento !== undefined &&
    mensajeElemento instanceof HTMLElement
  ) {
    if (puntuacion === 7.5) {
      pintarMensaje("¡Has ganado! ¡Felicidades!");
      mostrarCartaEspecial("ganado");
      deshabilitarBotones();

      const oraculoBoton = document.getElementById("oraculo");
      if (
        oraculoBoton !== null &&
        oraculoBoton !== undefined &&
        oraculoBoton instanceof HTMLButtonElement
      ) {
        oraculoBoton.style.display = "none";
        oraculoBoton.disabled = true;
      }
    }
    if (puntuacion > 7.5) {
      pintarMensaje("¡Has perdido! Te pasaste de 7.5 puntos.");
      mostrarCartaEspecial("perdido");
      deshabilitarBotones();

      const oraculoBoton = document.getElementById("oraculo");
      if (
        oraculoBoton !== null &&
        oraculoBoton !== undefined &&
        oraculoBoton instanceof HTMLButtonElement
      ) {
        oraculoBoton.style.display = "none";
        oraculoBoton.disabled = true;
      }
    }
  }
};

// Función estatus plantarse
const plantarse = () => {
  const mensajeElemento = document.getElementById("mensaje");
  if (
    mensajeElemento !== null &&
    mensajeElemento !== undefined &&
    mensajeElemento instanceof HTMLElement
  ) {
    if (puntuacion < 2) {
      pintarMensaje("No me hagas reir");
    }
    if (puntuacion >= 2 && puntuacion < 5) {
      pintarMensaje("Has sido muy conservador");
    }
    if (puntuacion >= 5 && puntuacion < 6) {
      pintarMensaje("Te ha entrado el canguelo eh?");
    }
    if (puntuacion >= 6 && puntuacion <= 7) {
      pintarMensaje("Casi, casi...");
    }
    if (puntuacion === 7.5) {
      pintarMensaje("¡Lo has clavado!");
    }

    const oraculoBoton = document.getElementById("oraculo");
    if (
      oraculoBoton !== null &&
      oraculoBoton !== undefined &&
      oraculoBoton instanceof HTMLButtonElement
    ) {
      oraculoBoton.style.display = "inline-block";
      oraculoBoton.disabled = false;
    }
    deshabilitarBotones();
  }
};

// Función reiniciar partida
const reiniciarPartida = () => {
  puntuacion = 0;
  actualizarPuntuacion();
  const imgElement = document.getElementById("cartaActual");
  if (
    imgElement !== null &&
    imgElement !== undefined &&
    imgElement instanceof HTMLImageElement
  ) {
    imgElement.src = "assets/CARDS-back.png";
  }
  const mensajeElemento = document.getElementById("mensaje");
  if (
    mensajeElemento !== null &&
    mensajeElemento !== undefined &&
    mensajeElemento instanceof HTMLElement
  ) {
    pintarMensaje("¡Empieza una nueva partida!");
  }
  const nuevaCartaBoton = document.getElementById("nuevaCarta");
  const mePlantoBoton = document.getElementById("mePlanto");

  if (
    nuevaCartaBoton !== null &&
    nuevaCartaBoton !== undefined &&
    nuevaCartaBoton instanceof HTMLButtonElement &&
    mePlantoBoton !== null &&
    mePlantoBoton !== undefined &&
    mePlantoBoton instanceof HTMLButtonElement
  ) {
    nuevaCartaBoton.disabled = false;
    mePlantoBoton.disabled = false;
  }
  const nuevaPartidaBoton = document.getElementById("nuevaPartida");
  if (
    nuevaPartidaBoton !== null &&
    nuevaPartidaBoton !== undefined &&
    nuevaPartidaBoton instanceof HTMLButtonElement
  ) {
    nuevaPartidaBoton.disabled = true;
  }

  const oraculoBoton = document.getElementById("oraculo");
  if (
    oraculoBoton !== null &&
    oraculoBoton !== undefined &&
    oraculoBoton instanceof HTMLButtonElement
  ) {
    oraculoBoton.style.display = "none";
    oraculoBoton.disabled = true;
  }
};

// **Función Oráculo**
const oraculo = () => {
  if (puntuacion > 7.5) {
    pintarMensaje("Tu futuro no tiene solución... ¡Que le corten la cabeza!");
    mostrarCartaEspecial("perdido");
  } else {
    const aleatorio = dameNumeroAleatorio();
    const carta = dameNumeroCarta(aleatorio);
    const puntosCarta = damePuntosCarta(carta);
    const nuevaPuntuacion = puntuacion + puntosCarta;

    if (nuevaPuntuacion > 7.5) {
      pintarMensaje(
        `En tu futuro hay un ${carta}, tu puntuación sería: ${nuevaPuntuacion}. ¡Buena intuición!`
      );
    } else if (nuevaPuntuacion === 7.5) {
      pintarMensaje(
        `En tu futuro hay un ${carta}, tu puntuación sería: ${nuevaPuntuacion}. ¡Lo habrías clavado!`
      );
    } else if (nuevaPuntuacion < 7.5) {
      pintarMensaje(
        `En tu futuro hay un ${carta}, tu puntuación sería: ${nuevaPuntuacion}. ¡Eres un cobarde!`
      );
    }
    mostrarCartaEspecial("oraculo");
  }
};

// Función principal
const dameCarta = () => {
  const aleatorio = dameNumeroAleatorio();
  const carta = dameNumeroCarta(aleatorio);
  const urlCarta = dameUrlCarta(carta);
  pintarUrlCarta(urlCarta);
  const puntosCarta = damePuntosCarta(carta);
  sumarPuntos(puntosCarta);
  actualizarPuntuacion();
  pintarMensaje("Prueba tu suerte");
  comprobarPartida();
};

//Función habilitar botones
const deshabilitarBotones = () => {
  const nuevaCartaBoton = document.getElementById("nuevaCarta");
  const mePlantoBoton = document.getElementById("mePlanto");

  if (
    nuevaCartaBoton !== null &&
    nuevaCartaBoton !== undefined &&
    nuevaCartaBoton instanceof HTMLButtonElement &&
    mePlantoBoton !== null &&
    mePlantoBoton !== undefined &&
    mePlantoBoton instanceof HTMLButtonElement
    // Porqué da error poner "nuevaCartaBoton && mePlantoBoton" y tengo que ponerlos separados?
  ) {
    nuevaCartaBoton.disabled = true;
    mePlantoBoton.disabled = true;
  }

  const nuevaPartidaBoton = document.getElementById("nuevaPartida");
  if (
    nuevaPartidaBoton !== null &&
    nuevaPartidaBoton !== undefined &&
    nuevaPartidaBoton instanceof HTMLButtonElement
  ) {
    nuevaPartidaBoton.disabled = false;
  }
};

// Función botón NUEVA CARTA
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

// Función botón ME PLANTO
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

// Función botón NUEVA PARTIDA
const nuevaPartidaBoton = document.getElementById("nuevaPartida");
if (
  nuevaPartidaBoton !== null &&
  nuevaPartidaBoton !== undefined &&
  nuevaPartidaBoton instanceof HTMLButtonElement
) {
  nuevaPartidaBoton.addEventListener("click", () => {
    reiniciarPartida();
  });
}

// **Función botón ORÁCULO**
const oraculoBoton = document.getElementById("oraculo");
if (
  oraculoBoton !== null &&
  oraculoBoton !== undefined &&
  oraculoBoton instanceof HTMLButtonElement
) {
  oraculoBoton.style.display = "none";
  oraculoBoton.addEventListener("click", () => {
    oraculo();
  });
}
