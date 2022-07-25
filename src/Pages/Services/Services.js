import React from "react";
import useCommonServices from "../../Hooks/useCommonServices";
import Service from "./Service";

const Services = () => {
  const [services] = useCommonServices();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {services.slice(0,6).map(service => (
        <Service key={service.id} service={service}></Service>
      ))}
    </div>
  );
};

export default Services;
