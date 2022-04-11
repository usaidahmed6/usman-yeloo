import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AddDishes, userRef4 } from './firebase'
import { getDocs, auth } from './firebase'
import { Card, Avatar } from 'antd'
import { query, where } from 'firebase/firestore'



const MainRestaurant = () => {
    const params = useParams()
    const [item, setItem] = useState([])
    const [orderNow, setorderNow] = useState([])
    const { Meta } = Card
    console.log(params)


    useEffect(async () => {
        Restaurant()
        orderNows()
    }, [])


    const Restaurant = (async () => {
        const q = query(AddDishes, where("uid", "==", auth.currentUser.uid))

        const querySnapshot = await getDocs(q);
        // const querySnapshot = await getDocs(AddDishes)
        let ShowRestaurant = []
        querySnapshot.forEach(doc => {
            ShowRestaurant.push({ id: doc.id, ...doc.data() })
        })
        setItem(ShowRestaurant)
    })

    const orderNows = (async () => {
        console.log('============================================', auth.currentUser.uid);
        console.log('agaya order===>')
        const q = query(userRef4, where("uid", "==", auth.currentUser.uid))

        const querySnapshot = await getDocs(q);
        // const querySnapshot = await getDocs(AddDishes)
        let order = []
        querySnapshot.forEach(doc => {
            order.push({ id: doc.id, ...doc.data() })

            console.log(orderNow)
        })
        setorderNow(order)
    })

   
    return (
        <>
            <div>
                <h1 className='h'> Dash Board</h1>
                <Link to={'/AddFood'}>
                    <button>Add Dishes</button>
                </Link>
                <br /> <br />
                <Link to={'/Order'}>
                    <button>My Order</button>
                </Link>
                <div className='container_event'>
                    {item.map((data, index) => {
                        return (
                            <Card
                                key={index}
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
                                actions={
                                    [
                                        // <img
                                        //   src={cutlery}
                                        //   alt='food background'
                                        //   style={{ height: 30, width: 30 }}
                                        // />,
                                        // <img
                                        //   src={diet}
                                        //   alt='food background'
                                        //   style={{ height: 30, width: 30 }}
                                        //   onClick={click}
                                        // />
                                    ]
                                }
                            >
                                <Meta
                                    style={{ margin: 'auto' }}
                                    avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
                                    title={data.name}
                                    price={data.price}
                                />
                                   <span>{data.price}</span>
                            </Card>
                                   
                                   )
                                })}
                </div>
                {/* <div className='container_event'>
                    {orderNow.map((data, index) => {
                        return (
                            <Card
                                className='card'
                                style={{
                                    width: 250,
                                    height: 130,
                                    margin: 16,
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    display: 'inline-block'
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
                            //   actions={[
                            //     <img
                            //       src={bibi}
                            //       alt='food background'
                            //       style={{ height: 30, width: 30 }}
                            //     />,
                            //     <Link to={"/Order"}>
                            //     <button>Order Now</button>
                            //     </Link>
                            //   ]}
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
                </div> */}
            </div>
        </>
    )
}
export default MainRestaurant
