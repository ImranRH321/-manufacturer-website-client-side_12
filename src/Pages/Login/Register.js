import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import Loading from "../Shared/Loading";
import useTokenUser from "../../Hooks/useTokenUser";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  /*  ========== new user register ========  */
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  /*  ======== Google user ========  */
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  /*  ======== updateProfile ========  */
  const [updateProfile, updating, uError] = useUpdateProfile(auth);
  /* ==== navigate ==== */
  const navigate = useNavigate();

  //  ___useTokenUser___
  const [token] = useTokenUser(user || gUser);

  if (token) {
    console.log("user", user, "guser", gUser);
    navigate("/");
  }

  if (loading || gLoading || updating) {
    return <Loading></Loading>;
  }
  //  const imgStorageKey = '428322d13b73eac9cb47c3c4911691c0'
  /* ======================== */
  const onSubmit = async data => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    reset();
    /* ======================== */
    // const images = data.image[0]
    // console.log('images', images);
    // const formData = new FormData();
    // formData.append('images', images);
    // const url  = `https://api.imgbb.com/1/upload?expiration=600&key=${imgStorageKey}`
    // fetch(url, {
    //   method: 'POST',
    //   body: formData
    // })
    // .then(res => res.json())
    // .then(data => {
    //   console.log('data', data);
    // })
    /* ---------------- */
  };

  let setError;
  if (error || gError || uError) {
    setError = (
      <p className="text-red-500 font-bold">
        Error {error?.message} {gError.message} {uError.message}
      </p>
    );
  }

  /*======= 
     validation gula ar akto stornag korete hboe 
     ========*/
  return (
    <div>
      <div className="flex h-screen justify-center items-center text-black bg-purple-black">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Register</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "name is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              {/*  */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              {/*  */}
              {/* <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="file"
                  className="input input-bordered w-full max-w-xs"
                  {...register("image", {
                    required: {
                      value: true,
                      message: "Image is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div> */}
              {/*  */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                    pattern: {
                      value: /(?=.*\W)/,
                      message: "At least one digit,",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {setError}
              <input
                className="btn w-full max-w-xs btn-success text-black capitalize"
                type="submit"
                value="Register"
              />
            </form>
            <p className="mt-1">
              All Ready Have Account Please
              <Link
                className="btn btn-xs mx-2 text-accent capitalize"
                to="/login"
              >
                Login
              </Link>
            </p>
            <div class="divider mt-0">OR</div>
            <button onClick={() => signInWithGoogle()} class="btn btn-success w-20 mx-auto  text-2xl">
            <i class="fa-brands fa-google"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
