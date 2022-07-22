import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase/firebase.init";
import { toast } from "react-toastify";

const BookingModal = ({toolService , setToolService }) => {
  const { register, handleSubmit, reset } = useForm();
  const { name, price, _id, img } = toolService;

  const [user] = useAuthState(auth);

  const onSubmit = data => {
    console.log(data);
    reset();
    /* .......... */
    const orders = {
      userName: user.displayName,
      userEmail: user.email,
      userProductName: name,
      price: price,
      img: img,
      id: _id,
      address: data.address,
      phone: data.phone,
    };

    console.log("orders", orders);

    fetch("https://manufacturers.herokuapp.com/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orders),
    })
      .then(response => response.json())
      .then(data => {
        console.log("Success:", data);
        toast.success(" One Order Selected Items");
        setToolService(null)
      });
  };

  return (
    <div>
      <input type="checkbox" id="order_modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <label
            for="order_modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          {/* ====================== */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-4 justify-items-center "
          >
            <input
              class="input input-bordered w-full max-w-xs font-bold text-1xl"
              type="text"
              value={user?.displayName}
              disabled
            />
            <input
              class="input input-bordered w-full max-w-xs font-bold"
              placeholder="Your email"
              type="email"
              value={user?.email}
              disabled
            />
            <input
              class="input input-bordered w-full max-w-xs"
              placeholder="Your address"
              type="text"
              {...register("address")}
              required
            />
            <input
              class="input input-bordered w-full max-w-xs"
              placeholder="Phone Number.."
              type="number"
              {...register("phone")}
              required
            />
            <input
              type="submit"
              value="OrderTools"
              class="input bg-purple-600 text-white font-bold text-2xl input-bordered w-full max-w-xs"
            />
          </form>
          {/* ====================== */}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
