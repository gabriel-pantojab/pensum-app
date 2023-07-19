import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
import { child, get, getDatabase, ref, set, update } from "firebase/database";
// import {...} from "firebase/auth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_APIKEY,
  apiKey: process.env.EXPO_PUBLIC_APIKEY2,
  authDomain: process.env.EXPO_PUBLIC_AUTHDOMAIN,
  projectId: process.env.EXPO_PUBLIC_PROJECTID,
  storageBucket: process.env.EXPO_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.EXPO_PUBLIC_APPID,
  measurementId: process.env.EXPO_PUBLIC_MEASUREMENTID,
  databaseURL: process.env.EXPO_PUBLIC_DATABASEURL,
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export const auth = getAuth(app);

export function crearHorariosCarrera({ sis, horarios }) {
  try {
    update(ref(database, "carreras/" + sis), {
      horarios,
    });
  } catch (error) {
    console.log(error);
  }
}

export function updateCarreras({ sis, nombre }) {
  try {
    update(ref(database, "carreras/"), {
      [sis]: {
        nombre,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getCarreras() {
  const dbref = ref(database);
  return get(child(dbref, "carreras/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const carreras = snapshot.val();
        let carrerasArray = Object.keys(carreras).map((key) => {
          const carrera = carreras[key];
          return {
            sis: key,
            nombre: carrera.nombre,
          };
        });
        return carrerasArray;
      } else {
        return null;
      }
    })
    .catch((error) => {
      console.log("Error getting data carreras", error);
    });
}

export async function getNiveles({ sisCarrera }) {
  const dbref = ref(database);
  return get(child(dbref, "carreras/" + sisCarrera))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const niveles = snapshot.val().horarios.map((nivel) => {
          return {
            nombreNivel: nivel.nombreNivel,
          };
        });
        return { niveles };
      } else {
        return null;
      }
    })
    .catch((error) => {
      console.error("Error getting data niveles");
    });
}

export async function getMateriasNivelCarrera({ sisCarrera, nivel }) {
  const dbref = ref(database);
  return get(child(dbref, "carreras/" + sisCarrera + "/horarios")).then(
    (snapshot) => {
      if (snapshot.exists()) {
        const niveles = snapshot.val();
        const nivelDb = niveles.find((n) => n.nombreNivel === nivel);
        return {
          materias: nivelDb.materias,
        };
      } else {
        return null;
      }
    }
  );
}

export async function getGruposCarreraNivelMateria({
  sisCarrera,
  nivel,
  materia,
}) {
  const materias = await getMateriasNivelCarrera({ sisCarrera, nivel });
  const grupos = materias.materias.find(
    (m) => m.nombreMateria === materia
  ).grupos;
  return {
    grupos: grupos,
  };
}

/**AUTH */

export async function crearUsuario({ username, nickname, password }) {
  const email = nickname + "@gmail.com";
  await createUserWithEmailAndPassword(auth, email, password);
  let user = auth.currentUser;
  await updateProfile(user, {
    displayName: username,
  });
}

export async function login({ nickname, password }) {
  const email = nickname + "@gmail.com";
  return signInWithEmailAndPassword(auth, email, password);
}

export async function logout() {
  return signOut(auth);
}

export async function getCurrentUser() {
  return auth.currentUser;
}

/**USER DATA */

function crearCourseInformatica() {
  return {
    name: "Licenciatura en Ingeniería Informática",
    totalSubjects: 48,
    approvedSubjects: 0,
    pendingSubjects: 48,
    inProgressSubjects: 0,
  };
}

function crearLevelsInformatica() {
  return [
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
}

export async function addUser({ uid, name, description, avatar }) {
  const course = crearCourseInformatica();
  const levels = crearLevelsInformatica();
  const currentSubjectsList = [];
  const schedule = {};
  return set(ref(database, "usuarios/" + uid), {
    uid,
    user: {
      name,
      description,
      avatar,
    },
    course,
    levels,
    currentSubjectsList,
    schedule,
  });
}

export async function getUser({ uid }) {
  const dbref = ref(database);
  return get(child(dbref, "usuarios/" + uid))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const user = snapshot.val();
        return user;
      } else {
        return null;
      }
    })
    .catch((error) => {
      console.error("Error getting data", error.code);
    });
}

export async function updateUser({ uid, userdata }) {
  return set(ref(database, "usuarios/" + uid), userdata);
}
