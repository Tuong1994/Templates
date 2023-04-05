import { Route, Routes, useLocation } from "react-router-dom";
import PageWrapper from "pages/PageWrapper";
import HomePage from "pages/home";
import ProductPage from "pages/product";
import PaymentPage from "pages/payment";
import Warranty from "features/warranty";
import CartPage from "pages/cart";
import AuthPage from "pages/auth";
import Customer from "features/customer";
import AdminCustomerPage from "pages/admin/customer";
import AdminOrderPage from "pages/admin/order";
import AdminProductPage from "pages/admin/product";
import AdminShipmentPage from "pages/admin/shipment";

function App() {
  const location = useLocation();

  const isAdmin = location.pathname.includes("/admin");

  return (
    <PageWrapper isAdmin={isAdmin}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/*" element={<ProductPage />} />
        <Route path="/payment/*" element={<PaymentPage />} />
        <Route path="/warranty/*" element={<Warranty />} />
        <Route path="/cart/*" element={<CartPage />} />
        <Route path="/auth/*" element={<AuthPage />} />
        <Route path="/customer/*" element={<Customer />} />
        <Route path="/admin/customer/*" element={<AdminCustomerPage />} />
        <Route path="/admin/product/*" element={<AdminProductPage />} />
        <Route path="/admin/order/*" element={<AdminOrderPage />} />
        <Route path="/admin/shipment/*" element={<AdminShipmentPage />} />
      </Routes>
    </PageWrapper>
  );
}

export default App;
