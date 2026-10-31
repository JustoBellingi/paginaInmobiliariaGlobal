// Fotos de cada localidad para las tarjetas de la portada.
// Las de Wikimedia Commons tienen licencia libre que pide citar al autor: el crédito se muestra en la portada.
// Para usar una foto propia: ponerla en public/localidades/<nombre>.jpg, usar src "/localidades/<nombre>.jpg"
// y borrar su `credito`.
export type FotoLocalidad = {
  src: string;
  credito?: { autor: string; licencia: string; url: string };
};

const commons = (ruta: string) => `https://thumb.wikimedia.org/wikipedia/commons/thumb/${ruta}`;

export const fotosLocalidades: Record<string, FotoLocalidad> = {
  Posadas: {
    src: commons(
      "1/11/Costanera_de_Posadas_%28visto_desde_edificio%2C_a%C3%B1o_2025%29.jpg/1280px-Costanera_de_Posadas_%28visto_desde_edificio%2C_a%C3%B1o_2025%29.jpg",
    ),
    credito: {
      autor: "Horacio Cambeiro",
      licencia: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Costanera_de_Posadas_(visto_desde_edificio,_a%C3%B1o_2025).jpg",
    },
  },
  Oberá: {
    src: commons(
      "a/a8/DJI_Mini_3_-_Misiones_-_Ober%C3%A1_-_Vista_del_centro_%281%29.jpg/1280px-DJI_Mini_3_-_Misiones_-_Ober%C3%A1_-_Vista_del_centro_%281%29.jpg",
    ),
    credito: {
      autor: "Loco085",
      licencia: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:DJI_Mini_3_-_Misiones_-_Ober%C3%A1_-_Vista_del_centro_(1).jpg",
    },
  },
  Garupá: {
    src: commons("a/a3/Costanera_de_Garup%C3%A1_otro_sector.jpg/1280px-Costanera_de_Garup%C3%A1_otro_sector.jpg"),
    credito: {
      autor: "Caballero Facundo Miguel",
      licencia: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Costanera_de_Garup%C3%A1_otro_sector.jpg",
    },
  },
  "Puerto Iguazú": {
    src: commons(
      "7/72/Triple_frontera_monument_%28Argentina%29_%C2%B7_Hito_Tres_Fronteras_%28Puerto_Iguaz%C3%BA%2C_Argentina%29.jpg/1280px-Triple_frontera_monument_%28Argentina%29_%C2%B7_Hito_Tres_Fronteras_%28Puerto_Iguaz%C3%BA%2C_Argentina%29.jpg",
    ),
    credito: {
      autor: "Horacio Cambeiro",
      licencia: "CC BY 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Triple_frontera_monument_(Argentina)_%C2%B7_Hito_Tres_Fronteras_(Puerto_Iguaz%C3%BA,_Argentina).jpg",
    },
  },
  Eldorado: {
    src: commons("9/9f/Siesta_en_la_Costanera_%2815341733178%29.jpg/1280px-Siesta_en_la_Costanera_%2815341733178%29.jpg"),
    credito: {
      autor: "Papa Pic",
      licencia: "CC0",
      url: "https://commons.wikimedia.org/wiki/File:Siesta_en_la_Costanera_(15341733178).jpg",
    },
  },
};
