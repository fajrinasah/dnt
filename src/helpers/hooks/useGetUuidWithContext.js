import { useLocation } from "react-router-dom";

// custom hook to get UUID with context from the current pathname
export const useGetUuidWithContext = () => {
  const location = useLocation();
  const pathArr = location.pathname.split("/");
  const result = pathArr[3];
  return result;
};
