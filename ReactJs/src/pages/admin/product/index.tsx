import AdminProductForm from "features/admin/product/form";
import AdminProducts from "features/admin/product/list";
import usePath from "hooks/usePath";
import React from "react";

const AdminProductPage: React.FC<{}> = (props) => {
  const param = usePath();

  let com = null;

  switch (param) {
    case "add": {
      com = <AdminProductForm />;
      break;
    }
    case "edit": {
      com = <AdminProductForm />;
      break;
    }
    default:
      com = <AdminProducts />;
  }

  return com;
};

export default AdminProductPage;
