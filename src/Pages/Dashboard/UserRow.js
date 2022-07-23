import React, { useEffect } from "react";

const UserRow = ({ user, ind }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
    })
      .then(res => res.json())
      .then(data => {
        console.log("data", data);
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
