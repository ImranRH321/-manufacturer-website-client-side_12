import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase/firebase.init";
import useAdmin from "../../Hooks/useAdmin";
import "../Home/style.css";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard_side_nav" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        {/* <!-- Page content here --> */}

        <h2 className="text-5xl text-purple-500 my-5"> Dashboard </h2>
        {/* <div class="divider bg-purple-900 my-5">RX</div> */}
        {/* <hr  className="text-purple-500"/> */}
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="dashboard_side_nav" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link className="style" to="/dashboard/myProfile">
              MyProfile
            </Link>
          </li>

          {!admin ? (
            <>
              {" "}
              <li>
                <Link className="style" to="/dashboard/orders">
                  Orders
                </Link>
              </li>
              <li>
                <Link className="style" to="/dashboard/addReview">
                  AddReview
                </Link>
              </li>{" "}
            </>
          ) : (
            <>
              <li>
                <Link className="style" to="/dashboard/addProduct">
                  AddProduct
                </Link>
                {admin && (
                  <Link className="style" to="/dashboard/makeAdmin">
                    MakeAdmin
                  </Link>
                )}
              </li>
              <li>
                <Link className="style" to="/dashboard/allProducts">
                  AllProducts
                </Link>
              </li>
              <li>
                <Link className="style" to="/dashboard/manageProduct">
                  ManageOrder
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
