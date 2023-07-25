import { useContext, useEffect, useState } from "react";
import { StudentContext } from "../context/studentContext";

export default function useUpdateLevel({ levelName }) {
  const { levels } = useContext(StudentContext);
  const index = levelName.charCodeAt(0) - "A".charCodeAt(0);
  const subjects = levels[index].subjects;

  const [approved, setApproved] = useState(0);
  const [inProgress, setInProgress] = useState(0);
  const [pending, setPending] = useState(0);

  useEffect(() => {
    const appro = subjects.filter((s) => s.state === "Aprobada").length;
    const inProg = subjects.filter((s) => s.state === "Cursando").length;
    const pendg = subjects.filter((s) => s.state === "No Cursada").length;
    setApproved(appro);
    setInProgress(inProg);
    setPending(pendg);
  }, [levels]);

  return { approved, inProgress, pending, subjects };
}
