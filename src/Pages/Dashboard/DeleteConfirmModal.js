import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({ deleteOrder, setDeleteOrder, refetch }) => {
  const { userProductName, _id } = deleteOrder;

  const deleteItems = _id => {
    fetch(`https://manufacturers.herokuapp.com/order/${_id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
        console.log("del", data);
        toast.success(`${userProductName} is Deleted`);
        setDeleteOrder(null);
        refetch();
      });
  };

  return (
    <div>
      <input type="checkbox" id="deleted_confirm_modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Are You sure want to delete {userProductName}
          </h3>
          <div class="modal-action">
            <button
              onClick={() => deleteItems(_id)}
              class="btn btn-xs btn-error"
            >
              Delete
            </button>
            <label for="deleted_confirm_modal" class="btn btn-xs btn-success">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
