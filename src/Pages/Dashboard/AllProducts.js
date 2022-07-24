import React from "react";
import Loading from "../Shared/Loading";
import { useQuery } from "@tanstack/react-query";

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
  console.log(allProducts);
  /* ====================handle_deleted================= */
  const handleDeleted = id => {
    console.log('di', id);
    alert("hoi koi ")
    fetch(`http://localhost:5000/allProducts/${id}`).then(res => res.json().then(data => {
      console.log('data', data);
    }))
  }
  return (
    <div>
      <h1 className="text-5xl text-primary m-7">all products Deleted korle delete hoy na pore korbo !!!! </h1>
      <h1>all products {allProducts?.length}</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>img</th>
              <th>Name</th>
              <th>Price</th>
              <th>minimumQuantity</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((pd, i) => (
              <tr>
                <th>{i}</th>
                <td>
                  <div class="avatar rounded-full bg-info p-5">
                    <div class="mask mask-squircle w-20 h-20 ">
                      <img src={pd.img} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </td>
                <td className="font-bold">{pd.name}</td>
                <td>${pd.price}</td>
                <td>Quantity: {pd.minimumQuantity}</td>
                <td><button onClick={()=>handleDeleted(pd._id)} class="btn btn-error">Cancel</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;
