import React from "react";
import Loading from "../Shared/Loading";
import { useQuery } from "@tanstack/react-query";
import AllManageSingleProduct from "./AllManageSingleProduct";

const AllProducts = () => {
  const {
    data: allProducts,
    isLoading,
    refetch,
  } = useQuery(["product"], () =>
    fetch("http://localhost:5000/allProducts", {
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
      <h1 className="text-3xl text-white  my-10 font-bold uppercase">
        all products {allProducts?.length}
      </h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr className="text-black">
              <th></th>
              <th>img</th>
              <th>Name</th>
              <th>Price</th>
              <th>minimumQuantity</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((product, i) => (
              <AllManageSingleProduct
                key={product._id}
                product={product}
                refetch={refetch}
              ></AllManageSingleProduct>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;
