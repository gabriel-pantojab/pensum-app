import { nextPeriod, formatHour } from "../../../utils/utils";

export const PERIOD_HEIGHT = 28;

export function getHours({ minPeriod, maxPeriod }) {
  if (!minPeriod || !maxPeriod) return [];
  let start = formatHour(minPeriod);
  let end = formatHour(maxPeriod);
  let hrs = [start];
  while (start != end) {
    start = nextPeriod(start);
    hrs.push(start);
  }
  return hrs;
}

export function getHeigthPeriod({ period, schedule }) {
  period = formatHour(period);
  let height = PERIOD_HEIGHT;
  Object.keys(schedule).forEach((day) => {
    Object.keys(schedule[day]).forEach((ped) => {
      let start = formatHour(ped);
      let hrs = [start];
      let periods = schedule[day][ped].periods;
      while (periods - 1) {
        start = nextPeriod(start);
        hrs.push(start);
        periods--;
      }
      if (hrs.includes(period)) {
        let heigthTemp =
          (2 * schedule[day][ped].subjects.length * PERIOD_HEIGHT) /
          schedule[day][ped].periods;
        if (heigthTemp > height) height = heigthTemp;
      }
    });
  });
  return height;
}

export function getActivitiesDay({ dayName, schedule, minPeriod, maxPeriod }) {
  if (!schedule[dayName]) return [];
  let activities = [];
  Object.keys(schedule[dayName]).forEach((key) => {
    activities.push({
      period: key,
      periods: schedule[dayName][key].periods,
      subjects: schedule[dayName][key].subjects,
    });
  });
  activities = completePeriods(activities, minPeriod, maxPeriod);
  return activities;
}

function completePeriods(activities, minPeriod, maxPeriod) {
  if (minPeriod === 0 || maxPeriod === 0) return activities;
  activities.unshift({
    period: minPeriod,
    periods: 0,
    subjects: [],
  });
  activities.push({
    period: nextPeriod(formatHour(maxPeriod)).split(":").join(""),
    periods: 0,
    subjects: [],
  });

  let activitiesComplete = [];
  for (let i = 0; i < activities.length - 1; i++) {
    let activity = activities[i];
    let nextActivity = activities[i + 1];
    let start = formatHour(activity.period);
    let periods = activity.periods;
    while (periods) {
      start = nextPeriod(start);
      periods--;
    }
    if (activity.periods > 0) activitiesComplete.push(activity);
    while (start != formatHour(nextActivity.period)) {
      activitiesComplete.push({
        period: start,
        periods: 1,
        subjects: [],
      });
      start = nextPeriod(start);
    }
  }
  return activitiesComplete;
}

function generateColors() {
  let colors = [];
  for (let g = 100; g <= 255; g++) {
    for (let b = 100; b <= 255; b++) {
      const color = rgbToHex(255, g, b);
      colors.push(color);
    }
  }
  return colors;
}

function rgbToHex(r, g, b) {
  const red = componentToHex(r);
  const green = componentToHex(g);
  const blue = componentToHex(b);

  return `#${red}${green}${blue}`;
}

function componentToHex(c) {
  const hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
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
    period = nextPeriod(period);
  }
  return periods;
}

export function unfoldInPeriodsSubjectGroup(mat, matName) {
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
          color: mat.color,
        },
      ];
    });
  });
  return horario;
}

// materias en un dia
// recibe un arreglo de materias desdobladas en periodos
export function subjectsDay(subjects) {
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

export function subjects(subD) {
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
        keyAct += subject.group;
        keyAct += subject.classroom;
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

export const colors = generateColors();
