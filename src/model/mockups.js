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
    name: "Nivel A",
    progress: 60,
  },
  {
    id: 2,
    name: "Nivel B",
    progress: 40,
  },
  {
    id: 3,
    name: "Nivel C",
    progress: 0,
  },
  {
    id: 4,
    name: "Nivel D",
    progress: 0,
  },
  {
    id: 5,
    name: "Nivel E",
    progress: 0,
  },

  {
    id: 6,
    name: "Nivel F",
    progress: 0,
  },
  {
    id: 7,
    name: "Nivel G",
    progress: 0,
  },
  {
    id: 8,
    name: "Nivel H",
    progress: 0,
  },
  {
    id: 9,
    name: "Nivel I",
    progress: 100,
  },
];

export { user, currentSubjectsList, levels };
