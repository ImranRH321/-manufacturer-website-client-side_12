import React from "react";
import { toast } from "react-toastify";

const Products = ({ products, ind, setDeleteProduct }) => {
  const { img, userProductName, price, address, userEmail, paid, status, _id } =
    products;

  const makeShippedButton = statusText => {
    alert("are you sure update order shipped");
    fetch(`https://manufacturers.herokuapp.com/paymentConfirm/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ statusText }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.modifiedCount) {
          toast.success(`successfully is Deleted`);
        }
      });
  };
  return (
    <tr className="text-black">
      <th>{ind}</th>
      <th>
        <div class="">
          <div class="w-16 mask mask-circle bg-yellow-300">
            <img src={img} alt="" />
          </div>
        </div>
      </th>
      <td className="font-bold">{address}</td>
      <td className="">
        <>
          <span className="font-bold">{userProductName} </span>
        </>
      </td>

      <td className="">
        <span className="font-bold">${price}</span>
      </td>
      <td className="font-bold text-primary">{status}</td>

      <td>
        {status === "pending" ? (
          <button
            onClick={() => makeShippedButton("shipped")}
            className="btn btn-outline btn-success btn-sm px-4 text-black"
          >
            make shipped
          </button>
        ) : status === "shipped" ? (
          <button className="  btn btn-success btn-sm capitalize">order shipped</button>
        ) : (
          <label
            onClick={() => setDeleteProduct(products)}
            for="deleted_confirm_modal"
            class="btn btn-xs btn-error  mt-9"
          >
            deleted
          </label>
        )}
      </td>
    </tr>
  );
};

export default Products;
