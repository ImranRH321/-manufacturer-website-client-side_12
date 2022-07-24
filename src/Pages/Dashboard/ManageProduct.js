import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Shared/Loading";
import Products from "./Products";
import DeleteManageProduct from "./DeleteManageProduct";

const ManageProduct = () => {
  const [deleteProduct, setDeleteProduct] = useState(null);
  const {
    data: manageProducts,
    isLoading,
    refetch,
  } = useQuery(["manage"], () =>
    fetch(`https://manufacturers.herokuapp.com/manage`, {
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
      <h2 className="text-2xl">all manageProducts {manageProducts?.length}</h2>
      <table class="table w-full m-4">
          <thead>
            <tr>
              <th></th>
              <th>img</th>
              <th>email</th>
              <th>name</th>
              <th>price</th>
              <th>address</th>
            </tr>
          </thead>
          <tbody>
            {manageProducts?.map((products, ind) => (
              <Products
                key={products._id}
                products={products}
                ind={ind}
                setDeleteProduct={setDeleteProduct}
              ></Products>
            ))}
          </tbody>
        </table>
        {
          deleteProduct && <DeleteManageProduct
          deleteProduct={deleteProduct}
          refetch={refetch}
          setDeleteProduct={setDeleteProduct}
          ></DeleteManageProduct>
        }
    </div>
  );
};

export default ManageProduct;
