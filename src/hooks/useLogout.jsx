import { useContext, useState } from "react";
import { StudentContext } from "../context/studentContext";
import { logoutApp } from "../storage/storage";

export default function useLogout() {
  const { student, clearData } = useContext(StudentContext);
  const [saliendo, setSaliendo] = useState(false);

  const logout = async () => {
    setSaliendo(true);
    const uid = student.uid;
    await logoutApp({ uid });
    clearData();
    setSaliendo(false);
  };

  return { logout, saliendo };
}
