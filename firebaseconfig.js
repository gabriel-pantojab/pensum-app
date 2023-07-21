import { initializeApp } from "firebase/app";
import { child, get, getDatabase, ref, set } from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged as onAuthStateChangedAuth,
} from "firebase/auth";

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

export function onAuthStateChanged() {
  onAuthStateChangedAuth(auth, (user) => {
    if (user) {
    } else {
    }
  });
}

export async function getInfoNiveles({ sisCarrera }) {
  const dbref = ref(database);
  return get(child(dbref, "carreras/" + sisCarrera))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const niveles = snapshot.val().niveles;
        return niveles;
      } else {
        return null;
      }
    })
    .catch((error) => {
      console.log("Error getting data niveles", error);
    });
}

export async function getTotalMateriasCarrera({ sisCarrera }) {
  const dbref = ref(database);
  return get(child(dbref, "carreras/" + sisCarrera))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const totalMaterias = snapshot.val().totalMaterias;
        return totalMaterias;
      } else {
        return null;
      }
    })
    .catch((error) => {
      console.log("Error getting data niveles", error);
    });
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

export async function addUser({
  uid,
  name,
  description,
  avatar,
  nickname,
  sisCarrera,
  nameCarrera,
}) {
  const totalMateriasCarrera = await getTotalMateriasCarrera({ sisCarrera });
  const course = {
    name: nameCarrera,
    sis: sisCarrera,
    totalSubjects: totalMateriasCarrera,
    approvedSubjects: 0,
    pendingSubjects: totalMateriasCarrera,
    inProgressSubjects: 0,
  };
  const levels = await getInfoNiveles({ sisCarrera });
  const currentSubjectsList = [];
  const schedule = {};
  return set(ref(database, "usuarios/" + uid), {
    uid,
    user: {
      name,
      nickname,
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
