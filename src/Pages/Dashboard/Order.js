import React from "react";

const Order = ({ order, ind, setDeleteOrder }) => {
  const { img, userProductName, price } = order;
  return (
    <tr>
      <th>{ind}</th>
      <th>
        <div class="avatar">
          <div class="mask mask-squircle w-12 h-12">
            <img src={img} alt="" />
          </div>
        </div>
      </th>
      <td></td>
      <td>{userProductName}</td>
      <td>Price: {price}</td>
      <td>
        <label
          onClick={() => setDeleteOrder(order)}
          for="deleted_confirm_modal"
          class="btn btn-xs btn-error"
        >
          Deleted
        </label>
      </td>
    </tr>
  );
};

export default Order;
