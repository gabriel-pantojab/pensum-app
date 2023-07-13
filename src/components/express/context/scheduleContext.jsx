import { createContext, useState } from "react";
import {
  formatHour,
  colors,
  nextHour,
  subjects,
  subjectsDay,
  unfoldInPeriodsSubjectGroup,
} from "../utils";

const ScheduleContext = createContext();

function ScheduleProvider({ children }) {
  const [schedule, setSchedule] = useState({});
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const [minPeriod, setMinPeriod] = useState("2100");
  const [maxPeriod, setMaxPeriod] = useState("0645");

  const [colorsSubjects, setColorsSubjects] = useState([]);

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
    let newSelectedSubjects;
    setSelectedSubjects((prev) => {
      if (checked) {
        let i;
        do {
          i = Math.floor(Math.random() * colors.length);
        } while (colorsSubjects.includes(i));
        setColorsSubjects((prev) => [...prev, colors[i]]);
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

  const data = {
    schedule,
    setSchedule,
    selectedSubjects,
    addSubject,
    minPeriod,
    maxPeriod,
  };
  return (
    <ScheduleContext.Provider value={data}>{children}</ScheduleContext.Provider>
  );
}

export { ScheduleContext };
export default ScheduleProvider;
