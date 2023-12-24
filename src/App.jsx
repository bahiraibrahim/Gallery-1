import Home from './pages/Home/Home'
import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import NavbarLogin from "../../gelary/src/compunant/Utility/NavbarLogin.jsx"
import Footer from "../../gelary/src/compunant/Utility/Footer.jsx"
import LoginPage from './pages/Home/Auth/LoginPage.jsx'
import CartPage from './pages/cart/CartPage.jsx'
import RegisterPage from './pages/Home/Auth/RegisterPage.jsx'
import AllBrand from './pages/Brand/AllBrandPage.jsx'
import ShopProducts1 from './pages/Products/ShopProducts1.jsx'
import ShopProducts2 from './pages/Products/ShopProducts2.jsx'


function App() {
  return (
    <div className='font'>
    <NavbarLogin/>
    <BrowserRouter>
    <Routes>
    <Route index element={<Home/>}/>
    <Route path='/login' element={ <LoginPage/> }/>
    <Route path='/register' element={ <RegisterPage/> }/>
    <Route path='/cart' element={ <CartPage/> }/>
    <Route path='/allcategory' element={ <ShopProducts1/> }/>
    <Route path='/allbrand' element={ <AllBrand/> }/>
    <Route path='/shop-products' element={ <ShopProducts2/> }/>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  )
}

export default App
