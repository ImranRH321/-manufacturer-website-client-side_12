import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard_side_nav" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        {/* <!-- Page content here --> */}

        <h2 className="text-5xl"> Dashboard </h2>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="dashboard_side_nav" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard/orders">Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/addReview">AddReview</Link>
          </li>
          <li>
            <Link to="/dashboard/myProfile">MyProfile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
