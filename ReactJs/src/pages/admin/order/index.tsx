import React from "react";
import AdminOrders from "features/admin/order/list";
import AdminOrderForm from "features/admin/order/form";
import usePath from "hooks/usePath";

const AdminOrderPage: React.FC<{}> = (props) => {
  const param = usePath();

  let com = null;

  switch (param) {
    case "add": {
      com = <AdminOrderForm />;
      break;
    }
    case "edit": {
      com = <AdminOrderForm />;
      break;
    }
    default:
      com = <AdminOrders />;
  }

  return com;
};

export default AdminOrderPage;
