import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { onAuthStateChanged, restaurantForm } from './firebase'
import { getDocs } from './firebase'
import cutlery from '../component/cutlery.png'
import diet from '../component/diet.png'
import { Card, Avatar } from 'antd'

const { Meta } = Card

const Home = () => {
  const [Restaurant, setRestaurants] = useState([])
  const navigate = useNavigate()
  const click = () => {
    navigate('/AllDishes')
  }
  useEffect(async () => {
    Restaurants()
    // const time = setTimeout(navigate('/AllDishes'), 3000)
  })
  const Restaurants = async () => {
    const querySnapshot = await getDocs(restaurantForm)
    let allRestaurant = []
    querySnapshot.forEach(doc => {
      // console.log(doc.id, " => ", doc.data());
      allRestaurant.push({ id: doc.id, ...doc.data() })
    })
    setRestaurants(allRestaurant)
  }

  const Uid =async id => {
    navigate(`/AllDishes/${id}`)
    console.log('id agyi haaaa', id)
  }

  return (
    <>
      <h1 className='h'>My All Restaurant</h1>

      <div className='container_event'>
        {Restaurant.map((data, index) => {
          return (
            <Card
              style={{
                width: 250,
                height: 130,
                margin: 16,
                display: 'flex',
                flexWrap: 'wrap',
                display: 'inline-block',
                border: '2px solid black'
              }}
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
                  src={cutlery}
                  alt='food background'
                  style={{ height: 30, width: 30 }}
                />,
                <button onClick={() => Uid(data.id)}>All Dishes</button>
              ]}
              key={index}
            >
              <Meta
                style={{ margin: 'auto' }}
                avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
                title={data.name}
                description={data.city}
                price={data.price}
              />
            </Card>
          )
        })}
      </div>
    </>
  )
}
export default Home

// import React from "react";

// const Home = () => {
//   const [userInfo, setUserInfo] = useState([]);
//   const navigate = useNavigate();

//   useEffect(async () => {
//     getAllDishes();
//   });

//   const getAllDishes = async () => {
//     const querySnapshot = await getDocs(restaurantForm);
//     let AddItem = [];
//     querySnapshot.forEach((doc) => {
//       // console.log(doc.id, " => ", doc.data());
//       AddItem.push({ id: doc.id, ...doc.data() });
//     });
//     setUserInfo(AddItem);
//   };

//   return (
//     <div>
//       <div className="container_event">
//         {eve.map((data, index) => {
//           return (
//             <Card
//               style={{
//                 width: 250,
//                 height: 130,
//                 margin: 16,
//                 display: "flex",
//                 flexWrap: "wrap",
//                 display: "inline-block",
//                 border: "2px solid black",
//               }}
//               cover={
//                 <img
//                   alt="example"
//                   src={data.picture}
//                   className={"event_img"}
//                   style={{
//                     width: 150,
//                     height: 100,
//                     justifyContent: "center !important",
//                     alignItems: "center !important",
//                     margin: "auto",
//                   }}
//                 />
//               }
//               actions={[
//                 <SettingOutlined key="setting" />,

//                 <EllipsisOutlined key="ellipsis" />,
//               ]}
//             >
//               <Meta
//                 style={{ margin: "auto" }}
//                 avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
//                 title={data.name}
//                 description={data.description}
//                 price={data.price}
//               />
//             </Card>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Home;
