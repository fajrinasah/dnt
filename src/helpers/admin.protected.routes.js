import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function AdminProtectedRoute({ children }) {
  const { role_id } = useSelector((state) => {
    return state.auth?.user;
  });

  return role_id === 1 ? (
    children
  ) : (
    <Navigate to="/create-transactions" replace />
  );
}
