import './App.css'
import Register from './component/Register'
import Login from './component/Login'
import Addeve from './component/Addeve'
import { Routes, Route } from 'react-router-dom'
import Home from './component/Home'
import RestaurantForm from './component/RestaurantForm'
import UserForm from './component/UserForm'
import AddFood from './component/AddFood'
import Container from './component/Container'
import ShowRestaurant from './component/ShowRestaurant'
import ShowUser from './component/ShowUser'
import AllDishes from './component/AllDishes'

import Order from './component/Order'
import RestaurantLogin from './component/RestaurantLogin'
import MainRestaurant from './component/MainRestaurant'

function App () {
  return (
    <>
      <ShowRestaurant/>
      {/* <Container/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/RestaurantLogin' element={<RestaurantLogin />} />
        <Route path='/MainRestaurant' element={<MainRestaurant />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Addeve' element={<Addeve />} />
        <Route path='/RestaurantForm' element={<RestaurantForm />} />
        <Route path='UserForm' element={<UserForm />} />
        <Route path='AddFood' element={<AddFood />} /> */}
        {/* <Route path='ShowRestaurant' element={<ShowRestaurant />} /> */}
        {/* <Route path='AllDishes/:id' element={<AllDishes />} />
        <Route path='ShowUser' element={<ShowUser />} />
        <Route path='Order' element={<Order />} />
      </Routes> */}
    </>
  )
}

export default App
