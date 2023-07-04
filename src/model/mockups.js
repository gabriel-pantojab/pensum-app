const user = {
  name: "Gabriel Pantoja",
  description: "Estudiante de Ing. Informática",
  avatar: "",
};

const currentSubjectsList = [
  {
    id: 1,
    name: "Matemática I",
    group: "1",
    teacher: "Ing. Juan Pérez",
  },
  {
    id: 2,
    name: "Matemática II",
    group: "2",
    teacher: "Ing. Juan Pérez",
  },
  {
    id: 3,
    name: "Matemática III",
    group: "3",
    teacher: "Ing. Juan Pérez",
  },
];

const student = {
  id: 1,
  name: "Gabriel Pantoja",
  description: "Estudiante de Ing. Informática",
  avatar: "",
  subjectsApproved: [],
  subjectsPending: [],
  subjectsInProgress: [],
};

const levels = [
  {
    id: 1,
    name: "A",
    progress: 60,
    subjects: [
      {
        name: "Ingles I",
        state: "Aprobada",
      },
      {
        name: "Física General",
        state: "Cursando",
      },
      {
        name: "Algebra I",
        state: "No Cursada",
      },
      {
        name: "Cálculo I",
        state: "No Cursada",
      },
      {
        name: "Introducción a la Programación",
        state: "No Cursada",
      },
    ],
  },
  {
    id: 2,
    name: "B",
    progress: 40,
  },
  {
    id: 3,
    name: "C",
    progress: 0,
  },
  {
    id: 4,
    name: "D",
    progress: 0,
  },
  {
    id: 5,
    name: "E",
    progress: 0,
  },

  {
    id: 6,
    name: "F",
    progress: 0,
  },
  {
    id: 7,
    name: "G",
    progress: 0,
  },
  {
    id: 8,
    name: "H",
    progress: 0,
  },
  {
    id: 9,
    name: "I",
    progress: 100,
  },
];

export { user, currentSubjectsList, levels };
