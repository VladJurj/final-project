
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import Footer from './Components/Footer/Footer';
import Product from './Pages/Product';
import banner from './Components/Assets/back.png.png';
import AboutUs from './Pages/AboutUs';





function App() {
  return (
    <div>
      <BrowserRouter>

<Navbar/>
<Routes>
  <Route path='/' element={<Shop/>}/>
  <Route path='/butterfly' element={<ShopCategory banner={banner} category="butterfly"/>}/>
  <Route path='/flame' element={<ShopCategory banner={banner} category="flame"/>}/>
  <Route path="/product" element={<Product/>}>
    <Route path=':productId' element={<Product/>}/>
  </Route>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/login' element={<LoginSignup/>}/>
<Route path='about us' element={<AboutUs/>}/>
</Routes>
<Footer/>


</BrowserRouter>
    </div>
  );
}

export default App;

