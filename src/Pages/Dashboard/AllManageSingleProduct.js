import React from "react";
import { toast } from "react-toastify";

const AllManageSingleProduct = ({ product, i, refetch }) => {
  const { img, name, minimumQuantity, _id, price } = product;
  const deleteSingleItem = _id => {
    fetch(`https://manufacturers.herokuapp.com/allProduct/${_id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
        console.log("del", data);
        if (data.deletedCount) {
          toast.success(`${name} is Deleted`);
          refetch();
        }
      });
  };
  return (
    <tr className="text-black">
      <th>{i}</th>
      <td>
        <div class="avatar rounded-full bg-info p-5">
          <div class="mask mask-squircle w-20 h-20 ">
            <img src={img} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td className="font-bold">{name}</td>
      <td className="font-bold">Price: ${price}</td>
      <td className="font-bold">Quantity: {minimumQuantity}</td>
      <td>
        <button onClick={() => deleteSingleItem(_id)} class="btn btn-error text-white">
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default AllManageSingleProduct;
