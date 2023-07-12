import { createContext, useState } from "react";
import { subjects, subjectsDay, unfoldInPeriodsSubjectGroup } from "../utils";

const ScheduleContext = createContext();

function ScheduleProvider({ children }) {
  const [schedule, setSchedule] = useState({});
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const addSubject = (subject, checked) => {
    let newSelectedSubjects;
    setSelectedSubjects((prev) => {
      if (checked) {
        newSelectedSubjects = [...prev, subject];
      } else {
        newSelectedSubjects = prev.filter((item) => item.sis !== subject.sis);
      }
      const unfolds = newSelectedSubjects.map((item) => {
        return unfoldInPeriodsSubjectGroup(item, item.subjectName);
      });
      const subDay = subjectsDay(unfolds);
      const sch = subjects(subDay);
      console.log(sch);
      setSchedule(sch);
      return newSelectedSubjects;
    });
  };
  const data = {
    schedule,
    setSchedule,
    selectedSubjects,
    addSubject,
  };
  return (
    <ScheduleContext.Provider value={data}>{children}</ScheduleContext.Provider>
  );
}

export { ScheduleContext };
export default ScheduleProvider;
