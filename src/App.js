import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ForgetPassword from './Componets/Authentication/ForgetPassword/ForgetPassword';
import NewPassword from './Componets/Authentication/ForgetPassword/NewPassword';
import Login from './Componets/Authentication/Login/Login';
import Register from './Componets/Authentication/Register/Register';
import NoMatch from './Componets/NoMatch/NoMatch';
import Brands from './Componets/Pages/Brands/Brands';
import BikeFullDetails from './Componets/Pages/Home/BikeShop/BikeFullDetails';
import BikeShopDetails from './Componets/Pages/Home/BikeShop/BikeShopDetails';
import CategoryDetails from './Componets/Pages/Home/Category/CategoryDetails';
import Home from './Componets/Pages/Home/Home';
import Showroom from './Componets/Pages/Showroom/Showroom';
import ShowRoomCart from './Componets/Pages/Showroom/ShowRoomCart';
import Upcoming from './Componets/Pages/Upcoming/Upcoming';
import Profile from './Componets/Profile/Profile';
import ScrollToTop from './Componets/ScrollToTop/ScrollToTop';
import Footer from './Componets/Shared/Footer/Footer';
import Navbar from './Componets/Shared/Navbar/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* All Pages Start */}
        <Route path='/' element={<Home />}></Route>
        <Route path='/showroom' element={<Showroom />}></Route>
        <Route path='/brand' element={<Brands />}></Route>
        <Route path='/upcoming' element={<Upcoming />}></Route>


        {/* All Details Pages  */}
        <Route path='/bike-details/:id' element={<BikeShopDetails />}></Route>
        <Route path='/bike-full-details/:id' element={<BikeFullDetails />}></Route>
        <Route path='/brand/:cat' element={<CategoryDetails />}></Route>
        <Route path='/showroomlocation/:subBrand' element={<ShowRoomCart />}></Route>

        {/* Authentication User */}
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/forgetPassword' element={<ForgetPassword />}></Route>
        <Route path='/resetNewPassword' element={<NewPassword />}></Route>

        {/* No Match Pages  */}
        <Route path='*' element={<NoMatch />}></Route>

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;