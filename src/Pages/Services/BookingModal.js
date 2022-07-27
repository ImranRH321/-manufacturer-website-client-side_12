import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase/firebase.init";
import { toast } from "react-toastify";

const BookingModal = ({ toolService, setToolService, minimumQuantity }) => {
  const { register, handleSubmit, reset, watch } = useForm();
  const { name, price, _id, img, availableQuantity } = toolService;


  const [user] = useAuthState(auth);
  const [quantityData, setQuantityData] = useState(0);

console.log( watch('quantity'));

  const onSubmit = data => {
    console.log(data);
    reset();
    const quantity = parseInt(data.quantity);
    console.log(quantity);
    /* .......... */

    const orders = {
      status: 'unpaid',
      userName: user.displayName,
      userEmail: user.email,
      userProductName: name,
      price: price,
      img: img,
      id: _id,
      address: data.address,
      phone: data.phone,
    };
    console.log('orders', orders);
    if (quantity < minimumQuantity || quantity > availableQuantity) {
      toast.error(`minQuantity <---${minimumQuantity} and availableQuantity-->${availableQuantity}`);
    } else {
      fetch("https://manufacturers.herokuapp.com/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orders),
      })
        .then(response => response.json())
        .then(data => {
          console.log("order booking:", data);
          toast.success(" One Order Selected Items");
          setToolService(null);
        });
    }
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
              value={` availableQuantity--->  ${availableQuantity}`}
              disabled
            />
            <input
              class="input input-bordered w-full max-w-xs font-bold"
              placeholder="Your email"
              type="email"
              value={`minimumQuantity---->  ${minimumQuantity}`}
              disabled
            />
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
            {/* quantity */}
            <input
              onChange={e => setQuantityData(e.target.value)}
              class="input input-bordered w-full max-w-xs font-bold"
              placeholder="quantity"
              type="number"
              {...register("quantity")}
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
              disabled={(watch('quantity') < minimumQuantity || watch('quantity') > availableQuantity) && true}
              // watch
              class='input btn-primary text-white font-bold text-2xl input-bordered w-full max-w-xs'
            />
          </form>
          {/* ====================== */}
        </div> 
      </div>
    </div>
  );
};

export default BookingModal;
