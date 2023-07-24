import { createContext, useEffect, useState } from "react";
import {
  formatHour,
  colors,
  nextHour,
  subjects,
  subjectsDay,
  unfoldInPeriodsSubjectGroup,
} from "../utils/utils";
import { getSchedule } from "../../../storage/storage";

function buildInitSchedule() {
  const days = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
  const hours = [
    "645",
    "730",
    "815",
    "900",
    "945",
    "1030",
    "1115",
    "1200",
    "1245",
    "1330",
    "1415",
    "1500",
    "1545",
    "1630",
    "1715",
    "1800",
    "1845",
    "1930",
    "2015",
    "2100",
  ];
  let schedule = {};
  days.forEach((day) => {
    schedule[day] = {};
    hours.forEach((hour) => {
      schedule[day][hour] = {
        subjects: [],
        periods: 1,
      };
    });
  });
  return schedule;
}

const initSchedule = buildInitSchedule();

const ScheduleContext = createContext();

function ScheduleProvider({ children }) {
  const [schedule, setSchedule] = useState(null);
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const [minPeriod, setMinPeriod] = useState(0);
  const [maxPeriod, setMaxPeriod] = useState(0);

  const [colorsSubjects, setColorsSubjects] = useState([]);

  useEffect(() => {
    getSchedule().then((schd) => {
      if (schd) {
        setSchedule(schd.schedule);
        setMinPeriod(schd.minPeriod);
        setMaxPeriod(schd.maxPeriod);
        setSelectedSubjects(schd.selectedSubjects);
        if (schd.colorsSubjects) setColorsSubjects(schd.colorsSubjects);
      } else {
        setSchedule(initSchedule);
        setMinPeriod("645");
        setMaxPeriod("2100");
      }
    });
  }, []);

  const updateMinMaxPeriod = (schd) => {
    const periods = Object.keys(schd)
      .map((day) => {
        const p1 = Object.keys(schd[day]);
        const p2 = p1.map((period) => {
          let s = formatHour(period);
          let c = schd[day][period].periods;
          while (c - 1) {
            s = nextHour(s);
            c--;
          }
          return s.split(":").join("");
        });
        return [...p1, ...p2];
      })
      .flat()
      .map((period) => parseInt(period));
    const min = Math.min(...periods);
    const max = Math.max(...periods);
    setMinPeriod(min + "");
    setMaxPeriod(max + "");
  };

  const addSubject = (subject, checked) => {
    let newSelectedSubjects = [];
    setSelectedSubjects((prev) => {
      if (checked) {
        let i;
        do {
          i = Math.floor(Math.random() * colors.length);
        } while (colorsSubjects.includes(i));
        setColorsSubjects((prev) => [...prev, i]);
        newSelectedSubjects = [
          ...prev,
          {
            ...subject,
            color: colors[i],
          },
        ];
      } else {
        newSelectedSubjects = prev.filter(
          (item) =>
            `${item.sis}${item.grupo}` !== `${subject.sis}${subject.grupo}`
        );
        setColorsSubjects((prev) => {
          const i = prev.findIndex((item) => item === subject.color);
          return [...prev.slice(0, i), ...prev.slice(i + 1)];
        });
      }
      if (!newSelectedSubjects.length) {
        clear();
        return [];
      }
      const unfolds = newSelectedSubjects.map((item) => {
        return unfoldInPeriodsSubjectGroup(item, item.subjectName);
      });

      const subDay = subjectsDay(unfolds);
      const sch = subjects(subDay);
      updateMinMaxPeriod(sch);
      setSchedule(sch);
      return newSelectedSubjects;
    });
  };

  const clear = () => {
    setSelectedSubjects([]);
    setColorsSubjects([]);

    setMinPeriod("645");
    setMaxPeriod("2100");
    setSchedule(initSchedule);
  };

  const data = {
    schedule,
    setSchedule,
    selectedSubjects,
    addSubject,
    minPeriod,
    maxPeriod,
    colorsSubjects,
    clear,
  };
  return (
    <ScheduleContext.Provider value={data}>{children}</ScheduleContext.Provider>
  );
}

export { ScheduleContext };
export default ScheduleProvider;
