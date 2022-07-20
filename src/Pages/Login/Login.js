import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import Loading from "../Shared/Loading";

const Login = () => {
  const {register,handleSubmit, formState: { errors },} = useForm();

  //  ___signInUser____
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  
  // ___GoogleUser____
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
 const navigate = useNavigate()
 let location = useLocation();
 const from = location.state?.from?.pathname || "/";
  
 if (user || gUser) {
  console.log("user", user, "guser", gUser);
  navigate(from, { replace: true });
}


  if (loading || gLoading) {
    return <Loading></Loading>;
  }


    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };


    let setError;
    if(error || gError){
      setError = <p className="text-red-500 font-bold">Error {error?.message} {gError?.message}</p>
    }
   

  return (
    <div className="flex h-96 mt-20 justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
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
              className="btn w-full max-w-xs btn-success capitalize text-black "
              type="submit"
              value="Login"
            />
          </form>
          <p className="mt-3">
            Create A new Account
            <Link className="btn btn-xs mx-2 text-accent capitalize" to="/register">
              Register
            </Link>
          </p>
          <div class="divider">OR</div>
          <button onClick={() => signInWithGoogle()} class="btn ">
              Google Sign
            </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
