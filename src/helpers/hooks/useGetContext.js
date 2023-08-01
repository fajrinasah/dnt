import { useLocation } from "react-router-dom";

// custom hook to get context from UUID with context
export const useGetContext = () => {
  const location = useLocation();
  const pathArr = location.pathname.split("/");
  const uuidWithContext = pathArr[3];
  const splitted = uuidWithContext.split("-");
  const context = splitted[0];
  return context;
};
