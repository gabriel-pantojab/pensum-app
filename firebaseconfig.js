import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
import { child, get, getDatabase, ref, set } from "firebase/database";
import { express } from "./src/storage/createInformatica";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "api-key",
  apiKey: "AIzaSyA5x_HXYlRw3KpRvIxYct3B9LaVjsxk0GQ",
  authDomain: "pensum-app-41ffb.firebaseapp.com",
  projectId: "pensum-app-41ffb",
  storageBucket: "pensum-app-41ffb.appspot.com",
  messagingSenderId: "1066639320462",
  appId: "1:1066639320462:web:26d56615c7bc60b52db0df",
  measurementId: "G-12X7ZV67KF",
  databaseURL: "https://pensum-app-41ffb-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export function crearHorariosInformatica() {
  try {
    set(ref(database, "LICENCIATURAENINGENIERIAINFORMATICA/"), {
      nombre: "LICENCIATURA EN INGENIERÍA INFORMÁTICA",
      horarios: express,
    });
  } catch (error) {
    cconsole.log(error);
  }
}

export function crearCarreras() {
  try {
    set(ref(database, "carreras/"), ["LICENCIATURA EN INGENIERÍA INFORMÁTICA"]);
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
        return carreras;
      } else {
        return null;
      }
    })
    .catch((error) => {
      console.error("Error getting data carreras");
    });
}

export async function getNiveles(carrera) {
  carrera = carrera
    .toUpperCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  const dbref = ref(database);
  return get(child(dbref, carrera + "/"))
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

export async function getMateriasNivelCarrera({ carrera, nivel }) {
  carrera = carrera
    .toUpperCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  const dbref = ref(database);
  return get(child(dbref, carrera + "/horarios/")).then((snapshot) => {
    if (snapshot.exists()) {
      const niveles = snapshot.val();
      const nivelDb = niveles.find((n) => n.nombreNivel === nivel);
      return {
        materias: nivelDb.materias,
      };
    } else {
      return null;
    }
  });
}

export async function getGruposCarreraNivelMateria({
  carrera,
  nivel,
  materia,
}) {
  const materias = await getMateriasNivelCarrera({ carrera, nivel });
  const grupos = materias.materias.find(
    (m) => m.nombreMateria === materia
  ).grupos;
  return {
    grupos: grupos,
  };
}
