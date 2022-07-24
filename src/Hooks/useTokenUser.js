import React, { useEffect, useState } from "react";

const useTokenUser = user => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const email = user?.user?.email;
    const sameUser = { email: email };
    console.log(email, sameUser);
    if (email) {
      fetch(`https://manufacturers.herokuapp.com/user?email=${email}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sameUser),
      })
        .then(response => response.json())
        .then(data => {
          const token = data.token;
          localStorage.setItem("token", token);
          setToken(token);
        });
    }
  }, [user]);

  return [token];
};

export default useTokenUser;
