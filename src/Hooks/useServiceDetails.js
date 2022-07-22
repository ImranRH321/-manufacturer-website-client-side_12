import React, { useEffect, useState } from "react";

const useServiceDetails = serviceId => {
  const [services, setServices] = useState({});
  useEffect(() => {
    const url = `https://manufacturers.herokuapp.com/service/${serviceId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setServices(data[0]);
      });
  }, [serviceId]);

  return [services];
};

export default useServiceDetails;
