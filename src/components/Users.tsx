import React from "react";
const Users: React.FC = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center users">
      <div className="text-center">
        Loved by <span>20,000+</span> users around the world
      </div>
      <img
        src={require("../assets/laptop-landing-2.png").default}
        alt="users"
        className="img-fluid"
        width="336"
        height="48"
      />
    </div>
  );
};
export default Users;
