function nextHour(hour) {
  let [h, m] = hour.split(":");
  h = parseInt(h);
  m = parseInt(m);
  let totalMinutos = h * 60 + m + 45;
  let newHour = Math.floor(totalMinutos / 60);
  let newMinutes = totalMinutos % 60;
  const hourS = newHour < 10 ? `0${newHour}` : newHour;
  const minS = newMinutes < 10 ? `0${newMinutes}` : newMinutes;
  return `${hourS}:${minS}`;
}

const DIAS = {
  LU: "lunes",
  MA: "martes",
  MI: "miercoles",
  JU: "jueves",
  VI: "viernes",
  SA: "sabado",
  DO: "domingo",
};
// 18:45-20:15 -> [1845,1930]
// 08:15-10:30 -> [0815,0900,0945]
function getPeriods(hora) {
  const start = hora.split("-")[0];
  const end = hora.split("-")[1];
  let periods = [];
  let period = start;
  while (period != end && period != "0" + end) {
    periods.push(period);
    period = nextHour(period);
  }
  return periods;
}
function unfoldInPeriodsSubjectGroup(mat, matName) {
  let dias = [];
  if (mat.titular.horarios) {
    dias = mat.titular.horarios.map((dia) => {
      return {
        auxi: false,
        day: DIAS[dia.dia],
        periods: getPeriods(dia.hora),
        classroom: dia.aula,
        teacherName: mat.titular.docente,
      };
    });
  }
  if (mat.auxiliar.horarios) {
    dias = [
      ...dias,
      ...mat.auxiliar.horarios.map((dia) => {
        return {
          auxi: true,
          day: DIAS[dia.dia],
          periods: getPeriods(dia.hora),
          classroom: dia.aula,
          teacherName: mat.auxiliar.nombre,
        };
      }),
    ];
  }
  let horario = {};
  dias.forEach((dia) => {
    if (!horario[dia.day]) horario[dia.day] = {};
    dia.periods.forEach((period) => {
      const p = parseInt(period.split(":").join(""));
      horario[dia.day][p] = [
        {
          subjectName: matName,
          teacherName: dia.teacherName,
          auxi: dia.auxi,
          group: mat.grupo,
          classroom: dia.classroom,
        },
      ];
    });
  });
  return horario;
}

// materias en un dia
// recibe un arreglo de materias desdobladas en periodos
function subjectsDay(subjects) {
  let subjectsDay = {};
  subjects.forEach((subject) => {
    Object.keys(subject).forEach((dayName) => {
      const day = subject[dayName];
      const periods = Object.keys(day);
      if (subjectsDay[dayName]) {
        periods.forEach((period) => {
          if (subjectsDay[dayName][period]) {
            subjectsDay[dayName][period].push(...day[period]);
          } else {
            subjectsDay[dayName][period] = day[period];
          }
        });
      } else {
        subjectsDay[dayName] = {};
        periods.forEach((period) => {
          subjectsDay[dayName][period] = day[period];
        });
      }
    });
  });
  return subjectsDay;
}

const valuesDays = {
  lunes: 1,
  martes: 2,
  miercoles: 3,
  jueves: 4,
  viernes: 5,
  sabado: 6,
  domingo: 7,
};

function subjects(subD) {
  let horario = [];
  Object.keys(subD).forEach((dayName) => {
    let keyAct = "",
      keyAnt = "";
    let subjectsAct = [],
      subjectsAnt = [];
    let count = 0;
    let periodIni = "";
    //#
    Object.keys(subD[dayName]).forEach((periodHour) => {
      if (periodIni === "") periodIni = periodHour;
      keyAct = "";
      subjectsAct = [];
      //$
      subD[dayName][periodHour].forEach((subject) => {
        keyAct += subject.subjectName.split(" ").join("").toLowerCase();
        subjectsAct.push(subject);
      }); //$
      if (keyAct != keyAnt && keyAnt != "") {
        horario.push({
          period: periodIni,
          dayName,
          periods: count,
          subjects: subjectsAnt,
        });
        periodIni = periodHour;
        count = 1;
      } else {
        count++;
      }
      keyAnt = keyAct;
      subjectsAnt = [...subjectsAct];
    }); //#
    horario.push({
      period: periodIni,
      dayName,
      periods: count,
      subjects: subjectsAnt,
    });
  });
  horario.sort((a, b) => valuesDays[a.dayName] - valuesDays[b.dayName]);
  let horarioFinal = {};
  horario.forEach((hor) => {
    if (horarioFinal[hor.dayName]) {
      horarioFinal[hor.dayName][hor.period] = {
        periods: hor.periods,
        subjects: hor.subjects,
      };
    } else {
      horarioFinal[hor.dayName] = {};
      horarioFinal[hor.dayName][hor.period] = {
        periods: hor.periods,
        subjects: hor.subjects,
      };
    }
  });
  return horarioFinal;
}

export { unfoldInPeriodsSubjectGroup, subjectsDay, subjects };
