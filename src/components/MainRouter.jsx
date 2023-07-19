import { useContext } from "react";
import { StudentContext } from "../context/studentContext";
import { Route, Routes, Navigate } from "react-router-native";
import Register from "./register/Register";
import Login from "./register/Login";
import SignUp from "./register/SignUp";
import Main from "./Main";

export default function () {
  const { student } = useContext(StudentContext);
  return (
    <Routes>
      <Route
        path="/"
        element={
          student.notexist ? (
            <Register />
          ) : (
            <Navigate to="/main" replace={true} />
          )
        }
      />
      <Route
        path="/login"
        element={
          student.notexist ? <Login /> : <Navigate to="/main" replace={true} />
        }
      />
      <Route
        path="/signUp"
        element={
          student.notexist ? <SignUp /> : <Navigate to="/main" replace={true} />
        }
      />
      <Route
        path="/main/*"
        element={
          student.notexist ? <Navigate to="/" replace={true} /> : <Main />
        }
      />
    </Routes>
  );
}
