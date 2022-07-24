import React from "react";
import { toast } from "react-toastify";

const DeleteManageProduct = ({ deleteProduct,refetch , setDeleteProduct}) => {
  console.log("deleteMangesProduct", deleteProduct);

  const { userProductName, _id } = deleteProduct;
  console.log(userProductName);
  const deleteItems = _id => {
    fetch(`http://localhost:5000/manage/${_id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
        console.log("manage items", data);
        if (data.deletedCount) {
          toast.success(`successfully is Deleted`);
          setDeleteProduct(null);
          refetch();
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="deleted_confirm_modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="text-3xl text-red-600">
            Are You sure want to delete ?
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

export default DeleteManageProduct;
