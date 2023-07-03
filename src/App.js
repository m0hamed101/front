import './App.css';
import { Home } from './Home/Home';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shop } from './pages/shop_page/shop_page';
import { Item } from './pages/itempage/item';
import { Contact } from './pages/contact/contact';


import { useAuthContext } from './form/formhook/useAuthContext'



// pages & components
// import Home from './pages/Home'
import Login from '../src/form/formpage/Login'
import Signup from '../src/form/formpage/Signup'
import { Cart } from './pages/cart/cart';
// import { Headerpo } from './Header/Headerpo/Headerpo';



function App() {
  const { user } = useAuthContext()
  const api = "https://drinks-shop-a23d.onrender.com"
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home api={api} />} />
          <Route path='/shop' element={<Shop api={api} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/:id' element={<Item api={api} />} />
          <Route path='/cart' element={<Cart />} />

          <Route path="/login" element={!user ? <Login /> : <Home api={api} />} />
          <Route path="/signup" element={!user ? <Signup /> : <Home api={api} />} />

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;

// <Route exact path="/" element={user ? <Login api={api} /> : <Headerpo to="/login" />} />
