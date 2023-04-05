import React from "react";
import AdminCustomers from "features/admin/customer/list";
import AdminCustomerForm from "features/admin/customer/form";
import usePath from "hooks/usePath";

const AdminCustomerPage: React.FC<{}> = (props) => {
  const param = usePath();

  let com = null;

  switch (param) {
    case "add": {
      com = <AdminCustomerForm />;
      break;
    }
    case "edit": {
      com = <AdminCustomerForm />;
      break;
    }
    default:
      com = <AdminCustomers />;
  }

  return com;
};

export default AdminCustomerPage;