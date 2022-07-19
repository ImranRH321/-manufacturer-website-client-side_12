import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import Loading from "../Shared/Loading";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  /*  ========== new user register ========  */
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  /*  ======== Google user ========  */
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  /* ==== navigate ==== */
  const navigate = useNavigate();

  if (user || gUser) {
    console.log("user", user, "guser", gUser);
    navigate("/");
  }

  if (loading || gLoading) {
    return <Loading></Loading>;
  }

  const onSubmit = data => {
    console.log(data);
    createUserWithEmailAndPassword(data.email, data.password);
    reset();
  };

  /*======= 
     1.password ar pattern validation kaj kore na(?=.*?[0-9])
     3.login page 0 pattern ar validation ar kak korte hobe  
     ========*/
  return (
    <div>
      <div className="flex h-screen justify-center items-center">
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
                      value: /(?=.*?[0-9])/,
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
            <button onClick={() => signInWithGoogle()} class="btn ">
              Google Sign
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
