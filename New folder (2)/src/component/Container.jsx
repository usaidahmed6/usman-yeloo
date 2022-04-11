import React, { useEffect, useState } from 'react'
import img from '../component/img1.jpg'
import img2 from './img2.jpg'
import Button from 'react-bootstrap/Button'
import { Layout, Menu, Breadcrumb } from 'antd'
import './container.css'
import { Link, useNavigate } from 'react-router-dom'
import { Content, Header } from 'antd/lib/layout/layout'
import { Navbar } from 'react-bootstrap'
import { getDocs } from 'firebase/firestore'
import { restaurantForm } from './firebase'

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
}
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!'
  },
  number: {
    range: '${label} must be between ${min} and ${max}'
  }
}

const Container = () => {
  return (
    <>
      <header>
        <div className='mainc'>
          <Link to={'/Home'}>
            <img src={img2} alt='food logo' className='img2' />
          </Link>
          <Link to={'/UserForm'}>
            <Button variant='success' className='but  '>
              User Signup
            </Button>
          </Link>
          <Link to={'/RestaurantForm'}>
            <Button variant='success' className='but '>
              Create Restaurant
            </Button>
          </Link>
          <Link to={'/MainRestaurant'}>
            <Button variant='success' className='but '>
              MainRestaurant
            </Button>
          </Link>
          <Link to={'/RestaurantLogin'}>
            <Button variant='success' className='but  '>
              Restaurant Login
            </Button>
          </Link>
          <Link to={'/AddFood'}>
            <Button variant='success' className='but '>
              Add Dishes
            </Button>
          </Link>

          <Link to={'/ShowRestaurant'}>
            <Button variant='success' className='but '>
              Restaurants
            </Button>
          </Link>
          <Link to={'/ShowUser'}>
            <Button variant='success' className='but '>
              All Users
            </Button>
          </Link>
          <Link to={'/AllDishes'}>
            <Button variant='success' className='but '>
              All Dishes
            </Button>
          </Link>

          <Link to={'/Login'}>
            <Button variant='success' className='but '>
              Login
            </Button>
          </Link>
          <br />
          <br />
        </div>
      </header>
      {/* <img src={img} alt="food background" className="main-img" /> */}
    </>
  )
}
export default Container
