import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Custom from './pages/Custom';
import Best from './pages/Best';
import Order from './pages/Order';
import Product from './pages/Product';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Search from './pages/Search';
import Category from './pages/Category';
import Cart from './pages/Cart';
import OrderStatus from './pages/OrderStatus';


function App() {
  return (
    <BrowserRouter>
      <div className = "App">
        <Routes>
          <Route path="/" element={ < Main/> } />
          <Route path="/custom" element={ <Custom /> } />
          <Route path="/best" element={ <Best /> }/>
          <Route path="/order" element={ <Order /> }/>
          <Route path="/product" element={ <Product/> }/>
          <Route path="/signup" element={ <Signup/> }/>
          <Route path="/login" element={ <Login/> }/>
          <Route path="/search" element={ <Search/> }/>
          <Route path="/category" element={ <Category/> }/>
          <Route path="/order-status" element={ <OrderStatus/> }/>
          <Route path="/cart" element={ <Cart/> }/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
