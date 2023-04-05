import { useLocation } from "react-router-dom";

const usePath = () => {
  const location = useLocation();

  const part = location.pathname.split("/");

  const param = part[part.length - 1];

  return param;
};

export default usePath;
