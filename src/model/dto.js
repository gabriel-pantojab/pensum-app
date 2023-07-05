const student = {
  name: "Gabriel Pantoja",
  description: "Estudiante de Ing. Informática",
  avatar: "",
};

const Course = {
  name: "Licenciatura en Ing. Informática",
  totalSubjects: 48,
  approvedSubjects: 0,
  pendingSubjects: 0,
  inProgressSubjects: 0,
};

const currentSubjectsList = [
  {
    id: 1,
    name: "",
    group: "",
    teacher: "",
  },
];

const levels = [
  {
    id: 1,
    name: "A",
    progress: 0,
    inProgress: false,
    subjects: [
      {
        id: 1,
        name: "",
        state: "",
      },
    ],
  },
];

const horario = {
  lunes: {
    "0645": [
      {
        subjectName: "",
        teacherName: "",
        group: "",
        classroom: "",
      },
    ],
  },
  martes: {},
  miercoles: {},
  jueves: {},
  viernes: {},
  sabado: {},
};

const example = {
  lunes: {
    "0945": [
      {
        subjectName: "REDES DE COMPUTADORAS",
        teacherName: "ORELLANA ARAOZ JORGE WALTER",
        group: "2",
        classroom: "691B",
      },
    ],
    1030: [
      {
        subjectName: "REDES DE COMPUTADORAS",
        teacherName: "ORELLANA ARAOZ JORGE WALTER",
        group: "2",
        classroom: "691B",
      },
    ],
    1115: [
      {
        subjectName: "ESTRUCTURA Y SEMANTICA DE LENGUAJES DE PROGRAMACION",
        teacherName: "ROMERO RODRIQUEZ PATRICIA",
        group: "1",
        classroom: "617B",
      },
    ],
    1200: [
      {
        subjectName: "ESTRUCTURA Y SEMANTICA DE LENGUAJES DE PROGRAMACION",
        teacherName: "ROMERO RODRIQUEZ PATRICIA",
        group: "1",
        classroom: "617B",
      },
    ],
  },
  martes: {
    "0645": [
      {
        subjectName: "ALGORITMOS AVANZADOS",
        teacherName: "BLANCO COCA LETICIA",
        group: "1",
        classroom: "691C",
      },
    ],
    "0730": [
      {
        subjectName: "ALGORITMOS AVANZADOS",
        teacherName: "BLANCO COCA LETICIA",
        group: "1",
        classroom: "691C",
      },
    ],
    "0945": [
      {
        subjectName: "REDES DE COMPUTADORAS",
        teacherName: "ORELLANA ARAOZ JORGE WALTER",
        group: "2",
        classroom: "693A",
      },
      {
        subjectName: "ESTRUCTURA Y SEMANTICA DE LENGUAJES DE PROGRAMACION",
        teacherName: "ROMERO RODRIQUEZ PATRICIA",
        group: "1",
        classroom: "625C",
      },
    ],
    1030: [
      {
        subjectName: "REDES DE COMPUTADORAS",
        teacherName: "ORELLANA ARAOZ JORGE WALTER",
        group: "2",
        classroom: "693A",
      },
      {
        subjectName: "ESTRUCTURA Y SEMANTICA DE LENGUAJES DE PROGRAMACION",
        teacherName: "ROMERO RODRIQUEZ PATRICIA",
        group: "1",
        classroom: "625C",
      },
    ],
  },
  jueves: {
    "0645": [
      {
        subjectName: "ALGORITMOS AVANZADOS",
        teacherName: "BLANCO COCA LETICIA",
        group: "1",
        classroom: "690D",
      },
    ],
    "0730": [
      {
        subjectName: "ALGORITMOS AVANZADOS",
        teacherName: "BLANCO COCA LETICIA",
        group: "1",
        classroom: "690D",
      },
    ],
    "0945": [
      {
        subjectName: "REDES DE COMPUTADORAS",
        teacherName: "ORELLANA ARAOZ JORGE WALTER",
        group: "2",
        classroom: "692G",
      },
    ],
    1030: [
      {
        subjectName: "REDES DE COMPUTADORAS",
        teacherName: "ORELLANA ARAOZ JORGE WALTER",
        group: "2",
        classroom: "692G",
      },
    ],
    1115: [
      {
        subjectName: "ESTRUCTURA Y SEMANTICA DE LENGUAJES DE PROGRAMACION",
        teacherName: "ROMERO RODRIQUEZ PATRICIA",
        group: "1",
        classroom: "692H",
      },
    ],

    1200: [
      {
        subjectName: "ESTRUCTURA Y SEMANTICA DE LENGUAJES DE PROGRAMACION",
        teacherName: "ROMERO RODRIQUEZ PATRICIA",
        group: "1",
        classroom: "692H",
      },
    ],
  },
  viernes: {
    "0645": [
      {
        subjectName: "ALGORITMOS AVANZADOS",
        teacherName: "BLANCO COCA LETICIA",
        group: "1",
        classroom: "693D",
      },
    ],
  },
};
