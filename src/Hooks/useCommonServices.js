import React, { useEffect, useState } from 'react';

const useCommonServices = () => {
    const [services, setServices] = useState([])
    useEffect( () => {
       fetch('https://manufacturers.herokuapp.com/service')
       .then(res =>res.json())
       .then(data => {
        setServices(data)
       }) 
    },[])

    return [services]
};

export default useCommonServices;