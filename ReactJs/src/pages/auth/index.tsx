import React from "react";
import usePath from "hooks/usePath";
import SignIn from "features/auth/SignIn";
import SignUp from "features/auth/SignUp";

const AuthPage: React.FC<{}> = (props) => {
  const param = usePath();

  let com = null;

  switch (param) {
    case "signUp": {
      com = <SignUp />;
      break;
    }
    default:
      com = <SignIn />;
  }

  return com;
};

export default AuthPage;
