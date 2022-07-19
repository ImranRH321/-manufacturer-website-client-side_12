import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCommonServices from "../../firebase/Hooks/useCommonServices";

const ServicesDetails = () => {
  const [services] = useCommonServices();
  const [details, setDetails] = useState({})
  let {  userId } = useParams();
  console.log("id", userId)

    useEffect( () => {
       fetch('/services.json')
       .then(res =>res.json())
       .then(data => {
        console.log(data ,'data'); 
        const newData = data.find(sr => console.log(sr.id == userId)); 
        console.log('find', newData);
        // setDetails(newData)
       }) 
    },[userId])

console.log('details', details);
  return (
    <div>
      <h1 className="text-4xl">all {userId}</h1>
    </div>
  );
};

export default ServicesDetails;
