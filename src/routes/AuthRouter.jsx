import { useContext } from "react";
import { StudentContext } from "../context/studentContext";
import { Navigate, Route, Routes } from "react-router-native";
import LoginPage from "../components/register/LoginPage";
import SignUpPage from "../components/register/SignUpPage";
import Main from "../components/Main";
import Register from "../components/register/Register";

export default function AuthRouter() {
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
