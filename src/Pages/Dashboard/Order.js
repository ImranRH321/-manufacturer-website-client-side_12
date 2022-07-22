import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Order = ({ order, ind, setDeleteOrder }) => {
  const { img, userProductName, price, _id, paid, transactionId } = order;
  const navigate = useNavigate();

  const handlePayment = id => {
    navigate(`/dashboard/payment/${id}`);
  };

  return (
    <tr>
      <th>{ind}</th>
      <th>
        <div class="bg-neutral-focus text-neutral-content rounded-full w-24">
            <div class="w-24 mask mask-triangle">
            <img src={img} alt="" />
            </div>
          </div>
      </th>
      <td></td>
      <td>{userProductName}</td>
      <td>Price: {price}</td>
      <td>
        {!paid && (
          <label
            onClick={() => setDeleteOrder(order)}
            for="deleted_confirm_modal"
            class="btn btn-xs btn-error"
          >
            Deleted
          </label>
        )}
      </td>
      <td>
        {price && !paid && (
          <button
            onClick={() => handlePayment(_id)}
            class="btn btn-xs btn-black"
          >
            Pay
          </button>
        )}

        {price && paid && (
          <div>
            <p>
              <p className="text-purple-500 font-bold">Paid</p>
              <p className="text-red-500 font-bold">TransactionId:</p>
              <p className="text-success font-bold">{transactionId}</p>
            </p>
          </div>
        )}
      </td>
    </tr>
  );
};

export default Order;
