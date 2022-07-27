import React, { useState } from "react";
import useCommonServices from "../../Hooks/useCommonServices";
import Loading from "../Shared/Loading";
import Service from "./Service";

const Services = () => {
  const [services] = useCommonServices();
  const [isLoading, setIsLoading] = useState(false) 

  return (
    <div>
      <h1 className="text-4xl my-10 text-bold text-white">Service Tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {services.slice(0,6).map(service => (
        <Service  key={service.id} service={service}></Service>
      ))}
    </div>
    </div>
  );
};

export default Services;
