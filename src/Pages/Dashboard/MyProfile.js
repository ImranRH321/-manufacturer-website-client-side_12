import React from "react";
import { useForm } from "react-hook-form";

const MyProfile = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);
    reset();
    fetch("https://manufacturers.herokuapp.com/myProfile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(result => {
        console.log("Success:", result);
      });
  };
  return (
    <div>
      <h1 className="text-2xl bg-purple-600 text-white font-bold w-2/3 p-3 my-3 rounded-full mx-auto">
        Update Your Profile
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-4 justify-items-center "
      >
        <input
          class="input input-bordered w-full max-w-xs"
          placeholder="your name"
          type="text"
          {...register("name")}
          required
        />
        <input
          class="input input-bordered w-full max-w-xs"
          placeholder="Your email"
          type="email"
          {...register("email")}
          required
        />
        <input
          class="input input-bordered w-full max-w-xs"
          placeholder="Location Here.."
          type="text"
          {...register("location")}
          required
        />
        <input
          class="input input-bordered w-full max-w-xs"
          placeholder="Linkedin Frofile Link "
          type="img"
          {...register("linkedin")}
          required
        />
        <input
          class="input input-bordered w-full max-w-xs"
          placeholder="Phone Here.."
          type="number"
          {...register("phone")}
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

export default MyProfile;
