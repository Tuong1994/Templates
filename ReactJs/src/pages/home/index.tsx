import Home from "features/home";
import React from "react";
import { useLocation } from "react-router-dom";

const HomePage: React.FC<{}> = (props) => {
  const location = useLocation();

  let com = null;

  switch (location.pathname) {
    default:
      com = <Home />;
  }

  return com;
};

export default HomePage;
