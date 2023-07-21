import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { username } = useSelector((state) => {
    return {
      //   username: state.auth.username,
    };
  });
  //   return username ? children : <Navigate to="/login" replace />;
}
