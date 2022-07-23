import React, { useEffect, useState } from "react";
import UserRow from "./UserRow";
// import { useQuery } from "@tanstack/react-query";
// import Loading from "../Shared/Loading";


const MakeAdmin = () => {
  const [users, setUsers] = useState([])
  /* 
  const { data: users, isLoading } = useQuery("user", () =>
    fetch("http://localhost:5000/user").then(res => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log("user", users);
   */

  useEffect(()=> {
    fetch('http://localhost:5000/user').then(res => res.json()).then(data => {
      setUsers(data) 
     })
  },[])
  return (
    <div>
      <h1 className="text-2xl">{users?.length}</h1>
      <h1 className="text-2xl">helo now</h1>
      <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Admin</th>
        <th>Remove</th>
      </tr>
    </thead>
    <tbody>
     {
      users.map((user, ind) => <UserRow key={user._id}
      user={user}
      ind={ind}
      ></UserRow>)
     }
    </tbody>
  </table>
</div>
    </div>
  );
};

export default MakeAdmin;
