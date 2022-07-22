import React, { useEffect } from "react";

const useTokenUser = user => {
  console.log(user, "==============");
  const email = user?.user?.email;
  const sameUser = { email: email };

  useEffect(() => {
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
          console.log("Success:", data);
        });
    }
  }, [user]);
};

export default useTokenUser;
