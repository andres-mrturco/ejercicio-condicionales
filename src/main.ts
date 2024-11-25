let puntuacion: number = 0;

const dameNumeroAleatorio = () => {
  return Math.floor(Math.random() * 10);
};

const dameNumeroCarta = (numeroAleatorio: number) => {
  if (numeroAleatorio > 7) {
    return numeroAleatorio + 2;
  }

  return numeroAleatorio;
};

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

const damePuntosCarta = (carta: number) => {
  if (carta > 7) {
    return 0.5;
  }

  return carta;
};

const sumarPuntos = (puntos: number) => {
  return puntos + puntuacion;
};

const actualizarPuntuacion = (puntosActuales: number) => {
  puntuacion = puntosActuales;
};

const comprobarPartida = () => {
  if (puntuacion === 7.5) {
    console.log("Has ganado");
  }

  if (puntuacion > 7.5) {
    console.log("Has perdido");
  }
};

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
