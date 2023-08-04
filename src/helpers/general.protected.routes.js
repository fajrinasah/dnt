import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function GeneralProtectedRoute({ children }) {
  const { username } = useSelector((state) => {
    return state.auth?.user;
  });

  return username ? children : <Navigate to="/auth/login" replace />;
}
