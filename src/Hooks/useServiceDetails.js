import React, { useEffect, useState } from 'react';

const useServiceDetails = serviceId => {
    const [services, setServices] = useState({})
    useEffect( () => {
        const url = `http://localhost:5000/service/${serviceId}`
       fetch(url)
       .then(res =>res.json())
       .then(data => {
        setServices(data)
       }) 
    },[serviceId])

    return [services]
};

export default useServiceDetails;