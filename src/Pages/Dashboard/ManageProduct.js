import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Shared/Loading";
import Products from "./Products";
import DeleteManageProduct from "./DeleteManageProduct";
/* 
১। যখন ইউজার  অর্ডার করবে তখন স্ট্যাটাস আনপেইড 
২। যখন পেমেন্ট করবে তখন স্ট্যাটাস পেন্ডিং 
৩। যখন এডমিন শিপ করবে তখন স্ট্যাটাস শিপড
*/
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
      {/* <h2 className="text-2xl">all manageProducts {manageProducts?.length}</h2> */}
      <table class="table w-full ">
          <thead>
            <tr className="text-black">
              <th></th>
              <th>Img</th>
              <th>Address</th>
              <th>Name</th>
              <th>Price</th>
              <th>Shipped</th>
              <th>Product</th>
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
