import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const { register, handleSubmit, reset } = useForm();
  const [user] = useAuthState(auth);
  const [data, setData] = useState({});

  const onSubmit = data => {
    console.log(data);
   
    // console.log("data", data);
    fetch(`https://manufacturers.herokuapp.com/myProfile?email=${user?.email}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        reset();
        refetch()
      });

  };

  // useEffect(()=> {
  //   fetch(`https://manufacturers.herokuapp.com/myProfile/${user?.email}`)
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log("success:", data);
  //     setData(data);
  //   });
  //  },[user])

  // //  ============ 
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery(["profile", user], () =>
    fetch(`https://manufacturers.herokuapp.com/myProfile/${user?.email}`, {
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
                <h2>name: {users.name}</h2>
                <p>Email: {users.email}</p>
                <p>
                  <span>Linkedin: {users.linkedin}</span>
                </p>
                {/* <p>location: {users.location}</p> */}
                <img src={users.linkedin} alt="" />
                <p>Phone: {users?.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
