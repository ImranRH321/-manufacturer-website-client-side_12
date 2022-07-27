import React, { useEffect, useState } from "react";

const useServiceDetails = serviceId => {
  const [services, setServices] = useState({});
  const [isLoading, setIsLoading] = useState(true) 
  useEffect(() => {
    setIsLoading(true)
    const url = `https://manufacturers.herokuapp.com/service/${serviceId}`;
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        setServices(data[0]);
        setIsLoading(false)
      });
  }, [serviceId]);

  return [services, isLoading];
};

export default useServiceDetails;
