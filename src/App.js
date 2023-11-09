
import './App.css';
import Cart from './components/Cart';
import Login from './components/Login';
import Productdetail from './components/Productdetail';
import Products from './components/Products';
import { Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Routes>
        <Route path='/' element={<Login>  </Login>}></Route>
        <Route path='/view-products/:id' element={<Products/>}></Route>
        <Route path='/view-details/:id' element={<Productdetail/>}></Route>
        <Route path='/view-cart/:id' element={<Cart/>}></Route>

  </Routes> 

    </div>
  );
}

export default App;
