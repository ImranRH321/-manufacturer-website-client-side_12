import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);
    reset();
    fetch("https://manufacturers.herokuapp.com/addProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(result => {
        console.log("Success:", result);
        toast.success("successfully added");
      });
  };
  return (
    <div>
      <h1 className="text-3xl text-purple-600 font-bold w-2/3 p-3 my-3 rounded-full mx-auto">
        Add to Product Tools
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-4 justify-items-center "
      >
        <input
          class="input input-bordered w-full max-w-xs"
          placeholder="Tool name"
          type="text"
          {...register("name")}
          required
        />
        <input
          class="input input-bordered w-full max-w-xs"
          placeholder="image url link"
          type="img-url"
          {...register("img")}
          required
        />
        <input
          class="input input-bordered w-full max-w-xs"
          placeholder="Your minimum Quantity"
          type="number"
          {...register("minimumQuantity")}
          required
        />
        <input
          class="input input-bordered w-full max-w-xs"
          placeholder="available Quantity"
          type="number"
          {...register("availableQuantity")}
          required
        />

        <input
          class="input input-bordered w-full max-w-xs"
          placeholder="Price"
          type="number"
          {...register("price")}
          required
        />
        <input
          class="input input-bordered w-full max-w-xs"
          placeholder="description here"
          type="text"
          {...register("description")}
          required
        />
        <input
          type="submit"
          value="AddProduct"
          class="input bg-purple-600 text-white font-bold text-2xl input-bordered w-full max-w-xs"
        />
      </form>
    </div>
  );
};

export default AddProduct;
