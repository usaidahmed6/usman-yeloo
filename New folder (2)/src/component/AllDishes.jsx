import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AddDishes, db, onAuthStateChanged, restaurantForm, userRef4 } from './firebase'
import { getDocs } from './firebase'
import { Card, Avatar } from 'antd'
import { Spin, Space } from 'antd'
import bibi from '../component/bibimbap.png'
import salad from '../component/salad.png'
import { addDoc, doc, getDoc, query, where } from 'firebase/firestore'

const { Meta } = Card
let resturantsUid
const AllDishes = () => {
  const [eve, setEve] = useState([])
  const [FoodDish, setFoodDish] = useState([])

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const params = useParams()
  const getUidRestaurant = doc(db, 'restaurantForms', params.id)
  console.log('params=====>', params.id)
  useEffect(async () => {
    getMYDish()
  }, [])
  const getMYDish = async () => {
    const dishes = await getDoc(getUidRestaurant)
    console.log('object of restaurent=>', dishes.data().uid)
    resturantsUid = dishes.data().uid
    console.log('uidddd==>', resturantsUid)

    const q = query(AddDishes, where('uid', '==', resturantsUid))

    const querySnapshot = await getDocs(q)
    let dish = []
    querySnapshot.forEach(doc => {
      dish.push({ id: doc.id, ...doc.data() })
    })
    setFoodDish(dish)
    console.log('============', FoodDish)
  }

  const order = (e) => {
    console.log("click order", e)
    console.log("click name", e.name)
    console.log("click order", e.uid)
    console.log("click order", e.picture)
    console.log("click order", e.price)
    if (e) {
     const obj = {
        orderName: e.name,
        orderUid: e.uid,
        orderPicture: e.picture,
        orderPrice: e.price,
      }
      addDoc(userRef4, obj)
    }

  }

  return (
    <>
      <h1 className='h'>My All Dishes</h1>

      <div className='container_event'>
        {FoodDish.map((data, index) => {
          return (
            <Card
              className='card'
              key={index}
              style={{
                width: 250,
                height: 130,
                margin: 16,
                display: 'flex',
                flexWrap: 'wrap',
                display: 'inline-block'

              }

              }
              cover={
                <img
                  alt='example'
                  src={data.picture}
                  className={'event_img'}
                  style={{
                    width: 250,
                    height: 130,
                    justifyContent: 'center !important',
                    alignItems: 'center !important',
                    margin: 'auto'
                  }}
                />
              }
              actions={[
                <img
                  src={bibi}
                  alt='food background'
                  style={{ height: 30, width: 30 }}
                />,

                <button onClick={() => order(data)}>Order Now</button>
              ]}
            >
              <Meta
                className='meta'
                style={{ margin: 'auto' }}
                avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
                title={data.name}
              // description={data.city}
              // price={data.price}
              />
            </Card>
          )
        })}
      </div>
    </>
  )
}
export default AllDishes
