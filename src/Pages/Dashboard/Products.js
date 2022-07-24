import React from "react";

const Products = ({ products, ind, setDeleteProduct }) => {
  // const { img, userProductName, price, _id, paid, transactionId } = products;
  const { img, userProductName, price, address, userEmail } = products;

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
      <td className="">{userEmail}</td>
      <td className="">{userProductName}</td>
      <td className="">{price}</td>
      <td>{address}</td>
      <td>
        <label
          onClick={() => setDeleteProduct(products)}
          for="deleted_confirm_modal"
          class="btn btn-xs btn-error"
        >
          Deleted
        </label>
      </td>
    </tr>
  );
};

export default Products;
