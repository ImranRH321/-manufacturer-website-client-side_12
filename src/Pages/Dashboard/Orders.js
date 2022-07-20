import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import Loading from "../Shared/Loading";

const Orders = () => {
  const [user] = useAuthState(auth);
  const { data: orders, isLoading } = useQuery(["orders", user], () =>
    fetch(`http://localhost:5000/order?email=${user?.email}`).then(res =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-3xl ">Order page </h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Product</th>
              <th>userName</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, ind) => (
              <tr>
                <th>{ind + 1}</th>
                <th>{order.userEmail}</th>
                <td>{order.userProductName}</td>
                <td>{order.userName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
