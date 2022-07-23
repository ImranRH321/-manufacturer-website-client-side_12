import React from "react";

const NotFound = () => {
  const bgColors = {
    background: 'https://htmldemo.net/lukas/lukas/assets/img/banner/a-1.jpg',
    color: "white",
    width: "100%",
    height: "91vh",
  };

  const bgM = {
    paddingTop: "155px",
  };
  return (
    <div style={bgColors}>
      <div style={bgM}>
        <h1 className="text-9xl  font-bold pt-0">405</h1>
        <h1 className="text-5xl  font-bold pt-5">Method Not Allowed</h1>
      </div>
    </div>
  );
};

export default NotFound;
