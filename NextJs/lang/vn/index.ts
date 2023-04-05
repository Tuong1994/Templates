import common from "./common";
import header from "./header";
import footer from "./footer";
import home from "./home";
import product from "./product";
import cart from "./cart";
import order from "./order";
import customer from "./customer";
import payment from "./payment";
import warranty from "./warranty";
import signIn from "./signIn";
import signUp from "./signUp";
import admin from "./admin";

const vn = {
  common: common,
  header: header,
  footer: footer,
  home: home,
  product: product,
  payment: payment,
  warranty: warranty,
  cart: cart,
  order: order,
  customer: customer,
  signIn: signIn,
  signUp: signUp,
  admin: admin,
};

export type Vn = typeof vn;

export default vn;
