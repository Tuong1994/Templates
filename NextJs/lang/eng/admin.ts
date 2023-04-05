const admin = {
  customer: {
    list: {
      title: "Customers",
      action: "Create customer",
    },
    form: {
      addTitle: "Create customer",
      editTitle: "Update customer",
      personal: "Personal",
      permission: "Permission",
      address: "Address",
    },
  },
  product: {
    list: {
      title: "Products",
      action: "Create product",
    },
    form: {
      addTitle: "Create product",
      editTitle: "Update product",
      defaultImages: "Default images",
      info: "Product info",
      spec: "Product specs",
      group: "Group",
      status: "Status",
      addSpec: "Add",
    },
  },
  order: {
    list: {
      title: "Orders",
      action: "Create order",
    },
    form: {
      addTitle: "Create order",
      editTitle: "Update order",
      selectProducts: "Select products",
      createProduct: "Create new product",
      customer: "Customer",
      setting: "Setting",
      orderStatus: "Order status",
      paymentMethods: "Payment methods",
      deliveryAddress: "Delivery address",
      createdBy: "Order creator",
    },
  },
  shipment: {
    list: {
      title: "Shipments",
    },
  },
};

export default admin;
