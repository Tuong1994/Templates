import Warranty from "features/warranty";
import usePath from "hooks/usePath";
import React from "react";

const WarrantyPage: React.FC<{}> = (props) => {
  const param = usePath();

  let com = null;

  switch (param) {
    default:
      com = <Warranty />;
  }

  return com;
};

export default WarrantyPage;
