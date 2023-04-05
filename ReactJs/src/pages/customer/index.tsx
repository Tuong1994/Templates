import usePath from "hooks/usePath";
import React from "react";

const CustomerPage: React.FC<{}> = (props) => {
  const param = usePath();

  let com = null;

  switch (param) {
    default:
      com = <CustomerPage />;
  }

  return com;
};

export default CustomerPage;
