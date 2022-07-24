import React, { useEffect } from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, ind, refetch }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => {
        console.log('res', res);
        if(res.status === 401 || res.status===403){
          toast.error('Flied to make an admin ')
        }
      return  res.json()
      })
      .then(data => {
        console.log("user admin row", data);
        if(data.modifiedCount > 0){
          refetch()
          toast.success('successfully admin ')
        }
      
      });
  };
  return (
    <tr>
      <th>{ind + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} class="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>{" "}
      <td>
        <button class="btn btn-xs">Remove</button>
      </td>
    </tr>
  );
};

export default UserRow;
