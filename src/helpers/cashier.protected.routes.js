import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function CashierProtectedRoute({ children }) {
  const { role_id } = useSelector((state) => {
    return state.auth?.user;
  });

  return role_id === 2 ? children : <Navigate to="/manage/products" replace />;
}
