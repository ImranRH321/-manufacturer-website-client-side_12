import React from "react";
import UserRow from "./UserRow";

import Loading from "../Shared/Loading";
import { useQuery } from "@tanstack/react-query";

const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery(["user"], () =>
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then(res => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
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
            {users?.map((user, ind) => (
              <UserRow
                key={user._id}
                user={user}
                ind={ind}
                refetch={refetch}
              ></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
