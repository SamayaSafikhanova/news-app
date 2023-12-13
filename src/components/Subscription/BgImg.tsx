import React from "react";
const BgImg: React.FC = () => {
  return (
    <>
      <div className="landing-bg sm-none">
        <img
          src={require("../../assets/laptop-landing-1.png").default}
          className="img-fluid"
          width="100%"
        />
      </div>
      <div className="sm-none">
        <img
          src={require("../../assets/laptop-landing-3.png").default}
          className="img-fluid"
          width="100%"
        />
      </div>
    </>
  );
};
export default BgImg;