import { useContext } from "react";
import { StudentContext } from "../context/studentContext";
import { Route, Routes, Navigate } from "react-router-native";
import Register from "./register/Register";
import Main from "./Main";
import LoginPage from "./register/LoginPage";
import SignUpPage from "./register/SignUpPage";

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
          student.notexist ? (
            <LoginPage />
          ) : (
            <Navigate to="/main" replace={true} />
          )
        }
      />
      <Route
        path="/signUp"
        element={
          student.notexist ? (
            <SignUpPage />
          ) : (
            <Navigate to="/main" replace={true} />
          )
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
