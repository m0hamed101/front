import './App.css';
import { Home } from './Home/Home';
import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Shop } from './pages/menupage/shop';
import { Item } from './pages/itempage/item';
import { Contact } from './pages/contact/contact';



function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/:id' element={<Item />} />

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
