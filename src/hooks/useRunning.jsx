import { useState } from "react";

export default function useRunning() {
  const [running, setRunning] = useState(false);
  const [finish, setFinish] = useState(false);

  const init = () => {
    setRunning(true);
    setFinish(false);
  };

  const end = () => {
    setTimeout(() => {
      setRunning(false);
      setFinish(true);
      setTimeout(() => {
        setFinish(false);
      }, 500);
    }, 500);
  };
  return { init, end, running, finish };
}
