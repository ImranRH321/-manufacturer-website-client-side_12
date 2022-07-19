import React, { useEffect, useState } from 'react';
import useCommonServices from '../../firebase/Hooks/useCommonServices';
import Service from './Service';

const Services = () => {
    // const [services, setServies] = useState([])
    // useEffect( () => {
    //    fetch('services.json')
    //    .then(res =>res.json())
    //    .then(data => {
    //     setServies(data)
    //    }) 
    // },[])
 const  [services] =  useCommonServices()
 console.log('servies', services);
    return (
        <div className='grid md:grid-cols-3 gap-5'>
            {/* <h2>SErvies {services.length}</h2> */}
        {
            services.map(service => <Service key={service.id}
            service={service}
            ></Service>)
        }
        </div>
    );
};

export default Services;