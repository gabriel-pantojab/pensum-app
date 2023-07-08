const levels = [
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
      { id: 2, name: "TALLER DE INGENIERIA DE SOFTWARE", state: "No Cursada" },
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
      { id: 1, name: "APLICACION DE SISTEMAS OPERATIVOS", state: "No Cursada" },
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
      { id: 2, name: "ENTORNOS VIRTUALES DE APRENDIZAJE", state: "No Cursada" },
      { id: 3, name: "SERVICIOS TELEMATICOS", state: "No Cursada" },
      { id: 4, name: "RECONOCIMIENTO DE VOZ", state: "No Cursada" },
      { id: 5, name: "SEGURIDAD DE SISTEMAS", state: "No Cursada" },
      { id: 6, name: "TALLER DE GRADO II", state: "No Cursada" },
      { id: 7, name: "CLOUD COMPUTING", state: "No Cursada" },
      { id: 8, name: "BUSINESS INTELLIGENCE Y BIG DATA", state: "No Cursada" },
      {
        id: 9,
        name: "CIENCIA DE DATOS Y MACHINE LEARNING",
        state: "No Cursada",
      },
    ],
  },
];

const student = {
  name: "Gabriel Pantoja",
  description: "Estudiante de Ing. Informática",
  avatar: "",
};

const course = {
  name: "Licenciatura en Ing Informática",
  totalSubjects: 48,
  approvedSubjects: 0,
  pendingSubjects: 0,
  inProgressSubjects: 0,
};
