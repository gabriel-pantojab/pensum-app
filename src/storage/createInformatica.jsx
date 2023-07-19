export const Course = {
  name: "Licenciatura en Ingeniería Informática",
  totalSubjects: 48,
  approvedSubjects: 0,
  pendingSubjects: 48,
  inProgressSubjects: 0,
};

export const Levels = [
  {
    id: 1,
    name: "A",
    progress: 0,
    inProgress: 0,
    subjects: [
      {
        id: 1,
        name: "INGLES I",
        state: "No Cursada",
      },
      {
        id: 2,
        name: "FISICA GENERAL",
        state: "No Cursada",
      },
      {
        id: 3,
        name: "ALGEBRA I",
        state: "No Cursada",
      },
      {
        id: 4,
        name: "CALCULO I",
        state: "No Cursada",
      },
      {
        id: 5,
        name: "INTRODUCCION A LA PROGRAMACION",
        state: "No Cursada",
      },
    ],
  },

  {
    id: 2,
    name: "B",
    progress: 0,
    inProgress: 0,
    subjects: [
      {
        id: 1,
        name: "INGLES II",
        state: "No Cursada",
      },
      {
        id: 2,
        name: "ALGEBRA II",
        state: "No Cursada",
      },
      {
        id: 3,
        name: "CALCULO II",
        state: "No Cursada",
      },
      {
        id: 4,

        name: "ELEM. DE PROGRAMACION Y ESTRUC. DE DATOS",
        state: "No Cursada",
      },
      {
        id: 5,
        name: "ARQUITECTURA DE COMPUTADORAS I",
        state: "No Cursada",
      },
      {
        id: 6,
        name: "PROGRAMACION",
        state: "No Cursada",
      },
    ],
  },
  {
    id: 3,
    name: "C",
    progress: 0,
    inProgress: 0,
    subjects: [
      {
        id: 1,
        name: "CALCULO NUMERICO",
        state: "No Cursada",
      },
      {
        id: 2,
        name: "LOGICA",
        state: "No Cursada",
      },
      {
        id: 3,
        name: "ARQUITECTURA DE COMPUTADORAS II",
        state: "No Cursada",
      },
      {
        id: 4,
        name: "TEORIA DE GRAFOS",
        state: "No Cursada",
      },
      {
        id: 5,
        name: "ORGANIZACION Y METODOS",
        state: "No Cursada",
      },
      {
        id: 6,
        name: "METODOS Y TECNICAS DE PROGRAMACION",
        state: "No Cursada",
      },
    ],
  },
  {
    id: 4,
    name: "D",
    progress: 0,
    inProgress: 0,
    subjects: [
      {
        id: 1,
        name: "PROBABILIDAD Y ESTADISTICA",
        state: "No Cursada",
      },
      {
        id: 2,
        name: "TALLER DE PROGRAMACION EN BAJO NIVEL",
        state: "No Cursada",
      },
      {
        id: 3,
        name: "BASE DE DATOS I",
        state: "No Cursada",
      },
      {
        id: 4,
        name: "SISTEMAS DE INFORMACION I",
        state: "No Cursada",
      },
      {
        id: 5,
        name: "PROGRAMACION FUNCIONAL",
        state: "No Cursada",
      },
      {
        id: 6,
        name: "ALGORITMOS AVANZADOS",
        state: "No Cursada",
      },
    ],
  },
  {
    id: 5,
    name: "E",
    progress: 0,
    inProgress: 0,
    subjects: [
      { id: 1, name: "BASE DE DATOS II", state: "No Cursada" },
      { id: 2, name: "TALLER DE SISTEMAS OPERATIVOS", state: "No Cursada" },
      { id: 3, name: "SISTEMAS DE INFORMACION II", state: "No Cursada" },
      {
        id: 4,
        name: "TEORIA DE AUTOMATAS Y LENG. FORMALES",
        state: "No Cursada",
      },
      { id: 5, name: "GRAFICACION POR COMPUTADORA", state: "No Cursada" },
      { id: 6, name: "INTELIGENCIA ARTIFICIAL I", state: "No Cursada" },
    ],
  },
  {
    id: 6,
    name: "F",
    progress: 0,
    inProgress: 0,
    subjects: [
      { id: 1, name: "INGENIERIA DE SOFTWARE", state: "No Cursada" },
      { id: 2, name: "REDES DE COMPUTADORAS", state: "No Cursada" },
      {
        id: 3,
        name: "ESTRUCTURA Y SEMANTICA DE LENGUAJES DE",
        state: "No Cursada",
      },
      { id: 4, name: "TALLER DE BASE DE DATOS", state: "No Cursada" },
      { id: 5, name: "INTELIGENCIA ARTIFICIAL II", state: "No Cursada" },
      { id: 6, name: "PROGRAMACION WEB", state: "No Cursada" },
    ],
  },
  {
    id: 7,
    name: "G",
    progress: 0,
    inProgress: 0,
    subjects: [
      { id: 1, name: "SIMULACION DE SISTEMAS", state: "No Cursada" },
      {
        id: 2,
        name: "TALLER DE INGENIERIA DE SOFTWARE",
        state: "No Cursada",
      },
      { id: 3, name: "ARQUITECTURA DE SOFTWARE", state: "No Cursada" },
      { id: 4, name: "INTERACCION HUMANO COMPUTADOR", state: "No Cursada" },
      { id: 5, name: "TECNOLOGIA REDES AVANZADAS", state: "No Cursada" },
    ],
  },
  {
    id: 8,
    name: "H",
    progress: 0,
    inProgress: 0,
    subjects: [
      {
        id: 1,
        name: "APLICACION DE SISTEMAS OPERATIVOS",
        state: "No Cursada",
      },
      {
        id: 2,
        name: "EVALUACION Y AUDITORIA DE SISTEMAS",
        state: "No Cursada",
      },
      { id: 3, name: "TALLER DE GRADO I", state: "No Cursada" },
    ],
  },
  {
    id: 9,
    name: "I",
    progress: 0,
    inProgress: 0,
    subjects: [
      { id: 1, name: "PROCESOS AGILES", state: "No Cursada" },
      {
        id: 2,
        name: "ENTORNOS VIRTUALES DE APRENDIZAJE",
        state: "No Cursada",
      },
      { id: 3, name: "SERVICIOS TELEMATICOS", state: "No Cursada" },
      { id: 4, name: "RECONOCIMIENTO DE VOZ", state: "No Cursada" },
      { id: 5, name: "SEGURIDAD DE SISTEMAS", state: "No Cursada" },
      { id: 6, name: "TALLER DE GRADO II", state: "No Cursada" },
      { id: 7, name: "CLOUD COMPUTING", state: "No Cursada" },
      {
        id: 8,
        name: "BUSINESS INTELLIGENCE Y BIG DATA",
        state: "No Cursada",
      },
      {
        id: 9,
        name: "CIENCIA DE DATOS Y MACHINE LEARNING",
        state: "No Cursada",
      },
    ],
  },
];

export const express = [
  {
    nombreNivel: "A",
    materias: [
      {
        sis: "1803001",
        nombreMateria: "INGLES I",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "CESPEDES GUIZADA MARIA BENITA",
              horarios: [
                { dia: "MA", hora: "8:15-9:45", aula: "693B" },
                { dia: "VI", hora: "8:15-9:45", aula: "691D" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
          {
            grupo: "2",
            titular: {
              docente: "CESPEDES GUIZADA MARIA BENITA",
              horarios: [
                { dia: "MA", hora: "11:15-12:45", aula: "690D" },
                { dia: "VI", hora: "9:45-11:15", aula: "690D" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
          {
            grupo: "3",
            titular: {
              docente: "PEETERS ILONAA MAGDA LENA",
              horarios: [
                { dia: "LU", hora: "6:45-8:15", aula: "690E" },
                { dia: "MI", hora: "6:45-8:15", aula: "692H" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
          {
            grupo: "4",
            titular: {
              docente: "GRILO SALVATIERRA MARIA ESTELA",
              horarios: [
                { dia: "MA", hora: "15:45-17:15", aula: "684A" },
                { dia: "VI", hora: "14:15-15:45", aula: "692E" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
          {
            grupo: "5",
            titular: {
              docente: "CESPEDES GUIZADA MARIA BENITA",
              horarios: [
                { dia: "JU", hora: "9:45-11:15", aula: "692F" },
                { dia: "VI", hora: "11:15-12:45", aula: "691B" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
      {
        sis: "2006063",
        nombreMateria: "FISICA GENERAL",
        grupos: [
          {
            grupo: "B",
            titular: {
              docente: "VALENZUELA MIRANDA ROBERTO",
              horarios: [
                { dia: "MA", hora: "11:15-12:45", aula: "651" },
                { dia: "MI", hora: "14:15-15:45", aula: "692C" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
          {
            grupo: "B1",
            titular: {
              empty: true,
            },
            auxiliar: {
              nombre: "MOREIRA CALIZAYA RENE",
              horarios: [{ dia: "MI", hora: "8:15-9:45", aula: "620" }],
            },
          },
          {
            grupo: "B2",
            titular: {
              empty: true,
            },
            auxiliar: {
              nombre: "RUIZ UCUMARI IVAN",
              horarios: [{ dia: "LU", hora: "9:45-11:15", aula: "620" }],
            },
          },
          {
            grupo: "B3",
            titular: {
              empty: true,
            },
            auxiliar: {
              nombre: "ORDONEZ SALVATIERRA MIGUEL ANGEL",
              horarios: [{ dia: "MA", hora: "15:45-17:15", aula: "620" }],
            },
          },
          {
            grupo: "B4",
            titular: {
              empty: true,
            },
            auxiliar: {
              nombre: "RUIZ UCUMARI IVAN",
              horarios: [{ dia: "MA", hora: "9:45-11:15", aula: "621" }],
            },
          },
          {
            grupo: "B5",
            titular: {
              empty: true,
            },
            auxiliar: {
              nombre: "TERRAZAS VARGAS JUAN CARLOS",
              horarios: [{ dia: "MI", hora: "11:15-12:45", aula: "620" }],
            },
          },
          {
            grupo: "B6",
            titular: {
              empty: true,
            },
            auxiliar: {
              nombre: "TERRAZAS VARGAS JUAN CARLOS",
              horarios: [{ dia: "JU", hora: "11:15-12:45", aula: "620" }],
            },
          },
        ],
      },
      {
        sis: "2008019",
        nombreMateria: "ALGEBRA I",
        grupos: [
          {
            grupo: "8",
            titular: {
              docente: "LEON ROMERO GUALBERTO",
              horarios: [
                { dia: "MI", hora: "11:15-12:45", aula: "691C" },
                { dia: "VI", hora: "14:15-15:45", aula: "692C" },
              ],
            },
            auxiliar: {
              nombre: "PENALOZA PACHECO JUAN PABLO",
              horarios: [{ dia: "JU", hora: "6:45-8:15", aula: "625D" }],
            },
          },
          {
            grupo: "10",
            titular: {
              docente: "RODRIGUEZ SEJAS JUAN ANTONIO",
              horarios: [
                { dia: "MA", hora: "9:45-11:15", aula: "661" },
                { dia: "MI", hora: "8:15-9:45", aula: "692C" },
                { dia: "VI", hora: "9:45-11:15", aula: "692F" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
          {
            grupo: "15",
            titular: {
              docente: "CARRASCO CALVO ALVARO HERNANDO",
              horarios: [
                { dia: "LU", hora: "17:15-18:45", aula: "642" },
                { dia: "MA", hora: "15:45-17:15", aula: "617" },
                { dia: "MI", hora: "14:15-15:45", aula: "607" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
      {
        sis: "2008054",
        nombreMateria: "CALCULO I",
        grupos: [
          {
            grupo: "10",
            titular: {
              docente: "GONZALES CARTAGENA LUCIO",
              horarios: [
                { dia: "MI", hora: "6:45-8:15", aula: "642" },
                { dia: "VI", hora: "6:45-8:15", aula: "642" },
                { dia: "SA", hora: "9:45-11:15", aula: "617C" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
          {
            grupo: "11",
            titular: {
              docente: "ROJAS ZURITA RAMIRO",
              horarios: [
                { dia: "LU", hora: "6:45-8:15", aula: "622" },
                { dia: "MA", hora: "8:15-9:45", aula: "690B" },
                { dia: "JU", hora: "8:15-9:45", aula: "692E" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
      {
        sis: "2010010",
        nombreMateria: "INTRODUCCION A LA PROGRAMACION",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "SALAZAR SERRUDO CARLA",
              horarios: [
                { dia: "JU", hora: "11:15-12:45", aula: "691A" },
                { dia: "VI", hora: "11:15-12:45", aula: "691E" },
              ],
            },
            auxiliar: {
              nombre: "SALAZAR CHOQUE JORGE",
              horarios: [{ dia: "VI", hora: "17:15-18:45", aula: "623" }],
            },
          },
          {
            grupo: "2",
            titular: {
              docente: "BLANCO COCA LETICIA",
              horarios: [
                { dia: "MA", hora: "17:15-18:45", aula: "617" },
                { dia: "JU", hora: "15:45-17:15", aula: "624" },
              ],
            },
            auxiliar: {
              nombre: "CUENCA VARGAS FERNANDO",
              horarios: [{ dia: "MI", hora: "17:15-18:45", aula: "691B" }],
            },
          },
          {
            grupo: "3",
            titular: {
              docente: "USTARIZ VARGAS HERNAN",
              horarios: [
                { dia: "LU", hora: "12:45-14:15", aula: "607" },
                { dia: "MI", hora: "12:45-14:15", aula: "612" },
              ],
            },
            auxiliar: {
              nombre: "VELIZ ESCOBAR JOSUE DEMETRIO",
              horarios: [{ dia: "VI", hora: "12:45-14:15", aula: "624" }],
            },
          },
          {
            grupo: "4",
            titular: {
              docente: "VILLARROEL TAPIA HENRY FRANK",
              horarios: [
                { dia: "MA", hora: "15:45-17:15", aula: "690D" },
                { dia: "MI", hora: "15:45-17:15", aula: "612" },
              ],
            },
            auxiliar: {
              nombre: "AUXILIAR POR DESIGNAR",
              horarios: [{ dia: "SA", hora: "9:45-11:15", aula: "691D" }],
            },
          },
          {
            grupo: "5",
            titular: {
              docente: "MONTANO QUIROGA VICTOR HUGO",
              horarios: [
                { dia: "MI", hora: "9:45-11:15", aula: "690B" },
                { dia: "JU", hora: "9:45-11:15", aula: "623" },
              ],
            },
            auxiliar: {
              nombre: "CUENCA VARGAS FERNANDO",
              horarios: [{ dia: "SA", hora: "9:45-11:15", aula: "691C" }],
            },
          },
          {
            grupo: "6",
            titular: {
              docente: "SALAZAR SERRUDO CARLA",
              horarios: [
                { dia: "MI", hora: "17:15-18:45", aula: "692D" },
                { dia: "JU", hora: "17:15-18:45", aula: "691E" },
              ],
            },
            auxiliar: {
              nombre: "VELIZ ESCOBAR JOSUE DEMETRIO",
              horarios: [{ dia: "SA", hora: "8:15-9:45", aula: "661" }],
            },
          },
          {
            grupo: "7",
            titular: {
              docente: "FLORES VILLARROEL CORINA",
              horarios: [
                { dia: "JU", hora: "8:15-9:45", aula: "691F" },
                { dia: "VI", hora: "8:15-9:45", aula: "691E" },
              ],
            },
            auxiliar: {
              nombre: "SALAZAR CHOQUE JORGE",
              horarios: [{ dia: "MA", hora: "12:45-14:15", aula: "690C" }],
            },
          },
          {
            grupo: "10",
            titular: {
              docente: "COSTAS JAUREGUI VLADIMIR ABEL",
              horarios: [
                { dia: "MA", hora: "9:45-11:15", aula: "692D" },
                { dia: "JU", hora: "9:45-11:15", aula: "691A" },
              ],
            },
            auxiliar: {
              nombre: "AUXILIAR POR DESIGNAR",
              horarios: [{ dia: "JU", hora: "14:15-15:45", aula: "691B" }],
            },
          },
        ],
      },
    ],
  },
  {
    nombreNivel: "B",
    materias: [
      {
        sis: "1803002",
        nombreMateria: "INGLES II",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "PEETERS ILONAA MAGDA LENA",
              horarios: [
                { dia: "MA", hora: "9:45-11:15", aula: "691B" },
                { dia: "JU", hora: "6:45-8:15", aula: "661" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
          {
            grupo: "2",
            titular: {
              docente: "PEETERS ILONAA MAGDA LENA",
              horarios: [
                { dia: "JU", hora: "9:45-11:15", aula: "691B" },
                { dia: "VI", hora: "9:45-11:15", aula: "691C" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
          {
            grupo: "3",
            titular: {
              docente: "PEETERS ILONAA MAGDA LENA",
              horarios: [
                { dia: "MA", hora: "6:45-8:15", aula: "692G" },
                { dia: "VI", hora: "6:45-8:15", aula: "692H" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
      {
        sis: "2008022",
        nombreMateria: "ALGEBRA II",
        grupos: [
          {
            grupo: "6",
            titular: {
              docente: "TENORIO PANUNI DORIAN WILFREDO",
              horarios: [
                { dia: "JU", hora: "15:45-17:15", aula: "660" },
                { dia: "VI", hora: "17:15-18:45", aula: "691A" },
              ],
            },
            auxiliar: {
              nombre: "QUISPE MEDRANO REINALDO",
              horarios: [{ dia: "SA", hora: "9:45-11:15", aula: "692B" }],
            },
          },
          {
            grupo: "8",
            titular: {
              docente: "OMONTE OJALVO JOSE ROBERTO",
              horarios: [
                { dia: "LU", hora: "11:15-12:45", aula: "624" },
                { dia: "JU", hora: "14:15-15:45", aula: "692B" },
              ],
            },
            auxiliar: {
              nombre: "PACHECO YPURANI CLAUDIA",
              horarios: [{ dia: "MA", hora: "14:15-15:45", aula: "692D" }],
            },
          },
          {
            grupo: "5A",
            titular: {
              docente: "SALINAS PERICON WALTER OSCAR",
              horarios: [
                { dia: "LU", hora: "17:15-18:45", aula: "690E" },
                { dia: "MA", hora: "17:15-18:45", aula: "692A" },
                { dia: "JU", hora: "18:45-20:15", aula: "690E" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
      {
        sis: "2008056",
        nombreMateria: "CALCULO II",
        grupos: [
          {
            grupo: "6",
            titular: {
              docente: "TERRAZAS LOBO JUAN",
              horarios: [
                { dia: "LU", hora: "8:15-9:45", aula: "692F" },
                { dia: "JU", hora: "14:15-15:45", aula: "693A" },
              ],
            },
            auxiliar: {
              nombre: "UGARTE GALARZA MARLENE",
              horarios: [{ dia: "MI", hora: "14:15-15:45", aula: "625C" }],
            },
          },
          {
            grupo: "12",
            titular: {
              docente: "MARTINEZ MAIDA AMILCAR SAUL",
              horarios: [
                { dia: "MA", hora: "9:45-11:15", aula: "612" },
                { dia: "MI", hora: "14:15-15:45", aula: "624" },
              ],
            },
            auxiliar: {
              nombre: "ARANIBAR THONY INARA VALENTINA",
              horarios: [{ dia: "VI", hora: "12:45-14:15", aula: "617C" }],
            },
          },
        ],
      },
      {
        sis: "2010003",
        nombreMateria: "ELEM. DE PROGRAMACION Y ESTRUC. DE DATOS",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "TORRICO BASCOPE ROSEMARY",
              horarios: [
                { dia: "MA", hora: "8:15-9:45", aula: "617C" },
                { dia: "VI", hora: "8:15-9:45", aula: "690C" },
              ],
            },
            auxiliar: {
              nombre: "VELIZ ESCOBAR JOSUE DEMETRIO",
              horarios: [{ dia: "MI", hora: "11:15-12:45", aula: "651" }],
            },
          },
          {
            grupo: "2",
            titular: {
              docente: "BLANCO COCA LETICIA",
              horarios: [
                { dia: "LU", hora: "12:45-14:15", aula: "623" },
                { dia: "JU", hora: "12:45-14:15", aula: "624" },
              ],
            },
            auxiliar: {
              nombre: "VELIZ ESCOBAR JOSUE DEMETRIO",
              horarios: [{ dia: "MI", hora: "15:45-17:15", aula: "623" }],
            },
          },
          {
            grupo: "3",
            titular: {
              docente: "BLANCO COCA LETICIA",
              horarios: [
                { dia: "MA", hora: "18:45-20:15", aula: "622" },
                { dia: "MI", hora: "6:45-8:15", aula: "691C" },
              ],
            },
            auxiliar: {
              nombre: "VELIZ ESCOBAR JOSUE DEMETRIO",
              horarios: [{ dia: "JU", hora: "12:45-14:15", aula: "690C" }],
            },
          },
          {
            grupo: "5",
            titular: {
              docente: "Por Designar ...",
              horarios: [
                { dia: "MA", hora: "14:15-15:45", aula: "607" },
                { dia: "JU", hora: "14:15-15:45", aula: "693D" },
              ],
            },
            auxiliar: {
              nombre: "AUXILIAR POR DESIGNAR",
              horarios: [{ dia: "LU", hora: "12:45-14:15", aula: "691B" }],
            },
          },
        ],
      },
      {
        sis: "2010013",
        nombreMateria: "ARQUITECTURA DE COMPUTADORAS I",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "ACHA PEREZ SAMUEL",
              horarios: [
                { dia: "JU", hora: "6:45-8:15", aula: "622" },
                { dia: "SA", hora: "6:45-8:15", aula: "623" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
          {
            grupo: "2",
            titular: {
              docente: "BLANCO COCA LETICIA",
              horarios: [
                { dia: "LU", hora: "14:15-15:45", aula: "691B" },
                { dia: "JU", hora: "14:15-15:45", aula: "624" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
      {
        sis: "2010200",
        nombreMateria: "PROGRAMACION",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "TORRICO BASCOPE ROSEMARY",
              horarios: [
                { dia: "LU", hora: "11:15-12:45", aula: "INFLAB" },
                { dia: "MI", hora: "6:45-8:15", aula: "INFLAB" },
                { dia: "VI", hora: "11:15-12:45", aula: "691A" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
    ],
  },
  {
    nombreNivel: "C",
    materias: [
      {
        sis: "2008060",
        nombreMateria: "CALCULO NUMERICO",
        grupos: [
          {
            grupo: "2",
            titular: {
              docente: "JUCHANI BAZUALDO DEMETRIO",
              horarios: [
                { dia: "LU", hora: "14:15-15:45", aula: "622" },
                { dia: "MA", hora: "11:15-12:45", aula: "693A" },
                { dia: "JU", hora: "6:45-8:15", aula: "693D" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
          {
            grupo: "3",
            titular: {
              docente: "ZABALAGA MONTANO OSCAR A.",
              horarios: [
                { dia: "LU", hora: "8:15-9:45", aula: "644" },
                { dia: "MA", hora: "15:45-17:15", aula: "692H" },
                { dia: "MI", hora: "15:45-17:15", aula: "690D" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
      {
        sis: "2008140",
        nombreMateria: "LOGICA",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "HOEPFNER REYNOLDS MAURICIO",
              horarios: [
                { dia: "LU", hora: "6:45-8:15", aula: "617C" },
                { dia: "MA", hora: "6:45-8:15", aula: "607" },
              ],
            },
            auxiliar: {
              nombre: "PADILLA TORRICO PAUL ANDRES",
              horarios: [{ dia: "JU", hora: "14:15-15:45", aula: "690B" }],
            },
          },
        ],
      },
      {
        sis: "2010014",
        nombreMateria: "ARQUITECTURA DE COMPUTADORAS II",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "AGREDA CORRALES LUIS ROBERTO",
              horarios: [
                { dia: "MA", hora: "15:45-17:15", aula: "691F" },
                { dia: "JU", hora: "17:15-18:45", aula: "692C" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
      {
        sis: "2010037",
        nombreMateria: "TEORIA DE GRAFOS",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "MONTOYA BURGOS YONY RICHARD",
              horarios: [
                { dia: "LU", hora: "15:45-17:15", aula: "690E" },
                { dia: "MA", hora: "15:45-17:15", aula: "690E" },
              ],
            },
            auxiliar: {
              nombre: "PANOZO VILLARROEL ROSIMAR",
              horarios: [{ dia: "JU", hora: "12:45-14:15", aula: "690B" }],
            },
          },
        ],
      },
      {
        sis: "2010041",
        nombreMateria: "ORGANIZACION Y METODOS",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "CAMACHO DEL CASTILLO INDIRA",
              horarios: [
                { dia: "MA", hora: "8:15-9:45", aula: "690E" },
                { dia: "JU", hora: "8:15-9:45", aula: "660" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
      {
        sis: "2010206",
        nombreMateria: "METODOS Y TECNICAS DE PROGRAMACION",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "FLORES VILLARROEL CORINA",
              horarios: [
                { dia: "LU", hora: "11:15-12:45", aula: "652" },
                { dia: "MA", hora: "8:15-9:45", aula: "625D" },
                { dia: "MI", hora: "8:15-9:45", aula: "652" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
          {
            grupo: "2",
            titular: {
              docente: "MANZUR SORIA CARLOS B.",
              horarios: [
                { dia: "LU", hora: "6:45-8:15", aula: "INFLAB" },
                { dia: "VI", hora: "6:45-8:15", aula: "651" },
                { dia: "SA", hora: "6:45-8:15", aula: "651" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
          {
            grupo: "5",
            titular: {
              docente: "MONTOYA BURGOS YONY RICHARD",
              horarios: [
                { dia: "LU", hora: "18:45-20:15", aula: "INFLAB" },
                { dia: "MA", hora: "18:45-20:15", aula: "692G" },
                { dia: "MI", hora: "15:45-17:15", aula: "690E" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
    ],
  },
  {
    nombreNivel: "D",
    materias: [
      {
        sis: "2008029",
        nombreMateria: "PROBABILIDAD Y ESTADISTICA",
        grupos: [
          {
            grupo: "3",
            titular: {
              docente: "DELGADILLO COSSIO DAVID ALFREDO",
              horarios: [
                { dia: "LU", hora: "17:15-18:45", aula: "617B" },
                { dia: "MA", hora: "17:15-18:45", aula: "692C" },
                { dia: "MI", hora: "17:15-18:45", aula: "617B" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
          {
            grupo: "4",
            titular: {
              docente: "OMONTE OJALVO JOSE ROBERTO",
              horarios: [
                { dia: "LU", hora: "9:45-11:15", aula: "612" },
                { dia: "MA", hora: "12:45-14:15", aula: "624" },
                { dia: "VI", hora: "9:45-11:15", aula: "642" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
      {
        sis: "2010005",
        nombreMateria: "TALLER DE PROGRAMACION EN BAJO NIVEL",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "MONTECINOS CHOQUE MARCO ANTONIO",
              horarios: [
                { dia: "MA", hora: "15:45-17:15", aula: "691B" },
                { dia: "MI", hora: "15:45-17:15", aula: "661" },
                { dia: "JU", hora: "15:45-17:15", aula: "691E" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
      {
        sis: "2010015",
        nombreMateria: "BASE DE DATOS I",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "Por Designar ...",
              horarios: [
                { dia: "MA", hora: "12:45-14:15", aula: "691B" },
                { dia: "MI", hora: "12:45-14:15", aula: "691B" },
                { dia: "JU", hora: "12:45-14:15", aula: "693D" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
          {
            grupo: "2",
            titular: {
              docente: "CALANCHA NAVIA BORIS",
              horarios: [
                { dia: "MA", hora: "15:45-17:15", aula: "651" },
                { dia: "MI", hora: "15:45-17:15", aula: "660" },
                { dia: "JU", hora: "15:45-17:15", aula: "692G" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
      {
        sis: "2010018",
        nombreMateria: "SISTEMAS DE INFORMACION I",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "SALAZAR SERRUDO CARLA",
              horarios: [
                { dia: "MI", hora: "15:45-17:15", aula: "692B" },
                { dia: "JU", hora: "9:45-11:15", aula: "607" },
                { dia: "VI", hora: "9:45-11:15", aula: "691E" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
          {
            grupo: "2",
            titular: {
              docente: "SALAZAR SERRUDO CARLA",
              horarios: [
                { dia: "LU", hora: "17:15-18:45", aula: "691B" },
                { dia: "MA", hora: "17:15-18:45", aula: "617B" },
                { dia: "MI", hora: "11:15-12:45", aula: "693A" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
      {
        sis: "2010038",
        nombreMateria: "PROGRAMACION FUNCIONAL",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "APARICIO YUJA TATIANA",
              horarios: [
                { dia: "LU", hora: "8:15-9:45", aula: "625D" },
                { dia: "MA", hora: "14:15-15:45", aula: "690D" },
                { dia: "MI", hora: "6:45-8:15", aula: "612" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
      {
        sis: "2010197",
        nombreMateria: "ALGORITMOS AVANZADOS",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "BLANCO COCA LETICIA",
              horarios: [
                { dia: "MA", hora: "6:45-8:15", aula: "691C" },
                { dia: "JU", hora: "6:45-8:15", aula: "690D" },
                { dia: "VI", hora: "6:45-8:15", aula: "693D" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
    ],
  },
  {
    nombreNivel: "E",
    materias: [
      {
        sis: "2010016",
        nombreMateria: "BASE DE DATOS II",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "APARICIO YUJA TATIANA",
              horarios: [
                { dia: "LU", hora: "6:45-8:15", aula: "617B" },
                { dia: "MA", hora: "6:45-8:15", aula: "691F" },
                { dia: "MI", hora: "8:15-9:45", aula: "617B" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
          {
            grupo: "2",
            titular: {
              docente: "APARICIO YUJA TATIANA",
              horarios: [
                { dia: "LU", hora: "12:45-14:15", aula: "692B" },
                { dia: "MA", hora: "8:15-9:45", aula: "INFLAB" },
                { dia: "MI", hora: "9:45-11:15", aula: "612" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
      {
        sis: "2010017",
        nombreMateria: "TALLER DE SISTEMAS OPERATIVOS",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "ORELLANA ARAOZ JORGE WALTER",
              horarios: [
                { dia: "LU", hora: "6:45-8:15", aula: "692F" },
                { dia: "MI", hora: "14:15-15:45", aula: "691A" },
                { dia: "VI", hora: "14:15-15:45", aula: "691C" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
          {
            grupo: "2",
            titular: {
              docente: "ORELLANA ARAOZ JORGE WALTER",
              horarios: [
                { dia: "LU", hora: "8:15-9:45", aula: "690E" },
                { dia: "MI", hora: "6:45-8:15", aula: "692B" },
                { dia: "VI", hora: "8:15-9:45", aula: "624" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
          {
            grupo: "3",
            titular: {
              docente: "CUSSI NICOLAS GROVER HUMBERTO",
              horarios: [
                { dia: "MA", hora: "18:45-20:15", aula: "691E" },
                { dia: "JU", hora: "20:15-21:45", aula: "691A" },
                { dia: "SA", hora: "8:15-9:45", aula: "INFLAB" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
      {
        sis: "2010022",
        nombreMateria: "SISTEMAS DE INFORMACION II",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "FLORES SOLIZ JUAN MARCELO",
              horarios: [
                { dia: "MA", hora: "6:45-8:15", aula: "690E" },
                { dia: "MI", hora: "6:45-8:15", aula: "690D" },
                { dia: "VI", hora: "6:45-8:15", aula: "AUDMEMI" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
          {
            grupo: "2",
            titular: {
              docente: "JALDIN ROSALES K. ROLANDO",
              horarios: [
                { dia: "MI", hora: "8:15-9:45", aula: "690E" },
                { dia: "JU", hora: "9:45-11:15", aula: "690E" },
                { dia: "VI", hora: "15:45-17:15", aula: "690B" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
      {
        sis: "2010040",
        nombreMateria: "TEORIA DE AUTOMATAS Y LENG. FORMALES",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "MONTANO QUIROGA VICTOR HUGO",
              horarios: [
                { dia: "LU", hora: "9:45-11:15", aula: "692H" },
                { dia: "MA", hora: "9:45-11:15", aula: "617C" },
                { dia: "VI", hora: "8:15-9:45", aula: "652" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
      {
        sis: "2010042",
        nombreMateria: "GRAFICACION POR COMPUTADORA",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "CALANCHA NAVIA BORIS",
              horarios: [
                { dia: "LU", hora: "17:15-18:45", aula: "AUDMEMI" },
                { dia: "MA", hora: "17:15-18:45", aula: "INFLAB" },
                { dia: "MI", hora: "17:15-18:45", aula: "INFLAB" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
      {
        sis: "2010201",
        nombreMateria: "INTELIGENCIA ARTIFICIAL I",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "GARCIA PEREZ CARMEN ROSA",
              horarios: [
                { dia: "MA", hora: "11:15-12:45", aula: "692D" },
                { dia: "MI", hora: "9:45-11:15", aula: "692A" },
                { dia: "JU", hora: "11:15-12:45", aula: "692D" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
          {
            grupo: "2",
            titular: {
              docente: "RODRIGUEZ BILBAO ERIKA PATRICIA",
              horarios: [
                { dia: "LU", hora: "18:45-20:15", aula: "625D" },
                { dia: "MA", hora: "15:45-17:15", aula: "692B" },
                { dia: "MI", hora: "17:15-18:45", aula: "617" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
    ],
  },
  {
    nombreNivel: "F",
    materias: [
      {
        sis: "2010020",
        nombreMateria: "INGENIERIA DE SOFTWARE",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "CAMACHO DEL CASTILLO INDIRA",
              horarios: [
                { dia: "MA", hora: "6:45-8:15", aula: "651" },
                { dia: "MI", hora: "6:45-8:15", aula: "652" },
                { dia: "JU", hora: "6:45-8:15", aula: "692D" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
          {
            grupo: "2",
            titular: {
              docente: "TORRICO BASCOPE ROSEMARY",
              horarios: [
                { dia: "MA", hora: "11:15-12:45", aula: "690B" },
                { dia: "MI", hora: "9:45-11:15", aula: "INFLAB" },
                { dia: "VI", hora: "9:45-11:15", aula: "691D" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
      {
        sis: "2010047",
        nombreMateria: "REDES DE COMPUTADORAS",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "ORELLANA ARAOZ JORGE WALTER",
              horarios: [
                { dia: "LU", hora: "14:15-15:45", aula: "692B" },
                { dia: "MI", hora: "9:45-11:15", aula: "693A" },
                { dia: "VI", hora: "9:45-11:15", aula: "692C" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
          {
            grupo: "2",
            titular: {
              docente: "ORELLANA ARAOZ JORGE WALTER",
              horarios: [
                { dia: "LU", hora: "9:45-11:15", aula: "691B" },
                { dia: "MA", hora: "9:45-11:15", aula: "693A" },
                { dia: "JU", hora: "9:45-11:15", aula: "692G" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
      {
        sis: "2010049",
        nombreMateria: "ESTRUCTURA Y SEMANTICA DE LENGUAJES DE",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "ROMERO RODRIGUEZ PATRICIA",
              horarios: [
                { dia: "LU", hora: "11:15-12:45", aula: "617B" },
                { dia: "MA", hora: "9:45-11:15", aula: "625C" },
                { dia: "JU", hora: "11:15-12:45", aula: "692H" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
      {
        sis: "2010053",
        nombreMateria: "TALLER DE BASE DE DATOS",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "CALANCHA NAVIA BORIS",
              horarios: [
                { dia: "LU", hora: "15:45-17:15", aula: "690B" },
                { dia: "VI", hora: "17:15-18:45", aula: "690B" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
          {
            grupo: "2",
            titular: {
              docente: "APARICIO YUJA TATIANA",
              horarios: [
                { dia: "MA", hora: "18:45-20:15", aula: "692H" },
                { dia: "MI", hora: "18:45-20:15", aula: "690C" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
          {
            grupo: "3",
            titular: {
              docente: "FLORES SOLIZ JUAN MARCELO",
              horarios: [
                { dia: "LU", hora: "6:45-8:15", aula: "690B" },
                { dia: "JU", hora: "6:45-8:15", aula: "690B" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
          {
            grupo: "4",
            titular: {
              docente: "CALANCHA NAVIA BORIS",
              horarios: [
                { dia: "JU", hora: "17:15-18:45", aula: "690C" },
                { dia: "VI", hora: "15:45-17:15", aula: "690D" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
      {
        sis: "2010202",
        nombreMateria: "INTELIGENCIA ARTIFICIAL II",
        grupos: [
          {
            grupo: "2",
            titular: {
              docente: "GARCIA PEREZ CARMEN ROSA",
              horarios: [
                { dia: "MA", hora: "12:45-14:15", aula: "691C" },
                { dia: "MI", hora: "11:15-12:45", aula: "690B" },
                { dia: "JU", hora: "12:45-14:15", aula: "691A" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
      {
        sis: "2010203",
        nombreMateria: "PROGRAMACION WEB",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "COSTAS JAUREGUI VLADIMIR ABEL",
              horarios: [
                { dia: "MA", hora: "8:15-9:45", aula: "691B" },
                { dia: "MI", hora: "9:45-11:15", aula: "692C" },
                { dia: "JU", hora: "8:15-9:45", aula: "691B" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
    ],
  },
  {
    nombreNivel: "G",
    materias: [
      {
        sis: "2010019",
        nombreMateria: "SIMULACION DE SISTEMAS",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "VILLARROEL TAPIA HENRY FRANK",
              horarios: [
                { dia: "LU", hora: "15:45-17:15", aula: "692C" },
                { dia: "MA", hora: "17:15-18:45", aula: "691D" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
      {
        sis: "2010024",
        nombreMateria: "TALLER DE INGENIERIA DE SOFTWARE",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "FLORES VILLARROEL CORINA",
              horarios: [
                { dia: "LU", hora: "9:45-11:15", aula: "690D" },
                { dia: "MA", hora: "9:45-11:15", aula: "690E" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
          {
            grupo: "2",
            titular: {
              docente: "BLANCO COCA LETICIA",
              horarios: [
                { dia: "MA", hora: "8:15-9:45", aula: "651" },
                { dia: "MI", hora: "8:15-9:45", aula: "INFLAB" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
      {
        sis: "2010100",
        nombreMateria: "ARQUITECTURA DE SOFTWARE",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "AZERO ALCOCER PABLO",
              horarios: [
                { dia: "LU", hora: "14:15-15:45", aula: "625C" },
                { dia: "JU", hora: "6:45-8:15", aula: "690C" },
                { dia: "VI", hora: "15:45-17:15", aula: "692D" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
      {
        sis: "2010204",
        nombreMateria: "INTERACCION HUMANO COMPUTADOR",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "FLORES VILLARROEL CORINA",
              horarios: [
                { dia: "MA", hora: "6:45-8:15", aula: "690D" },
                { dia: "JU", hora: "18:45-20:15", aula: "690E" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
      {
        sis: "2010205",
        nombreMateria: "TECNOLOGIA REDES AVANZADAS",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "MONTECINOS CHOQUE MARCO ANTONIO",
              horarios: [
                { dia: "MA", hora: "14:15-15:45", aula: "691D" },
                { dia: "MI", hora: "14:15-15:45", aula: "661" },
                { dia: "JU", hora: "14:15-15:45", aula: "691E" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
    ],
  },
  {
    nombreNivel: "H",
    materias: [
      {
        sis: "2010035",
        nombreMateria: "APLICACION DE SISTEMAS OPERATIVOS",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "CUSSI NICOLAS GROVER HUMBERTO",
              horarios: [
                { dia: "VI", hora: "18:45-20:15", aula: "693D" },
                { dia: "SA", hora: "9:45-11:15", aula: "691B" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
          {
            grupo: "2",
            titular: {
              docente: "CUSSI NICOLAS GROVER HUMBERTO",
              horarios: [
                { dia: "LU", hora: "12:45-14:15", aula: "693B" },
                { dia: "JU", hora: "18:45-20:15", aula: "690B" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
      {
        sis: "2010102",
        nombreMateria: "EVALUACION Y AUDITORIA DE SISTEMAS",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "ROMERO RODRIGUEZ PATRICIA",
              horarios: [
                { dia: "MA", hora: "11:15-12:45", aula: "691F" },
                { dia: "MI", hora: "8:15-9:45", aula: "690B" },
                { dia: "JU", hora: "8:15-9:45", aula: "690C" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
          {
            grupo: "2",
            titular: {
              docente: "VILLARROEL NOVILLO JIMMY",
              horarios: [
                { dia: "LU", hora: "11:15-12:45", aula: "692H" },
                { dia: "MA", hora: "8:15-9:45", aula: "691D" },
                { dia: "MI", hora: "12:45-14:15", aula: "690B" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
      {
        sis: "2010214",
        nombreMateria: "TALLER DE GRADO I",
        grupos: [
          {
            grupo: "6",
            titular: {
              docente: "FLORES VILLARROEL CORINA",
              horarios: [
                { dia: "LU", hora: "17:15-18:45", aula: "690E" },
                { dia: "MI", hora: "11:15-12:45", aula: "692H" },
                { dia: "JU", hora: "17:15-18:45", aula: "625C" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
          {
            grupo: "7",
            titular: {
              docente: "ROMERO RODRIGUEZ PATRICIA",
              horarios: [
                { dia: "LU", hora: "9:45-11:15", aula: "617C" },
                { dia: "MI", hora: "11:15-12:45", aula: "617B" },
                { dia: "JU", hora: "9:45-11:15", aula: "690C" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
    ],
  },
  {
    nombreNivel: "I",
    materias: [
      {
        sis: "2010066",
        nombreMateria: "PROCESOS AGILES",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "AZERO ALCOCER PABLO",
              horarios: [
                { dia: "MI", hora: "14:15-15:45", aula: "692D" },
                { dia: "VI", hora: "14:15-15:45", aula: "692D" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
      {
        sis: "2010178",
        nombreMateria: "ENTORNOS VIRTUALES DE APRENDIZAJE",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "COSTAS JAUREGUI VLADIMIR ABEL",
              horarios: [
                { dia: "MI", hora: "8:15-9:45", aula: "692G" },
                { dia: "JU", hora: "11:15-12:45", aula: "690B" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
      {
        sis: "2010188",
        nombreMateria: "SERVICIOS TELEMATICOS",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "FIORILO LOZADA AMERICO",
              horarios: [
                { dia: "MA", hora: "20:15-21:45", aula: "691C" },
                { dia: "VI", hora: "20:15-21:45", aula: "691E" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
      {
        sis: "2010189",
        nombreMateria: "RECONOCIMIENTO DE VOZ",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "GARCIA PEREZ CARMEN ROSA",
              horarios: [
                { dia: "MA", hora: "9:45-11:15", aula: "692F" },
                { dia: "JU", hora: "9:45-11:15", aula: "691C" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
      {
        sis: "2010209",
        nombreMateria: "SEGURIDAD DE SISTEMAS",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "ANTEZANA CAMACHO MARCELO",
              horarios: [
                { dia: "LU", hora: "11:15-12:45", aula: "660" },
                { dia: "MA", hora: "11:15-12:45", aula: "INFLAB" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
      {
        sis: "2010215",
        nombreMateria: "TALLER DE GRADO II",
        grupos: [
          {
            grupo: "2",
            titular: {
              docente: "MONTANO QUIROGA VICTOR HUGO",
              horarios: [
                { dia: "JU", hora: "8:15-9:45", aula: "INFDEP" },
                { dia: "VI", hora: "9:45-11:15", aula: "INFLAB" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
          {
            grupo: "3",
            titular: {
              docente: "GARCIA PEREZ CARMEN ROSA",
              horarios: [
                { dia: "MI", hora: "8:15-9:45", aula: "INFDEP" },
                { dia: "JU", hora: "8:15-9:45", aula: "690E" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
          {
            grupo: "4",
            titular: {
              docente: "ROMERO RODRIGUEZ PATRICIA",
              horarios: [
                { dia: "MA", hora: "8:15-9:45", aula: "690C" },
                { dia: "MI", hora: "14:15-15:45", aula: "617C" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
      {
        sis: "2010216",
        nombreMateria: "CLOUD COMPUTING",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "MONTOYA BURGOS YONY RICHARD",
              horarios: [
                { dia: "LU", hora: "17:15-18:45", aula: "INFLAB" },
                { dia: "MA", hora: "17:15-18:45", aula: "625C" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
      {
        sis: "2010217",
        nombreMateria: "BUSINESS INTELLIGENCE Y BIG DATA",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "ESCALERA FERNANDEZ DAVID",
              horarios: [
                { dia: "SA", hora: "8:15-9:45", aula: "693B" },
                { dia: "SA", hora: "9:45-11:15", aula: "692A" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
      {
        sis: "2010218",
        nombreMateria: "CIENCIA DE DATOS Y MACHINE LEARNING",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "RODRIGUEZ BILBAO ERIKA PATRICIA",
              horarios: [
                { dia: "LU", hora: "17:15-18:45", aula: "693D" },
                { dia: "VI", hora: "17:15-18:45", aula: "690E" },
              ],
            },
            auxiliar: {
              empty: true,
            },
          },
        ],
      },
    ],
  },
];

export const expressS = [
  {
    nombreNivel: "A",
    materias: [
      {
        sis: "1803001",
        nombreMateria: "INGLES I",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "CESPEDES GUIZADA MARIA BENITA",
              horarios: [
                { dia: "MA", hora: "8:15-9:45", aula: "693B" },
                { dia: "VI", hora: "8:15-9:45", aula: "691D" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "2",
            titular: {
              docente: "CESPEDES GUIZADA MARIA BENITA",
              horarios: [
                { dia: "MA", hora: "11:15-12:45", aula: "690D" },
                { dia: "VI", hora: "9:45-11:15", aula: "690D" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "3",
            titular: {
              docente: "PEETERS ILONAA MAGDA LENA",
              horarios: [
                { dia: "LU", hora: "6:45-8:15", aula: "690E" },
                { dia: "MI", hora: "6:45-8:15", aula: "692H" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "4",
            titular: {
              docente: "GRILO SALVATIERRA MARIA ESTELA",
              horarios: [
                { dia: "MA", hora: "15:45-17:15", aula: "684A" },
                { dia: "VI", hora: "14:15-15:45", aula: "692E" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "5",
            titular: {
              docente: "CESPEDES GUIZADA MARIA BENITA",
              horarios: [
                { dia: "JU", hora: "9:45-11:15", aula: "692F" },
                { dia: "VI", hora: "11:15-12:45", aula: "691B" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2006063",
        nombreMateria: "FISICA GENERAL",
        grupos: [
          {
            grupo: "C",
            titular: {
              docente: "FLORES FLORES FREDDY",
              horarios: [
                { dia: "LU", hora: "14:15-15:45", aula: "617" },
                { dia: "VI", hora: "17:15-18:45", aula: "693B" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "C1",
            titular: { empty: true },
            auxiliar: {
              nombre: "SHITIKOV GAGARINA GALINA",
              horarios: [{ dia: "MA", hora: "11:15-12:45", aula: "620" }],
            },
          },
          {
            grupo: "C2",
            titular: { empty: true },
            auxiliar: {
              nombre: "TERRAZAS VARGAS JUAN CARLOS",
              horarios: [{ dia: "VI", hora: "8:15-9:45", aula: "620" }],
            },
          },
          {
            grupo: "C3",
            titular: { empty: true },
            auxiliar: {
              nombre: "MOREIRA CALIZAYA RENE",
              horarios: [{ dia: "JU", hora: "8:15-9:45", aula: "620" }],
            },
          },
          {
            grupo: "C4",
            titular: { empty: true },
            auxiliar: {
              nombre: "CASTRO LAZARTE CECILIA BEATRIZ",
              horarios: [{ dia: "LU", hora: "14:15-15:45", aula: "620" }],
            },
          },
          {
            grupo: "C5",
            titular: { empty: true },
            auxiliar: {
              nombre: "CASTRO LAZARTE CECILIA BEATRIZ",
              horarios: [{ dia: "MA", hora: "17:15-18:45", aula: "621" }],
            },
          },
          {
            grupo: "C6",
            titular: { empty: true },
            auxiliar: {
              nombre: "CASTRO LAZARTE CECILIA BEATRIZ",
              horarios: [{ dia: "LU", hora: "18:45-20:15", aula: "621" }],
            },
          },
          {
            grupo: "C7",
            titular: { empty: true },
            auxiliar: {
              nombre: "FLORES FLORES FREDDY",
              horarios: [{ dia: "MA", hora: "14:15-15:45", aula: "620" }],
            },
          },
          {
            grupo: "D",
            titular: {
              docente: "FUENTES MIRANDA IVAN",
              horarios: [
                { dia: "MI", hora: "6:45-8:15", aula: "691B" },
                { dia: "VI", hora: "18:45-20:15", aula: "693A" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "D1",
            titular: { empty: true },
            auxiliar: {
              nombre: "UGARTE CEJAS FELIX",
              horarios: [{ dia: "LU", hora: "6:45-8:15", aula: "621" }],
            },
          },
          {
            grupo: "D2",
            titular: { empty: true },
            auxiliar: {
              nombre: "LUCANO LUCANO MARCELO JAVIER",
              horarios: [{ dia: "JU", hora: "14:15-15:45", aula: "621" }],
            },
          },
          {
            grupo: "D3",
            titular: { empty: true },
            auxiliar: {
              nombre: "LUCANO LUCANO MARCELO JAVIER",
              horarios: [{ dia: "JU", hora: "15:45-17:15", aula: "621" }],
            },
          },
          {
            grupo: "D4",
            titular: { empty: true },
            auxiliar: {
              nombre: "TERRAZAS VARGAS JUAN CARLOS",
              horarios: [{ dia: "LU", hora: "11:15-12:45", aula: "620" }],
            },
          },
          {
            grupo: "D5",
            titular: { empty: true },
            auxiliar: {
              nombre: "GUZMAN SAAVEDRA ROCIO",
              horarios: [{ dia: "JU", hora: "11:15-12:45", aula: "621" }],
            },
          },
          {
            grupo: "D6",
            titular: { empty: true },
            auxiliar: {
              nombre: "MOREIRA CALIZAYA RENE",
              horarios: [{ dia: "MA", hora: "11:15-12:45", aula: "621" }],
            },
          },
          {
            grupo: "D7",
            titular: { empty: true },
            auxiliar: {
              nombre: "SHITIKOV GAGARINA GALINA",
              horarios: [{ dia: "MA", hora: "8:15-9:45", aula: "620" }],
            },
          },
          {
            grupo: "E",
            titular: {
              docente: "MOREIRA CALIZAYA RENE",
              horarios: [
                { dia: "LU", hora: "6:45-8:15", aula: "691A" },
                { dia: "VI", hora: "9:45-11:15", aula: "612" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "E1",
            titular: { empty: true },
            auxiliar: {
              nombre: "SHITIKOV GAGARINA GALINA",
              horarios: [{ dia: "MA", hora: "9:45-11:15", aula: "620" }],
            },
          },
          {
            grupo: "E2",
            titular: { empty: true },
            auxiliar: {
              nombre: "DAVALOS BROZOVIC JORGE",
              horarios: [{ dia: "MI", hora: "9:45-11:15", aula: "620" }],
            },
          },
          {
            grupo: "E3",
            titular: { empty: true },
            auxiliar: {
              nombre: "ORDONEZ SALVATIERRA MIGUEL ANGEL",
              horarios: [{ dia: "LU", hora: "15:45-17:15", aula: "621" }],
            },
          },
          {
            grupo: "E4",
            titular: { empty: true },
            auxiliar: {
              nombre: "VASQUEZ CARRILLO MICHAEL HUASCAR",
              horarios: [{ dia: "MA", hora: "15:45-17:15", aula: "621" }],
            },
          },
          {
            grupo: "E5",
            titular: { empty: true },
            auxiliar: {
              nombre: "GUZMAN SAAVEDRA ROCIO",
              horarios: [{ dia: "JU", hora: "9:45-11:15", aula: "620" }],
            },
          },
          {
            grupo: "E6",
            titular: { empty: true },
            auxiliar: {
              nombre: "DAVALOS BROZOVIC JORGE",
              horarios: [{ dia: "VI", hora: "15:45-17:15", aula: "620" }],
            },
          },
          {
            grupo: "E7",
            titular: { empty: true },
            auxiliar: {
              nombre: "DAVALOS BROZOVIC JORGE",
              horarios: [{ dia: "VI", hora: "17:15-18:45", aula: "618" }],
            },
          },
          {
            grupo: "E8",
            titular: { empty: true },
            auxiliar: {
              nombre: "VASQUEZ CARRILLO MICHAEL HUASCAR",
              horarios: [{ dia: "VI", hora: "9:45-11:15", aula: "620" }],
            },
          },
        ],
      },
      {
        sis: "2008019",
        nombreMateria: "ALGEBRA I",
        grupos: [
          {
            grupo: "5",
            titular: {
              docente: "TABORGA ACHA FIDEL",
              horarios: [
                { dia: "MI", hora: "14:15-15:45", aula: "617" },
                { dia: "VI", hora: "8:15-9:45", aula: "617C" },
              ],
            },
            auxiliar: {
              nombre: "TICLLA MAMANI IVAN",
              horarios: [{ dia: "SA", hora: "11:15-12:45", aula: "692B" }],
            },
          },
          {
            grupo: "6",
            titular: {
              docente: "PATINO TITO RONALD EDGAR",
              horarios: [
                { dia: "LU", hora: "9:45-11:15", aula: "693A" },
                { dia: "MA", hora: "9:45-11:15", aula: "692C" },
                { dia: "MI", hora: "9:45-11:15", aula: "617C" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "8",
            titular: {
              docente: "LEON ROMERO GUALBERTO",
              horarios: [
                { dia: "MI", hora: "11:15-12:45", aula: "691C" },
                { dia: "VI", hora: "14:15-15:45", aula: "692C" },
              ],
            },
            auxiliar: {
              nombre: "PENALOZA PACHECO JUAN PABLO",
              horarios: [{ dia: "JU", hora: "6:45-8:15", aula: "625D" }],
            },
          },
          {
            grupo: "9",
            titular: {
              docente: "TORRES JURADO HANS BYRON",
              horarios: [
                { dia: "LU", hora: "14:15-15:45", aula: "693A" },
                { dia: "MA", hora: "15:45-17:15", aula: "660" },
              ],
            },
            auxiliar: {
              nombre: "MENDEZ LOZA MARIEL ANGELES",
              horarios: [{ dia: "JU", hora: "12:45-14:15", aula: "661" }],
            },
          },
          {
            grupo: "10",
            titular: {
              docente: "RODRIGUEZ SEJAS JUAN ANTONIO",
              horarios: [
                { dia: "MA", hora: "9:45-11:15", aula: "661" },
                { dia: "MI", hora: "8:15-9:45", aula: "692C" },
                { dia: "VI", hora: "9:45-11:15", aula: "692F" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "14",
            titular: {
              docente: "LEON ROMERO GUALBERTO",
              horarios: [
                { dia: "MA", hora: "15:45-17:15", aula: "692E" },
                { dia: "VI", hora: "6:45-8:15", aula: "617C" },
              ],
            },
            auxiliar: {
              nombre: "LOVERA MAMANI MARIA BETHY",
              horarios: [{ dia: "SA", hora: "8:15-9:45", aula: "691E" }],
            },
          },
        ],
      },
      {
        sis: "2008054",
        nombreMateria: "CALCULO I",
        grupos: [
          {
            grupo: "7",
            titular: {
              docente: "RODRIGUEZ SEJAS JUAN ANTONIO",
              horarios: [
                { dia: "MI", hora: "12:45-14:15", aula: "661" },
                { dia: "JU", hora: "9:45-11:15", aula: "660" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "8",
            titular: {
              docente: "OMONTE OJALVO JOSE GIL",
              horarios: [
                { dia: "MI", hora: "6:45-8:15", aula: "617C" },
                { dia: "VI", hora: "6:45-8:15", aula: "691C" },
              ],
            },
            auxiliar: {
              nombre: "FLORES COCA DENNIS",
              horarios: [{ dia: "SA", hora: "11:15-12:45", aula: "692E" }],
            },
          },
          {
            grupo: "9",
            titular: {
              docente: "JUCHANI BAZUALDO DEMETRIO",
              horarios: [
                { dia: "MI", hora: "12:45-14:15", aula: "690D" },
                { dia: "JU", hora: "11:15-12:45", aula: "622" },
              ],
            },
            auxiliar: {
              nombre: "FRIAS CRUZ ROSALIA",
              horarios: [{ dia: "LU", hora: "12:45-14:15", aula: "651" }],
            },
          },
          {
            grupo: "10",
            titular: {
              docente: "GONZALES CARTAGENA LUCIO",
              horarios: [
                { dia: "MI", hora: "6:45-8:15", aula: "642" },
                { dia: "VI", hora: "6:45-8:15", aula: "642" },
                { dia: "SA", hora: "9:45-11:15", aula: "617C" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "11",
            titular: {
              docente: "ROJAS ZURITA RAMIRO",
              horarios: [
                { dia: "LU", hora: "6:45-8:15", aula: "622" },
                { dia: "MA", hora: "8:15-9:45", aula: "690B" },
                { dia: "JU", hora: "8:15-9:45", aula: "692E" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "12",
            titular: {
              docente: "DELGADILLO COSSIO DAVID ALFREDO",
              horarios: [
                { dia: "LU", hora: "18:45-20:15", aula: "682B" },
                { dia: "MA", hora: "18:45-20:15", aula: "625D" },
                { dia: "MI", hora: "18:45-20:15", aula: "691D" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "17",
            titular: {
              docente: "OMONTE OJALVO JOSE ROBERTO",
              horarios: [
                { dia: "MA", hora: "11:15-12:45", aula: "642" },
                { dia: "MI", hora: "9:45-11:15", aula: "691C" },
              ],
            },
            auxiliar: {
              nombre: "UGARTE GALARZA MARLENE",
              horarios: [{ dia: "VI", hora: "9:45-11:15", aula: "692H" }],
            },
          },
        ],
      },
      {
        sis: "2010010",
        nombreMateria: "INTRODUCCION A LA PROGRAMACION",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "SALAZAR SERRUDO CARLA",
              horarios: [
                { dia: "JU", hora: "11:15-12:45", aula: "691A" },
                { dia: "VI", hora: "11:15-12:45", aula: "691E" },
              ],
            },
            auxiliar: {
              nombre: "SALAZAR CHOQUE JORGE",
              horarios: [{ dia: "VI", hora: "17:15-18:45", aula: "623" }],
            },
          },
          {
            grupo: "2",
            titular: {
              docente: "BLANCO COCA LETICIA",
              horarios: [
                { dia: "MA", hora: "17:15-18:45", aula: "617" },
                { dia: "JU", hora: "15:45-17:15", aula: "624" },
              ],
            },
            auxiliar: {
              nombre: "CUENCA VARGAS FERNANDO",
              horarios: [{ dia: "MI", hora: "17:15-18:45", aula: "691B" }],
            },
          },
          {
            grupo: "3",
            titular: {
              docente: "USTARIZ VARGAS HERNAN",
              horarios: [
                { dia: "LU", hora: "12:45-14:15", aula: "607" },
                { dia: "MI", hora: "12:45-14:15", aula: "612" },
              ],
            },
            auxiliar: {
              nombre: "VELIZ ESCOBAR JOSUE DEMETRIO",
              horarios: [{ dia: "VI", hora: "12:45-14:15", aula: "624" }],
            },
          },
          {
            grupo: "4",
            titular: {
              docente: "VILLARROEL TAPIA HENRY FRANK",
              horarios: [
                { dia: "MA", hora: "15:45-17:15", aula: "690D" },
                { dia: "MI", hora: "15:45-17:15", aula: "612" },
              ],
            },
            auxiliar: {
              nombre: "AUXILIAR POR DESIGNAR",
              horarios: [{ dia: "SA", hora: "9:45-11:15", aula: "691D" }],
            },
          },
          {
            grupo: "5",
            titular: {
              docente: "MONTANO QUIROGA VICTOR HUGO",
              horarios: [
                { dia: "MI", hora: "9:45-11:15", aula: "690B" },
                { dia: "JU", hora: "9:45-11:15", aula: "623" },
              ],
            },
            auxiliar: {
              nombre: "CUENCA VARGAS FERNANDO",
              horarios: [{ dia: "SA", hora: "9:45-11:15", aula: "691C" }],
            },
          },
          {
            grupo: "6",
            titular: {
              docente: "SALAZAR SERRUDO CARLA",
              horarios: [
                { dia: "MI", hora: "17:15-18:45", aula: "692D" },
                { dia: "JU", hora: "17:15-18:45", aula: "691E" },
              ],
            },
            auxiliar: {
              nombre: "VELIZ ESCOBAR JOSUE DEMETRIO",
              horarios: [{ dia: "SA", hora: "8:15-9:45", aula: "661" }],
            },
          },
          {
            grupo: "7",
            titular: {
              docente: "FLORES VILLARROEL CORINA",
              horarios: [
                { dia: "JU", hora: "8:15-9:45", aula: "691F" },
                { dia: "VI", hora: "8:15-9:45", aula: "691E" },
              ],
            },
            auxiliar: {
              nombre: "SALAZAR CHOQUE JORGE",
              horarios: [{ dia: "MA", hora: "12:45-14:15", aula: "690C" }],
            },
          },
          {
            grupo: "10",
            titular: {
              docente: "COSTAS JAUREGUI VLADIMIR ABEL",
              horarios: [
                { dia: "MA", hora: "9:45-11:15", aula: "692D" },
                { dia: "JU", hora: "9:45-11:15", aula: "691A" },
              ],
            },
            auxiliar: {
              nombre: "AUXILIAR POR DESIGNAR",
              horarios: [{ dia: "JU", hora: "14:15-15:45", aula: "691B" }],
            },
          },
        ],
      },
      {
        sis: "2010140",
        nombreMateria: "METODOLOGIA INVESTIGACION Y TEC",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "ROMERO RODRIGUEZ PATRICIA",
              horarios: [
                { dia: "LU", hora: "8:15-9:45", aula: "691C" },
                { dia: "MI", hora: "9:45-11:15", aula: "691B" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "2",
            titular: {
              docente: "FLORES VILLARROEL CORINA",
              horarios: [
                { dia: "LU", hora: "8:15-9:45", aula: "691D" },
                { dia: "MI", hora: "9:45-11:15", aula: "617B" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "3",
            titular: {
              docente: "LAIME ZAPATA VALENTIN",
              horarios: [
                { dia: "LU", hora: "17:15-18:45", aula: "692D" },
                { dia: "MI", hora: "11:15-12:45", aula: "617C" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "4",
            titular: {
              docente: "VILLARROEL NOVILLO JIMMY",
              horarios: [
                { dia: "LU", hora: "8:15-9:45", aula: "642" },
                { dia: "MI", hora: "14:15-15:45", aula: "693C" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
    ],
  },
  {
    nombreNivel: "B",
    materias: [
      {
        sis: "2008022",
        nombreMateria: "ALGEBRA II",
        grupos: [
          {
            grupo: "5",
            titular: {
              docente: "TAYLOR TERRAZAS DARLONG HOWARD",
              horarios: [
                { dia: "JU", hora: "8:15-9:45", aula: "622" },
                { dia: "VI", hora: "8:15-9:45", aula: "660" },
              ],
            },
            auxiliar: {
              nombre: "CLAURE VARGAS ANDRES ALEJANDRO",
              horarios: [{ dia: "VI", hora: "9:45-11:15", aula: "651" }],
            },
          },
          {
            grupo: "6",
            titular: {
              docente: "TENORIO PANUNI DORIAN WILFREDO",
              horarios: [
                { dia: "JU", hora: "15:45-17:15", aula: "660" },
                { dia: "VI", hora: "17:15-18:45", aula: "691A" },
              ],
            },
            auxiliar: {
              nombre: "QUISPE MEDRANO REINALDO",
              horarios: [{ dia: "SA", hora: "9:45-11:15", aula: "692B" }],
            },
          },
          {
            grupo: "8",
            titular: {
              docente: "OMONTE OJALVO JOSE ROBERTO",
              horarios: [
                { dia: "LU", hora: "11:15-12:45", aula: "624" },
                { dia: "JU", hora: "14:15-15:45", aula: "692B" },
              ],
            },
            auxiliar: {
              nombre: "PACHECO YPURANI CLAUDIA",
              horarios: [{ dia: "MA", hora: "14:15-15:45", aula: "692D" }],
            },
          },
        ],
      },
      {
        sis: "2008056",
        nombreMateria: "CALCULO II",
        grupos: [
          {
            grupo: "6",
            titular: {
              docente: "TERRAZAS LOBO JUAN",
              horarios: [
                { dia: "LU", hora: "8:15-9:45", aula: "692F" },
                { dia: "JU", hora: "14:15-15:45", aula: "693A" },
              ],
            },
            auxiliar: {
              nombre: "UGARTE GALARZA MARLENE",
              horarios: [{ dia: "MI", hora: "14:15-15:45", aula: "625C" }],
            },
          },
          {
            grupo: "7",
            titular: {
              docente: "CATARI RIOS RAUL",
              horarios: [
                { dia: "LU", hora: "8:15-9:45", aula: "622" },
                { dia: "MA", hora: "9:45-11:15", aula: "607" },
                { dia: "MI", hora: "9:45-11:15", aula: "693B" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "6A",
            titular: {
              docente: "BUSTILLOS VARGAS ALEX ISRRAEL",
              horarios: [
                { dia: "LU", hora: "15:45-17:15", aula: "661" },
                { dia: "JU", hora: "15:45-17:15", aula: "642" },
                { dia: "VI", hora: "15:45-17:15", aula: "622" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "7A",
            titular: {
              docente: "VALLEJO CAMACHO MARCO ANTONIO",
              horarios: [
                { dia: "LU", hora: "9:45-11:15", aula: "625C" },
                { dia: "MI", hora: "11:15-12:45", aula: "692C" },
              ],
            },
            auxiliar: {
              nombre: "ARANIBAR THONY INARA VALENTINA",
              horarios: [{ dia: "VI", hora: "11:15-12:45", aula: "692H" }],
            },
          },
        ],
      },
      {
        sis: "2008057",
        nombreMateria: "MATEMATICA DISCRETA",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "FERNANDEZ RAMOS DAVID",
              horarios: [
                { dia: "MI", hora: "17:15-18:45", aula: "642" },
                { dia: "JU", hora: "17:15-18:45", aula: "622" },
                { dia: "VI", hora: "17:15-18:45", aula: "691D" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "2",
            titular: {
              docente: "DELGADILLO COSSIO DAVID ALFREDO",
              horarios: [
                { dia: "LU", hora: "20:15-21:45", aula: "623" },
                { dia: "MA", hora: "20:15-21:45", aula: "612" },
                { dia: "MI", hora: "20:15-21:45", aula: "624" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2010003",
        nombreMateria: "ELEM. DE PROGRAMACION Y ESTRUC. DE DATOS",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "TORRICO BASCOPE ROSEMARY",
              horarios: [
                { dia: "MA", hora: "8:15-9:45", aula: "617C" },
                { dia: "VI", hora: "8:15-9:45", aula: "690C" },
              ],
            },
            auxiliar: {
              nombre: "VELIZ ESCOBAR JOSUE DEMETRIO",
              horarios: [{ dia: "MI", hora: "11:15-12:45", aula: "651" }],
            },
          },
          {
            grupo: "2",
            titular: {
              docente: "BLANCO COCA LETICIA",
              horarios: [
                { dia: "LU", hora: "12:45-14:15", aula: "623" },
                { dia: "JU", hora: "12:45-14:15", aula: "624" },
              ],
            },
            auxiliar: {
              nombre: "VELIZ ESCOBAR JOSUE DEMETRIO",
              horarios: [{ dia: "MI", hora: "15:45-17:15", aula: "623" }],
            },
          },
          {
            grupo: "3",
            titular: {
              docente: "BLANCO COCA LETICIA",
              horarios: [
                { dia: "MA", hora: "18:45-20:15", aula: "622" },
                { dia: "MI", hora: "6:45-8:15", aula: "691C" },
              ],
            },
            auxiliar: {
              nombre: "VELIZ ESCOBAR JOSUE DEMETRIO",
              horarios: [{ dia: "JU", hora: "12:45-14:15", aula: "690C" }],
            },
          },
          {
            grupo: "5",
            titular: {
              docente: "Por Designar ...",
              horarios: [
                { dia: "MA", hora: "14:15-15:45", aula: "607" },
                { dia: "JU", hora: "14:15-15:45", aula: "693D" },
              ],
            },
            auxiliar: {
              nombre: "AUXILIAR POR DESIGNAR",
              horarios: [{ dia: "LU", hora: "12:45-14:15", aula: "691B" }],
            },
          },
        ],
      },
      {
        sis: "2010013",
        nombreMateria: "ARQUITECTURA DE COMPUTADORAS I",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "ACHA PEREZ SAMUEL",
              horarios: [
                { dia: "JU", hora: "6:45-8:15", aula: "622" },
                { dia: "SA", hora: "6:45-8:15", aula: "623" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "2",
            titular: {
              docente: "BLANCO COCA LETICIA",
              horarios: [
                { dia: "LU", hora: "14:15-15:45", aula: "691B" },
                { dia: "JU", hora: "14:15-15:45", aula: "624" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "3",
            titular: {
              docente: "AGREDA CORRALES LUIS ROBERTO",
              horarios: [
                { dia: "LU", hora: "11:15-12:45", aula: "692A" },
                { dia: "MI", hora: "12:45-14:15", aula: "617" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
    ],
  },
  {
    nombreNivel: "C",
    materias: [
      {
        sis: "2008058",
        nombreMateria: "ECUACIONES DIFERENCIALES",
        grupos: [
          {
            grupo: "4",
            titular: {
              docente: "TAYLOR TERRAZAS DARLONG HOWARD",
              horarios: [
                { dia: "LU", hora: "9:45-11:15", aula: "651" },
                { dia: "MA", hora: "8:15-9:45", aula: "692C" },
              ],
            },
            auxiliar: {
              nombre: "CHUCA CONDO LUIS ALBERTO",
              horarios: [{ dia: "LU", hora: "20:15-21:45", aula: "651" }],
            },
          },
          {
            grupo: "3A",
            titular: {
              docente: "CATARI RIOS RAUL",
              horarios: [
                { dia: "MI", hora: "12:45-14:15", aula: "693C" },
                { dia: "VI", hora: "9:45-11:15", aula: "623" },
                { dia: "SA", hora: "9:45-11:15", aula: "617" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2008059",
        nombreMateria: "ESTADISTICA I",
        grupos: [
          {
            grupo: "3",
            titular: {
              docente: "REVOLLO TERAN LUZ MAYA",
              horarios: [
                { dia: "MA", hora: "9:45-11:15", aula: "692G" },
                { dia: "JU", hora: "11:15-12:45", aula: "623" },
              ],
            },
            auxiliar: {
              nombre: "ROMERO COCA MIROSLAVA LINNETE",
              horarios: [{ dia: "MA", hora: "11:15-12:45", aula: "617B" }],
            },
          },
          {
            grupo: "4",
            titular: {
              docente: "SORUCO MAITA JOSE ANTONIO",
              horarios: [
                { dia: "MA", hora: "15:45-17:15", aula: "624" },
                { dia: "VI", hora: "14:15-15:45", aula: "617" },
              ],
            },
            auxiliar: {
              nombre: "ROMERO COCA MIROSLAVA LINNETE",
              horarios: [{ dia: "LU", hora: "11:15-12:45", aula: "642" }],
            },
          },
          {
            grupo: "5",
            titular: {
              docente: "OMONTE OJALVO JOSE GIL",
              horarios: [
                { dia: "LU", hora: "20:15-21:45", aula: "624" },
                { dia: "JU", hora: "8:15-9:45", aula: "690B" },
                { dia: "SA", hora: "6:45-8:15", aula: "691B" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2008060",
        nombreMateria: "CALCULO NUMERICO",
        grupos: [
          {
            grupo: "2",
            titular: {
              docente: "JUCHANI BAZUALDO DEMETRIO",
              horarios: [
                { dia: "LU", hora: "14:15-15:45", aula: "622" },
                { dia: "MA", hora: "11:15-12:45", aula: "693A" },
                { dia: "JU", hora: "6:45-8:15", aula: "693D" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "3",
            titular: {
              docente: "ZABALAGA MONTANO OSCAR A.",
              horarios: [
                { dia: "LU", hora: "8:15-9:45", aula: "644" },
                { dia: "MA", hora: "15:45-17:15", aula: "692H" },
                { dia: "MI", hora: "15:45-17:15", aula: "690D" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2010012",
        nombreMateria: "METODOS TECNICAS Y TALLER DE PROGRAMACION",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "FLORES VILLARROEL CORINA",
              horarios: [
                { dia: "LU", hora: "11:15-12:45", aula: "652" },
                { dia: "MA", hora: "8:15-9:45", aula: "625D" },
                { dia: "MI", hora: "8:15-9:45", aula: "652" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "2",
            titular: {
              docente: "MANZUR SORIA CARLOS B.",
              horarios: [
                { dia: "LU", hora: "6:45-8:15", aula: "INFLAB" },
                { dia: "VI", hora: "6:45-8:15", aula: "651" },
                { dia: "SA", hora: "6:45-8:15", aula: "651" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "3",
            titular: {
              docente: "MONTANO QUIROGA VICTOR HUGO",
              horarios: [
                { dia: "LU", hora: "11:15-12:45", aula: "625D" },
                { dia: "MA", hora: "11:15-12:45", aula: "INFLAB" },
                { dia: "JU", hora: "11:15-12:45", aula: "INFLAB" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "5",
            titular: {
              docente: "MONTOYA BURGOS YONY RICHARD",
              horarios: [
                { dia: "LU", hora: "18:45-20:15", aula: "INFLAB" },
                { dia: "MA", hora: "18:45-20:15", aula: "692G" },
                { dia: "MI", hora: "15:45-17:15", aula: "690E" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "6",
            titular: {
              docente: "VILLARROEL NOVILLO JIMMY",
              horarios: [
                { dia: "LU", hora: "9:45-11:15", aula: "INFLAB" },
                { dia: "MA", hora: "9:45-11:15", aula: "INFLAB" },
                { dia: "MI", hora: "8:15-9:45", aula: "INFLAB" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2010015",
        nombreMateria: "BASE DE DATOS I",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "Por Designar ...",
              horarios: [
                { dia: "MA", hora: "12:45-14:15", aula: "691B" },
                { dia: "MI", hora: "12:45-14:15", aula: "691B" },
                { dia: "JU", hora: "12:45-14:15", aula: "693D" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "2",
            titular: {
              docente: "CALANCHA NAVIA BORIS",
              horarios: [
                { dia: "MA", hora: "15:45-17:15", aula: "651" },
                { dia: "MI", hora: "15:45-17:15", aula: "660" },
                { dia: "JU", hora: "15:45-17:15", aula: "692G" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2010141",
        nombreMateria: "CIRCUITOS ELECTRONICOS",
        grupos: [
          {
            grupo: "2",
            titular: {
              docente: "ZAMBRANA BURGOS JHOMIL EFRAIN",
              horarios: [
                { dia: "LU", hora: "20:15-21:45", aula: "691A" },
                { dia: "SA", hora: "11:15-12:45", aula: "692A" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
    ],
  },
  {
    nombreNivel: "D",
    materias: [
      {
        sis: "2008061",
        nombreMateria: "ESTADISTICA II",
        grupos: [
          {
            grupo: "2",
            titular: {
              docente: "SORUCO MAITA JOSE ANTONIO",
              horarios: [
                { dia: "LU", hora: "9:45-11:15", aula: "623" },
                { dia: "JU", hora: "15:45-17:15", aula: "690MAT" },
              ],
            },
            auxiliar: {
              nombre: "ORDONEZ CORDOVA MIRIAN",
              horarios: [{ dia: "JU", hora: "11:15-12:45", aula: "692A" }],
            },
          },
          {
            grupo: "3",
            titular: {
              docente: "OMONTE OJALVO JOSE ROBERTO",
              horarios: [
                { dia: "LU", hora: "8:15-9:45", aula: "692B" },
                { dia: "VI", hora: "15:45-17:15", aula: "691F" },
              ],
            },
            auxiliar: {
              nombre: "ORDONEZ CORDOVA MIRIAN",
              horarios: [{ dia: "JU", hora: "18:45-20:15", aula: "693A" }],
            },
          },
        ],
      },
      {
        sis: "2010016",
        nombreMateria: "BASE DE DATOS II",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "APARICIO YUJA TATIANA",
              horarios: [
                { dia: "LU", hora: "6:45-8:15", aula: "617B" },
                { dia: "MA", hora: "6:45-8:15", aula: "691F" },
                { dia: "MI", hora: "8:15-9:45", aula: "617B" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "2",
            titular: {
              docente: "APARICIO YUJA TATIANA",
              horarios: [
                { dia: "LU", hora: "12:45-14:15", aula: "692B" },
                { dia: "MA", hora: "8:15-9:45", aula: "INFLAB" },
                { dia: "MI", hora: "9:45-11:15", aula: "612" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2010017",
        nombreMateria: "TALLER DE SISTEMAS OPERATIVOS",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "ORELLANA ARAOZ JORGE WALTER",
              horarios: [
                { dia: "LU", hora: "6:45-8:15", aula: "692F" },
                { dia: "MI", hora: "14:15-15:45", aula: "691A" },
                { dia: "VI", hora: "14:15-15:45", aula: "691C" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "2",
            titular: {
              docente: "ORELLANA ARAOZ JORGE WALTER",
              horarios: [
                { dia: "LU", hora: "8:15-9:45", aula: "690E" },
                { dia: "MI", hora: "6:45-8:15", aula: "692B" },
                { dia: "VI", hora: "8:15-9:45", aula: "624" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "3",
            titular: {
              docente: "CUSSI NICOLAS GROVER HUMBERTO",
              horarios: [
                { dia: "MA", hora: "18:45-20:15", aula: "691E" },
                { dia: "JU", hora: "20:15-21:45", aula: "691A" },
                { dia: "SA", hora: "8:15-9:45", aula: "INFLAB" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2010018",
        nombreMateria: "SISTEMAS DE INFORMACION I",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "SALAZAR SERRUDO CARLA",
              horarios: [
                { dia: "MI", hora: "15:45-17:15", aula: "692B" },
                { dia: "JU", hora: "9:45-11:15", aula: "607" },
                { dia: "VI", hora: "9:45-11:15", aula: "691E" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "2",
            titular: {
              docente: "SALAZAR SERRUDO CARLA",
              horarios: [
                { dia: "LU", hora: "17:15-18:45", aula: "691B" },
                { dia: "MA", hora: "17:15-18:45", aula: "617B" },
                { dia: "MI", hora: "11:15-12:45", aula: "693A" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2016046",
        nombreMateria: "CONTABILIDAD BASICA",
        grupos: [
          {
            grupo: "2",
            titular: {
              docente: "MEJIA URQUIETA VICTOR RAMIRO",
              horarios: [
                { dia: "JU", hora: "9:45-11:15", aula: "625C" },
                { dia: "VI", hora: "9:45-11:15", aula: "693D" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "3",
            titular: {
              docente: "ARANIBAR LA FUENTE LIGIA",
              horarios: [
                { dia: "LU", hora: "11:15-12:45", aula: "691F" },
                { dia: "MI", hora: "9:45-11:15", aula: "660" },
                { dia: "VI", hora: "11:15-12:45", aula: "692C" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2016048",
        nombreMateria: "INVESTIGACION OPERATIVA I",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "PERICON BALDERRAMA ALFREDO",
              horarios: [
                { dia: "LU", hora: "11:15-12:45", aula: "682L8IN" },
                { dia: "MA", hora: "6:45-8:15", aula: "682L8IN" },
                { dia: "MI", hora: "8:15-9:45", aula: "682L7IN" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "3",
            titular: {
              docente: "QUIROZ CHAVEZ ABDON",
              horarios: [
                { dia: "MA", hora: "11:15-12:45", aula: "692B" },
                { dia: "MI", hora: "9:45-11:15", aula: "682L8IN" },
                { dia: "JU", hora: "12:45-14:15", aula: "682L8IN" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "4",
            titular: {
              docente: "REVOLLO TERAN LUZ MAYA",
              horarios: [
                { dia: "LU", hora: "11:15-12:45", aula: "693C" },
                { dia: "MA", hora: "11:15-12:45", aula: "693C" },
                { dia: "JU", hora: "9:45-11:15", aula: "625D" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
    ],
  },
  {
    nombreNivel: "E",
    materias: [
      {
        sis: "1803002",
        nombreMateria: "INGLES II",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "PEETERS ILONAA MAGDA LENA",
              horarios: [
                { dia: "MA", hora: "9:45-11:15", aula: "691B" },
                { dia: "JU", hora: "6:45-8:15", aula: "661" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "2",
            titular: {
              docente: "PEETERS ILONAA MAGDA LENA",
              horarios: [
                { dia: "JU", hora: "9:45-11:15", aula: "691B" },
                { dia: "VI", hora: "9:45-11:15", aula: "691C" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "3",
            titular: {
              docente: "PEETERS ILONAA MAGDA LENA",
              horarios: [
                { dia: "MA", hora: "6:45-8:15", aula: "692G" },
                { dia: "VI", hora: "6:45-8:15", aula: "692H" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2010022",
        nombreMateria: "SISTEMAS DE INFORMACION II",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "FLORES SOLIZ JUAN MARCELO",
              horarios: [
                { dia: "MA", hora: "6:45-8:15", aula: "690E" },
                { dia: "MI", hora: "6:45-8:15", aula: "690D" },
                { dia: "VI", hora: "6:45-8:15", aula: "AUDMEMI" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "2",
            titular: {
              docente: "JALDIN ROSALES K. ROLANDO",
              horarios: [
                { dia: "MI", hora: "8:15-9:45", aula: "690E" },
                { dia: "JU", hora: "9:45-11:15", aula: "690E" },
                { dia: "VI", hora: "15:45-17:15", aula: "690B" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "1A",
            titular: {
              docente: "SALAZAR SERRUDO CARLA",
              horarios: [
                { dia: "LU", hora: "15:45-17:15", aula: "617B" },
                { dia: "MA", hora: "15:45-17:15", aula: "625C" },
                { dia: "VI", hora: "17:15-18:45", aula: "691E" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2010035",
        nombreMateria: "APLICACION DE SISTEMAS OPERATIVOS",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "CUSSI NICOLAS GROVER HUMBERTO",
              horarios: [
                { dia: "VI", hora: "18:45-20:15", aula: "693D" },
                { dia: "SA", hora: "9:45-11:15", aula: "691B" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "2",
            titular: {
              docente: "CUSSI NICOLAS GROVER HUMBERTO",
              horarios: [
                { dia: "LU", hora: "12:45-14:15", aula: "693B" },
                { dia: "JU", hora: "18:45-20:15", aula: "690B" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "3",
            titular: {
              docente: "AYOROA CARDOZO JOSE RICHARD",
              horarios: [
                { dia: "LU", hora: "9:45-11:15", aula: "INFLAB" },
                { dia: "MA", hora: "8:15-9:45", aula: "INFLAB" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2010053",
        nombreMateria: "TALLER DE BASE DE DATOS",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "CALANCHA NAVIA BORIS",
              horarios: [
                { dia: "LU", hora: "15:45-17:15", aula: "690B" },
                { dia: "VI", hora: "17:15-18:45", aula: "690B" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "2",
            titular: {
              docente: "APARICIO YUJA TATIANA",
              horarios: [
                { dia: "MA", hora: "18:45-20:15", aula: "692H" },
                { dia: "MI", hora: "18:45-20:15", aula: "690C" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "3",
            titular: {
              docente: "FLORES SOLIZ JUAN MARCELO",
              horarios: [
                { dia: "LU", hora: "6:45-8:15", aula: "690B" },
                { dia: "JU", hora: "6:45-8:15", aula: "690B" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "4",
            titular: {
              docente: "CALANCHA NAVIA BORIS",
              horarios: [
                { dia: "JU", hora: "17:15-18:45", aula: "690C" },
                { dia: "VI", hora: "15:45-17:15", aula: "690D" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2010142",
        nombreMateria: "SISTEMAS I",
        grupos: [
          {
            grupo: "2",
            titular: {
              docente: "FIORILO LOZADA AMERICO",
              horarios: [
                { dia: "LU", hora: "18:45-20:15", aula: "690B" },
                { dia: "VI", hora: "18:45-20:15", aula: "692C" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2016051",
        nombreMateria: "INVESTIGACION OPERATIVA II",
        grupos: [
          {
            grupo: "2",
            titular: {
              docente: "MANCHEGO CASTELLON ROBERTO JUAN",
              horarios: [
                { dia: "MI", hora: "17:15-18:45", aula: "692C" },
                { dia: "JU", hora: "17:15-18:45", aula: "692D" },
                { dia: "SA", hora: "8:15-9:45", aula: "607" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2016057",
        nombreMateria: "MERCADOTECNIA",
        grupos: [
          {
            grupo: "2",
            titular: {
              docente: "GUTIERREZ ANDRADE OSVALDO WALTER",
              horarios: [
                { dia: "LU", hora: "20:15-21:45", aula: "691E" },
                { dia: "SA", hora: "8:15-9:45", aula: "692E" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "3",
            titular: {
              docente: "SARMIENTO FRANCO ARIEL ANTONIO",
              horarios: [
                { dia: "MA", hora: "18:45-20:15", aula: "623" },
                { dia: "MI", hora: "18:45-20:15", aula: "690D" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
    ],
  },
  {
    nombreNivel: "F",
    materias: [
      {
        sis: "2010019",
        nombreMateria: "SIMULACION DE SISTEMAS",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "VILLARROEL TAPIA HENRY FRANK",
              horarios: [
                { dia: "LU", hora: "15:45-17:15", aula: "692C" },
                { dia: "MA", hora: "17:15-18:45", aula: "691D" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "2",
            titular: {
              docente: "VILLARROEL TAPIA HENRY FRANK",
              horarios: [
                { dia: "LU", hora: "18:45-20:15", aula: "690E" },
                { dia: "MA", hora: "18:45-20:15", aula: "625C" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2010020",
        nombreMateria: "INGENIERIA DE SOFTWARE",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "CAMACHO DEL CASTILLO INDIRA",
              horarios: [
                { dia: "MA", hora: "6:45-8:15", aula: "651" },
                { dia: "MI", hora: "6:45-8:15", aula: "652" },
                { dia: "JU", hora: "6:45-8:15", aula: "692D" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "2",
            titular: {
              docente: "TORRICO BASCOPE ROSEMARY",
              horarios: [
                { dia: "MA", hora: "11:15-12:45", aula: "690B" },
                { dia: "MI", hora: "9:45-11:15", aula: "INFLAB" },
                { dia: "VI", hora: "9:45-11:15", aula: "691D" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2010027",
        nombreMateria: "INTELIGENCIA ARTIFICIAL",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "GARCIA PEREZ CARMEN ROSA",
              horarios: [
                { dia: "MA", hora: "11:15-12:45", aula: "692D" },
                { dia: "MI", hora: "9:45-11:15", aula: "692A" },
                { dia: "JU", hora: "11:15-12:45", aula: "692D" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "2",
            titular: {
              docente: "RODRIGUEZ BILBAO ERIKA PATRICIA",
              horarios: [
                { dia: "LU", hora: "18:45-20:15", aula: "625D" },
                { dia: "MA", hora: "15:45-17:15", aula: "692B" },
                { dia: "MI", hora: "17:15-18:45", aula: "617" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2010047",
        nombreMateria: "REDES DE COMPUTADORAS",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "ORELLANA ARAOZ JORGE WALTER",
              horarios: [
                { dia: "LU", hora: "14:15-15:45", aula: "692B" },
                { dia: "MI", hora: "9:45-11:15", aula: "693A" },
                { dia: "VI", hora: "9:45-11:15", aula: "692C" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "2",
            titular: {
              docente: "ORELLANA ARAOZ JORGE WALTER",
              horarios: [
                { dia: "LU", hora: "9:45-11:15", aula: "691B" },
                { dia: "MA", hora: "9:45-11:15", aula: "693A" },
                { dia: "JU", hora: "9:45-11:15", aula: "692G" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2010143",
        nombreMateria: "SISTEMAS II",
        grupos: [
          {
            grupo: "2",
            titular: {
              docente: "GARCIA MOLINA JUAN RUBEN",
              horarios: [
                { dia: "MA", hora: "6:45-8:15", aula: "625D" },
                { dia: "MI", hora: "6:45-8:15", aula: "607" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2010144",
        nombreMateria: "SISTEMAS ECONOMICOS",
        grupos: [
          {
            grupo: "2",
            titular: {
              docente: "VARGAS PEREDO EMIR FELIX",
              horarios: [
                { dia: "LU", hora: "14:15-15:45", aula: "642" },
                { dia: "VI", hora: "12:45-14:15", aula: "622" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2010177",
        nombreMateria: "REDES DE NUEVA GENERACION",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "MONTOYA BURGOS YONY RICHARD",
              horarios: [
                { dia: "LU", hora: "20:15-21:45", aula: "INFLAB" },
                { dia: "MI", hora: "17:15-18:45", aula: "690E" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
    ],
  },
  {
    nombreNivel: "G",
    materias: [
      {
        sis: "2010024",
        nombreMateria: "TALLER DE INGENIERIA DE SOFTWARE",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "FLORES VILLARROEL CORINA",
              horarios: [
                { dia: "LU", hora: "9:45-11:15", aula: "690D" },
                { dia: "MA", hora: "9:45-11:15", aula: "690E" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "2",
            titular: {
              docente: "BLANCO COCA LETICIA",
              horarios: [
                { dia: "MA", hora: "8:15-9:45", aula: "651" },
                { dia: "MI", hora: "8:15-9:45", aula: "INFLAB" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "3",
            titular: {
              docente: "ESCALERA FERNANDEZ DAVID",
              horarios: [
                { dia: "LU", hora: "6:45-8:15", aula: "691B" },
                { dia: "JU", hora: "6:45-8:15", aula: "AUDIT" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "4",
            titular: {
              docente: "RODRIGUEZ BILBAO ERIKA PATRICIA",
              horarios: [
                { dia: "MA", hora: "17:15-18:45", aula: "690E" },
                { dia: "VI", hora: "15:45-17:15", aula: "692C" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2010145",
        nombreMateria: "GESTION DE CALIDAD DE SOFTWARE",
        grupos: [
          {
            grupo: "2",
            titular: {
              docente: "TORRICO BASCOPE ROSEMARY",
              horarios: [
                { dia: "MA", hora: "9:45-11:15", aula: "INFLAB" },
                { dia: "JU", hora: "8:15-9:45", aula: "INFLAB" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2010146",
        nombreMateria: "REDES AVANZADAS DE COMPUTADORAS",
        grupos: [
          {
            grupo: "2",
            titular: {
              docente: "MONTECINOS CHOQUE MARCO ANTONIO",
              horarios: [
                { dia: "MA", hora: "12:45-14:15", aula: "607" },
                { dia: "JU", hora: "12:45-14:15", aula: "692A" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2010186",
        nombreMateria: "DINAMICA DE SISTEMAS",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "ORELLANA ARAOZ JORGE WALTER",
              horarios: [
                { dia: "MA", hora: "14:15-15:45", aula: "690C" },
                { dia: "JU", hora: "6:45-8:15", aula: "690E" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2010216",
        nombreMateria: "CLOUD COMPUTING",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "MONTOYA BURGOS YONY RICHARD",
              horarios: [
                { dia: "LU", hora: "17:15-18:45", aula: "INFLAB" },
                { dia: "MA", hora: "17:15-18:45", aula: "625C" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2014087",
        nombreMateria: "ELECTROTECNIA INDUSTRIAL",
        grupos: [
          {
            grupo: "5",
            titular: {
              docente: "ACHA PEREZ SAMUEL",
              horarios: [
                { dia: "LU", hora: "6:45-8:15", aula: "692E" },
                { dia: "MI", hora: "6:45-8:15", aula: "693B" },
              ],
            },
            auxiliar: {
              nombre: "ACHA PEREZ SAMUEL",
              horarios: [
                { dia: "MA", hora: "6:45-9:00", aula: "682L3" },
                { dia: "SA", hora: "8:15-9:45", aula: "623" },
              ],
            },
          },
        ],
      },
      {
        sis: "2016092",
        nombreMateria: "PLANIFICACION Y EVALUACION DE PROYECTOS",
        grupos: [
          {
            grupo: "2",
            titular: {
              docente: "VARGAS ANTEZANA ADEMAR MARCELO",
              horarios: [
                { dia: "MA", hora: "17:15-18:45", aula: "660" },
                { dia: "MI", hora: "14:15-15:45", aula: "622" },
                { dia: "JU", hora: "9:45-11:15", aula: "690B" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
    ],
  },
  {
    nombreNivel: "H",
    materias: [
      {
        sis: "1803009",
        nombreMateria: "INGLES III",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "GRILO SALVATIERRA MARIA ESTELA",
              horarios: [
                { dia: "MA", hora: "14:15-15:45", aula: "693A" },
                { dia: "VI", hora: "15:45-17:15", aula: "693B" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2010102",
        nombreMateria: "EVALUACION Y AUDITORIA DE SISTEMAS",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "ROMERO RODRIGUEZ PATRICIA",
              horarios: [
                { dia: "MA", hora: "11:15-12:45", aula: "691F" },
                { dia: "MI", hora: "8:15-9:45", aula: "690B" },
                { dia: "JU", hora: "8:15-9:45", aula: "690C" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "2",
            titular: {
              docente: "VILLARROEL NOVILLO JIMMY",
              horarios: [
                { dia: "LU", hora: "11:15-12:45", aula: "692H" },
                { dia: "MA", hora: "8:15-9:45", aula: "691D" },
                { dia: "MI", hora: "12:45-14:15", aula: "690B" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2010116",
        nombreMateria: "TALLER DE SIMULACION DE SISTEMAS",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "VILLARROEL TAPIA HENRY FRANK",
              horarios: [
                { dia: "LU", hora: "20:15-21:45", aula: "INFDEP" },
                { dia: "MI", hora: "18:45-20:15", aula: "INFDEP" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "2",
            titular: {
              docente: "AYOROA CARDOZO JOSE RICHARD",
              horarios: [
                { dia: "LU", hora: "8:15-9:45", aula: "INFLAB" },
                { dia: "MA", hora: "9:45-11:15", aula: "INFLAB" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2010119",
        nombreMateria: "METODOL. Y PLANIF. DE PROYECTO DE GRADO",
        grupos: [
          {
            grupo: "3",
            titular: {
              docente: "JALDIN ROSALES K. ROLANDO",
              horarios: [
                { dia: "MI", hora: "9:45-11:15", aula: "690E" },
                { dia: "JU", hora: "11:15-12:45", aula: "690E" },
                { dia: "VI", hora: "8:15-9:45", aula: "690E" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "4",
            titular: {
              docente: "FIORILO LOZADA AMERICO",
              horarios: [
                { dia: "LU", hora: "20:15-21:45", aula: "692D" },
                { dia: "MA", hora: "18:45-20:15", aula: "642" },
                { dia: "MI", hora: "6:45-8:15", aula: "690C" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "5",
            titular: {
              docente: "VILLARROEL TAPIA HENRY FRANK",
              horarios: [
                { dia: "MA", hora: "20:15-21:45", aula: "INFDEP" },
                { dia: "MI", hora: "20:15-21:45", aula: "INFDEP" },
                { dia: "JU", hora: "15:45-17:15", aula: "INFDEP" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2010209",
        nombreMateria: "SEGURIDAD DE SISTEMAS",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "ANTEZANA CAMACHO MARCELO",
              horarios: [
                { dia: "LU", hora: "11:15-12:45", aula: "660" },
                { dia: "MA", hora: "11:15-12:45", aula: "INFLAB" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2010210",
        nombreMateria: "INFORMATICA FORENSE",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "ANTEZANA CAMACHO MARCELO",
              horarios: [
                { dia: "LU", hora: "8:15-9:45", aula: "INFLAB" },
                { dia: "MA", hora: "9:45-11:15", aula: "660" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2016059",
        nombreMateria: "GESTION ESTRATEGICA DE EMPRESAS",
        grupos: [
          {
            grupo: "2",
            titular: {
              docente: "GUZMAN ORELLANA GONZALO ENRIQUE",
              horarios: [
                { dia: "MA", hora: "6:45-9:45", aula: "682L6IN" },
                { dia: "MI", hora: "8:15-9:45", aula: "682L8IN" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
    ],
  },
  {
    nombreNivel: "I",
    materias: [
      {
        sis: "2010122",
        nombreMateria: "PROYECTO FINAL",
        grupos: [
          {
            grupo: "2",
            titular: {
              docente: "MONTANO QUIROGA VICTOR HUGO",
              horarios: [
                { dia: "JU", hora: "8:15-9:45", aula: "INFDEP" },
                { dia: "VI", hora: "9:45-11:15", aula: "INFLAB" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "3",
            titular: {
              docente: "GARCIA PEREZ CARMEN ROSA",
              horarios: [
                { dia: "MI", hora: "8:15-9:45", aula: "INFDEP" },
                { dia: "JU", hora: "8:15-9:45", aula: "690E" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "4",
            titular: {
              docente: "ROMERO RODRIGUEZ PATRICIA",
              horarios: [
                { dia: "MA", hora: "8:15-9:45", aula: "690C" },
                { dia: "MI", hora: "14:15-15:45", aula: "617C" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "5",
            titular: {
              docente: "VILLARROEL NOVILLO JIMMY",
              horarios: [
                { dia: "LU", hora: "14:15-15:45", aula: "INFDEP" },
                { dia: "MI", hora: "9:45-11:15", aula: "INFDEP" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2010147",
        nombreMateria: "PRACTICA EMPRESARIAL",
        grupos: [
          {
            grupo: "2",
            titular: {
              docente: "ANTEZANA CAMACHO MARCELO",
              horarios: [
                { dia: "LU", hora: "9:45-11:15", aula: "690E" },
                { dia: "MA", hora: "8:15-9:45", aula: "INFLAB" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2010178",
        nombreMateria: "ENTORNOS VIRTUALES DE APRENDIZAJE",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "COSTAS JAUREGUI VLADIMIR ABEL",
              horarios: [
                { dia: "MI", hora: "8:15-9:45", aula: "692G" },
                { dia: "JU", hora: "11:15-12:45", aula: "690B" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2010188",
        nombreMateria: "SERVICIOS TELEMATICOS",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "FIORILO LOZADA AMERICO",
              horarios: [
                { dia: "MA", hora: "20:15-21:45", aula: "691C" },
                { dia: "VI", hora: "20:15-21:45", aula: "691E" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2010189",
        nombreMateria: "RECONOCIMIENTO DE VOZ",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "GARCIA PEREZ CARMEN ROSA",
              horarios: [
                { dia: "MA", hora: "9:45-11:15", aula: "692F" },
                { dia: "JU", hora: "9:45-11:15", aula: "691C" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2010217",
        nombreMateria: "BUSINESS INTELLIGENCE Y BIG DATA",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "ESCALERA FERNANDEZ DAVID",
              horarios: [
                { dia: "SA", hora: "8:15-9:45", aula: "693B" },
                { dia: "SA", hora: "9:45-11:15", aula: "692A" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2010218",
        nombreMateria: "CIENCIA DE DATOS Y MACHINE LEARNING",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "RODRIGUEZ BILBAO ERIKA PATRICIA",
              horarios: [
                { dia: "LU", hora: "17:15-18:45", aula: "693D" },
                { dia: "VI", hora: "17:15-18:45", aula: "690E" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2016021",
        nombreMateria: "PLANIF. Y CONTROL DE LA PRODUCCION I",
        grupos: [
          {
            grupo: "3",
            titular: {
              docente: "QUIROZ CHAVEZ ABDON",
              horarios: [
                { dia: "MA", hora: "8:15-9:45", aula: "661" },
                { dia: "MI", hora: "11:15-12:45", aula: "691F" },
                { dia: "JU", hora: "9:45-11:15", aula: "651" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2016023",
        nombreMateria: "INGENIERIA ECONOMICA",
        grupos: [
          {
            grupo: "2",
            titular: {
              docente: "Por Designar ...",
              horarios: [
                { dia: "MA", hora: "8:15-9:45", aula: "AUDIND" },
                { dia: "JU", hora: "8:15-9:45", aula: "684B" },
                { dia: "VI", hora: "8:15-9:45", aula: "692B" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "3",
            titular: {
              docente: "ARANIBAR LA FUENTE LIGIA",
              horarios: [
                { dia: "LU", hora: "9:45-11:15", aula: "690C" },
                { dia: "MI", hora: "12:45-14:15", aula: "692C" },
                { dia: "VI", hora: "9:45-11:15", aula: "690B" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2016027",
        nombreMateria: "PLANIF. Y CONTROL DE LA PRODUCCION II",
        grupos: [
          {
            grupo: "3",
            titular: {
              docente: "CHOQUE FLORES ALEX D'ANCHGELO",
              horarios: [
                { dia: "MA", hora: "18:45-20:15", aula: "690B" },
                { dia: "JU", hora: "18:45-20:15", aula: "625D" },
                { dia: "SA", hora: "9:45-11:15", aula: "691F" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2016049",
        nombreMateria: "COSTOS INDUSTRIALES",
        grupos: [
          {
            grupo: "2",
            titular: {
              docente: "LIMA VACAFLOR TITO ANIBAL",
              horarios: [
                { dia: "LU", hora: "18:45-20:15", aula: "617" },
                { dia: "MI", hora: "20:15-21:45", aula: "612" },
                { dia: "SA", hora: "11:15-12:45", aula: "617" },
              ],
            },
            auxiliar: { empty: true },
          },
          {
            grupo: "3",
            titular: {
              docente: "MEJIA URQUIETA VICTOR RAMIRO",
              horarios: [
                { dia: "JU", hora: "11:15-12:45", aula: "692C" },
                { dia: "VI", hora: "11:15-12:45", aula: "692F" },
              ],
            },
            auxiliar: { empty: true },
          },
        ],
      },
      {
        sis: "2016052",
        nombreMateria: "INGENIERIA DE METODOS Y REINGENIERIA",
        grupos: [
          {
            grupo: "2",
            titular: {
              docente: "COSIO PAPADOPOLIS CARLOS JAVIER",
              horarios: [
                { dia: "MA", hora: "6:45-8:15", aula: "691B" },
                { dia: "MI", hora: "8:15-9:45", aula: "691C" },
                { dia: "VI", hora: "6:45-8:15", aula: "692A" },
              ],
            },
            auxiliar: {
              nombre: "AUXILIAR POR DESIGNAR",
              horarios: [{ dia: "JU", hora: "8:15-9:45", aula: "617C" }],
            },
          },
        ],
      },
    ],
  },
];
