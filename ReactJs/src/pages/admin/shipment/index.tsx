import React from "react";
import AdminShipments from "features/admin/shipment";
import usePath from "hooks/usePath";

const AdminShipmentPage: React.FC<{}> = (props) => {
  const param = usePath();

  let com = null;

  switch (param) {
    default:
      com = <AdminShipments />;
  }

  return com;
};

export default AdminShipmentPage