import './App.css';
import { Home } from './Home/Home';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Shop } from './pages/menupage/shop';
import { Item } from './pages/itempage/item';
import { Contact } from './pages/contact/contact';



function App() {
  const api = "https://drinks-shop-a23d.onrender.com"
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
        <Route exact path='/' element={<Home api={api} />} />
        <Route path='/shop' element={<Shop api={api} />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/:id' element={<Item />} />
        
        </Routes>
        </BrowserRouter>
        
        
        </div>
        );
      }
      
      export default App;
