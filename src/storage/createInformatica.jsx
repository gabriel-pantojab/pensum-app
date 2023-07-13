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

export const express = {
  A: [
    {
      nombre: "INGLES I",
      sis: "1803001",
      nivel: "A",
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
          auxiliar: {},
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
          auxiliar: {},
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
          auxiliar: {},
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
          auxiliar: {},
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
          auxiliar: {},
        },
      ],
    },
    {
      nombre: "FISICA GENERAL",
      sis: "2006063",
      nivel: "A",
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
          auxiliar: {},
        },
        {
          grupo: "B1",
          titular: {},
          auxiliar: {
            nombre: "MOREIRA CALIZAYA RENE",
            horarios: [{ dia: "MI", hora: "8:15-9:45", aula: "620" }],
          },
        },
        {
          grupo: "B2",
          titular: {},
          auxiliar: {
            nombre: "RUIZ UCUMARI IVAN",
            horarios: [{ dia: "LU", hora: "9:45-11:15", aula: "620" }],
          },
        },
        {
          grupo: "B3",
          titular: {},
          auxiliar: {
            nombre: "ORDONEZ SALVATIERRA MIGUEL ANGEL",
            horarios: [{ dia: "MA", hora: "15:45-17:15", aula: "620" }],
          },
        },
        {
          grupo: "B4",
          titular: {},
          auxiliar: {
            nombre: "RUIZ UCUMARI IVAN",
            horarios: [{ dia: "MA", hora: "9:45-11:15", aula: "621" }],
          },
        },
        {
          grupo: "B5",
          titular: {},
          auxiliar: {
            nombre: "TERRAZAS VARGAS JUAN CARLOS",
            horarios: [{ dia: "MI", hora: "11:15-12:45", aula: "620" }],
          },
        },
        {
          grupo: "B6",
          titular: {},
          auxiliar: {
            nombre: "TERRAZAS VARGAS JUAN CARLOS",
            horarios: [{ dia: "JU", hora: "11:15-12:45", aula: "620" }],
          },
        },
      ],
    },
    {
      nombre: "ALGEBRA I",
      sis: "2008019",
      nivel: "A",
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
          auxiliar: {},
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
          auxiliar: {},
        },
      ],
    },
    {
      nombre: "CALCULO I",
      sis: "2008054",
      nivel: "A",
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
          auxiliar: {},
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
          auxiliar: {},
        },
      ],
    },
    {
      nombre: "INTRODUCCION A LA PROGRAMACION",
      sis: "2010010",
      nivel: "A",
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
  B: [
    {
      nombre: "INGLES II",
      sis: "1803002",
      nivel: "B",
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
          auxiliar: {},
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
          auxiliar: {},
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
          auxiliar: {},
        },
      ],
    },
    {
      nombre: "ALGEBRA II",
      sis: "2008022",
      nivel: "B",
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
          auxiliar: {},
        },
      ],
    },
    {
      nombre: "CALCULO II",
      sis: "2008056",
      nivel: "B",
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
      nombre: "ELEM. DE PROGRAMACION Y ESTRUC. DE DATOS",
      sis: "2010003",
      nivel: "B",
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
      nombre: "ARQUITECTURA DE COMPUTADORAS I",
      sis: "2010013",
      nivel: "B",
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
          auxiliar: {},
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
          auxiliar: {},
        },
      ],
    },
    {
      nombre: "PROGRAMACION",
      sis: "2010200",
      nivel: "B",
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
          auxiliar: {},
        },
      ],
    },
  ],
  C: [
    {
      nombre: "CALCULO NUMERICO",
      sis: "2008060",
      nivel: "C",
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
          auxiliar: {},
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
          auxiliar: {},
        },
      ],
    },
    {
      nombre: "LOGICA",
      sis: "2008140",
      nivel: "C",
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
      nombre: "ARQUITECTURA DE COMPUTADORAS II",
      sis: "2010014",
      nivel: "C",
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
          auxiliar: {},
        },
      ],
    },
    {
      nombre: "TEORIA DE GRAFOS",
      sis: "2010037",
      nivel: "C",
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
      nombre: "ORGANIZACION Y METODOS",
      sis: "2010041",
      nivel: "C",
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
          auxiliar: {},
        },
      ],
    },
    {
      nombre: "METODOS Y TECNICAS DE PROGRAMACION",
      sis: "2010206",
      nivel: "C",
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
          auxiliar: {},
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
          auxiliar: {},
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
          auxiliar: {},
        },
      ],
    },
  ],
  D: [
    {
      nombre: "PROBABILIDAD Y ESTADISTICA",
      sis: "2008029",
      nivel: "D",
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
          auxiliar: {},
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
          auxiliar: {},
        },
      ],
    },
    {
      nombre: "TALLER DE PROGRAMACION EN BAJO NIVEL",
      sis: "2010005",
      nivel: "D",
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
          auxiliar: {},
        },
      ],
    },
    {
      nombre: "BASE DE DATOS I",
      sis: "2010015",
      nivel: "D",
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
          auxiliar: {},
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
          auxiliar: {},
        },
      ],
    },
    {
      nombre: "SISTEMAS DE INFORMACION I",
      sis: "2010018",
      nivel: "D",
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
          auxiliar: {},
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
          auxiliar: {},
        },
      ],
    },
    {
      nombre: "PROGRAMACION FUNCIONAL",
      sis: "2010038",
      nivel: "D",
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
          auxiliar: {},
        },
      ],
    },
    {
      nombre: "ALGORITMOS AVANZADOS",
      sis: "2010197",
      nivel: "D",
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
          auxiliar: {},
        },
      ],
    },
  ],
  E: [
    {
      nombre: "BASE DE DATOS II",
      sis: "2010016",
      nivel: "E",
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
          auxiliar: {},
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
          auxiliar: {},
        },
      ],
    },
    {
      nombre: "TALLER DE SISTEMAS OPERATIVOS",
      sis: "2010017",
      nivel: "E",
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
          auxiliar: {},
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
          auxiliar: {},
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
          auxiliar: {},
        },
      ],
    },
    {
      nombre: "SISTEMAS DE INFORMACION II",
      sis: "2010022",
      nivel: "E",
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
          auxiliar: {},
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
          auxiliar: {},
        },
      ],
    },
    {
      nombre: "TEORIA DE AUTOMATAS Y LENG. FORMALES",
      sis: "2010040",
      nivel: "E",
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
          auxiliar: {},
        },
      ],
    },
    {
      nombre: "GRAFICACION POR COMPUTADORA",
      sis: "2010042",
      nivel: "E",
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
          auxiliar: {},
        },
      ],
    },
    {
      nombre: "INTELIGENCIA ARTIFICIAL I",
      sis: "2010201",
      nivel: "E",
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
          auxiliar: {},
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
          auxiliar: {},
        },
      ],
    },
  ],
  F: [
    {
      nombre: "INGENIERIA DE SOFTWARE",
      sis: "2010020",
      nivel: "F",
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
          auxiliar: {},
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
          auxiliar: {},
        },
      ],
    },
    {
      nombre: "REDES DE COMPUTADORAS",
      sis: "2010047",
      nivel: "F",
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
          auxiliar: {},
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
          auxiliar: {},
        },
      ],
    },
    {
      nombre: "ESTRUCTURA Y SEMANTICA DE LENGUAJES DE",
      sis: "2010049",
      nivel: "F",
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
          auxiliar: {},
        },
      ],
    },
    {
      nombre: "TALLER DE BASE DE DATOS",
      sis: "2010053",
      nivel: "F",
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
          auxiliar: {},
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
          auxiliar: {},
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
          auxiliar: {},
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
          auxiliar: {},
        },
      ],
    },
    {
      nombre: "INTELIGENCIA ARTIFICIAL II",
      sis: "2010202",
      nivel: "F",
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
          auxiliar: {},
        },
      ],
    },
    {
      nombre: "PROGRAMACION WEB",
      sis: "2010203",
      nivel: "F",
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
          auxiliar: {},
        },
      ],
    },
  ],
  G: [
    {
      nombre: "SIMULACION DE SISTEMAS",
      sis: "2010019",
      nivel: "G",
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
          auxiliar: {},
        },
      ],
    },
    {
      nombre: "TALLER DE INGENIERIA DE SOFTWARE",
      sis: "2010024",
      nivel: "G",
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
          auxiliar: {},
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
          auxiliar: {},
        },
      ],
    },
    {
      nombre: "ARQUITECTURA DE SOFTWARE",
      sis: "2010100",
      nivel: "G",
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
          auxiliar: {},
        },
      ],
    },
    {
      nombre: "INTERACCION HUMANO COMPUTADOR",
      sis: "2010204",
      nivel: "G",
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
          auxiliar: {},
        },
      ],
    },
    {
      nombre: "TECNOLOGIA REDES AVANZADAS",
      sis: "2010205",
      nivel: "G",
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
          auxiliar: {},
        },
      ],
    },
  ],
  H: [
    {
      nombre: "APLICACION DE SISTEMAS OPERATIVOS",
      sis: "2010035",
      nivel: "H",
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
          auxiliar: {},
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
          auxiliar: {},
        },
      ],
    },
    {
      nombre: "EVALUACION Y AUDITORIA DE SISTEMAS",
      sis: "2010102",
      nivel: "H",
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
          auxiliar: {},
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
          auxiliar: {},
        },
      ],
    },
    {
      nombre: "TALLER DE GRADO I",
      sis: "2010214",
      nivel: "H",
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
          auxiliar: {},
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
          auxiliar: {},
        },
      ],
    },
  ],
  I: [
    {
      nombre: "PROCESOS AGILES",
      sis: "2010066",
      nivel: "I",
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
          auxiliar: {},
        },
      ],
    },
    {
      nombre: "ENTORNOS VIRTUALES DE APRENDIZAJE",
      sis: "2010178",
      nivel: "I",
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
          auxiliar: {},
        },
      ],
    },
    {
      nombre: "SERVICIOS TELEMATICOS",
      sis: "2010188",
      nivel: "I",
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
          auxiliar: {},
        },
      ],
    },
    {
      nombre: "RECONOCIMIENTO DE VOZ",
      sis: "2010189",
      nivel: "I",
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
          auxiliar: {},
        },
      ],
    },
    {
      nombre: "SEGURIDAD DE SISTEMAS",
      sis: "2010209",
      nivel: "I",
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
          auxiliar: {},
        },
      ],
    },
    {
      nombre: "TALLER DE GRADO II",
      sis: "2010215",
      nivel: "I",
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
          auxiliar: {},
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
          auxiliar: {},
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
          auxiliar: {},
        },
      ],
    },
    {
      nombre: "CLOUD COMPUTING",
      sis: "2010216",
      nivel: "I",
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
          auxiliar: {},
        },
      ],
    },
    {
      nombre: "BUSINESS INTELLIGENCE Y BIG DATA",
      sis: "2010217",
      nivel: "I",
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
          auxiliar: {},
        },
      ],
    },
    {
      nombre: "CIENCIA DE DATOS Y MACHINE LEARNING",
      sis: "2010218",
      nivel: "I",
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
          auxiliar: {},
        },
      ],
    },
  ],
};
