import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";

const SideBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("https://sleepy-peak-76641.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, [loggedInUser.email]);

  return (
    <div
      className="p-5 col-md-2 d-flex flex-column justify-content-between"
      style={{ backgroundColor: "lightslategrey", height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li className="mb-3">
          <Link to="/" className="text-white text-decoration-none">
            Home
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/bookingList" className="text-white text-decoration-none">
            Booking List
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/review" className="text-white text-decoration-none">
            Review
          </Link>
        </li>
        {isAdmin && (
          <div>
            <li className="mb-3">
              <Link to="/orderList" className="text-white text-decoration-none">
                Order List
              </Link>
            </li>
            <li className="mb-3">
              <Link
                to="/addServices"
                className="text-white text-decoration-none"
              >
                Add Services
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/addAdmin" className="text-white text-decoration-none">
                Make Admin
              </Link>
            </li>
            <li className="mb-3">
              <Link
                to="/manageServices"
                className="text-white text-decoration-none"
              >
                Manage Services
              </Link>
            </li>
          </div>
        )}
      </ul>
      <div>
        <Link to="/" className="text-white text-decoration-none">
          Logout
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
