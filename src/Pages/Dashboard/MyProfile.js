import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";

const MyProfile = () => {
  const { register, handleSubmit, reset } = useForm();
  const [user] = useAuthState(auth);
  const [data, setData] = useState({});

  const onSubmit = data => {
    console.log(data);
    reset();
    console.log("data", data);
    fetch(`http://localhost:5000/myProfile?email=${user?.email}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log("Success:", data);
      });

    //====================
    fetch("http://localhost:5000/myProfile")
      .then(response => response.json())
      .then(data => {
        console.log("Success:", data);
        setData(data[0]);
      });

    // ===========================
  };

  return (
    <div>
      <h1 className="text-3xl text-purple-600 font-bold w-2/3 p-3 my-3 rounded-full mx-auto">
        Update Your Profile
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center ">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <input
            class="input input-bordered w-full max-w-xs font-bold m-2"
            {...register("name")}
            type="text"
            value={user?.displayName}
            required
          />
          <input
            class="input input-bordered w-full max-w-xs font-bold m-2"
            placeholder="Your email"
            type="email"
            {...register("email")}
            value={user?.email}
            required
          />
          <input
            class="input input-bordered w-full max-w-xs m-2"
            placeholder="Location Here.."
            type="text"
            {...register("location")}
            required
          />
          <input
            class="input input-bordered w-full max-w-xs m-2"
            placeholder="Linkedin Frofile Link "
            type="url"
            {...register("linkedin")}
            required
          />
          <input
            class="input input-bordered w-full max-w-xs m-2"
            placeholder="Phone Here.."
            type="number"
            {...register("phone")}
            required
          />
          <input
            type="submit"
            value="UpdateProfile"
            class="input bg-purple-600 text-white font-bold text-lg input-bordered w-full max-w-xs"
          />
        </form>
        <div>
          <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body ">
              <div className="font-bold p-5 text-start">
                <h2>name: {data.name}</h2>
                <p>Email: {data.email}</p>
                <p>
                  <span>Linkedin: {data.linkedin}</span>
                </p>
                <p>location: {data.location}</p>
                <p>Phone: {data.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
