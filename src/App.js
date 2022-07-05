import Header from "./components/Header";
import Carousel from './components/Carousel';
import Categories from "./components/Categories";
import Brands from "./components/Brands";
import TopRatingProducts from './components/TopRatingProducts';
// import Login from './views/Login';
import Regis from "./views/Regis";
import Order from "./views/admin/Order";
import OrderDetail from "./views/admin/OrderDetail";
import AdminLogin from './views/admin/AdminLogin';


function App() {
  return (
    <div className="App">
      {/* <AdminLogin/> */}
      <Order/>
      {/* <OrderDetail/> */}
    </div>
  );
}



export default App;
