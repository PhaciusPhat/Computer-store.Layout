import Regis from "./views/Regis";
import AdminOrder from "./views/admin/orders/Order";
import AdminOrderDetail from "./views/admin/orders/OrderDetail";
import Login from "./views/Login";
import AdminLogin from './views/admin/AdminLogin';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminAccount from './views/admin/Account/Account';
import AdminCate from "./views/admin/Cate/Cate";
import AdminEditCate from "./views/admin/Cate/EditCate";
import AdminBrand from './views/admin/Brand/Brand';
import AdminEditBrand from './views/admin/Brand/EditBrand';
import AdminProduct from './views/admin/product/Product';
import AdminEditProduct from "./views/admin/product/EditProduct";
import Protected__route from "./routes/Protected__route";
import Home from "./views/Home";
import ProductDetail from './views/ProductDetail';
import Products from "./views/Products";
import "./asset/style.css"
import "./asset/bootstrap.min.css"
import "./asset/bootstrap-grid.min.css"
import "./asset/bootstrap-reboot.min.css"
import Cart from "./views/Cart";
import Account from "./views/Account";
import OrderDetail from "./views/OrderDetail";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/admin-login" element={
            <AdminLogin />} />
          <Route path="/regis" element={
            <Regis />} />
          <Route path="/" element={<Home />} />
          <Route path="/public/product/:id" element={<ProductDetail />} />
          <Route path="/public/product" element={<Products />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/public/account" element={<Account/>}/>
          <Route path="/public/order/:id" element={<OrderDetail/>}/>
          <Route element={<Protected__route />}>
            {/* client */}


            {/* admin */}
            <Route path="/order" element={
              <AdminOrder />} />
            <Route path="/order/:id" element={
              <AdminOrderDetail />} />
            <Route path="/login" element={
              <AdminLogin />} />
            <Route path="/account" element={
              <AdminAccount />} />
            <Route path="/cate" element={
              <AdminCate />} />
            <Route path="/cate/:id" element={
              <AdminEditCate />} />
            <Route path="/brand" element={
              <AdminBrand />} />
            <Route path="/brand/:id" element={
              <AdminEditBrand />} />
            <Route path="/product" element={<AdminProduct />}>
            </Route>
            <Route path="/product/:id" element={<AdminEditProduct />}>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>);
}



export default App;


