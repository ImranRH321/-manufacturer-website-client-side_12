import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import Loading from "../Shared/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import Order from "./Order";

const Orders = () => {
  const [user] = useAuthState(auth);
  const [deleteOrder, setDeleteOrder] = useState(null);
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery(["orders", user], () =>
    fetch(`https://manufacturers.herokuapp.com/order?email=${user?.email}`, {
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
      <h2 className="text-3xl ">Order page </h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>img</th>
              <th>Specialty</th>
              <th>price</th>
              <th>Cancel</th>
              <th>payment</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, ind) => (
              <Order
                key={order._id}
                order={order}
                ind={ind}
                setDeleteOrder={setDeleteOrder}
              ></Order>
            ))}
          </tbody>
        </table>
      </div>
      {deleteOrder && (
        <DeleteConfirmModal
          deleteOrder={deleteOrder}
          setDeleteOrder={setDeleteOrder}
          refetch={refetch}
        ></DeleteConfirmModal>
      )}
    </div>
  );
};

export default Orders;
