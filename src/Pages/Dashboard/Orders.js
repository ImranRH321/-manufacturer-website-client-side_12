import React, { useEffect, useState } from 'react';

const Orders = () => {

    const [orders, setOrders] = useState([])
    useEffect( () =>{
        fetch('')
        .then(res => res.json())
        .then(data => {
            setOrders(data)
        })
    },[])
    return (
        <div>
            <h2 className='text-3xl '>Order page </h2>
        </div>
    );
};

export default Orders;