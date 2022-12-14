import React, { useEffect, useState } from "react";

const useAdmin = user => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true)
  useEffect(() => {
    const email = user?.email;
    console.log("userAdmin", email);
    if (email) {
      fetch(`https://manufacturers.herokuapp.com/admin/${email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then(response => response.json())
        .then(data => {
          console.log("useAdmin data", data);
          setAdmin(data.admin);
          setAdminLoading(false)
        });
    }
  }, [user]);
  return [admin, adminLoading];
};

export default useAdmin;
