import React from "react";

const Promise: React.FC = () => {
  return (
    <div className="container-fluid section">
      <div className="row">
        <div className="col-md-6 offset-md-1">
          <div className="d-flex flex-column px-3 pe-md-5 container gap-24">
            <div>
              <div className="d-inline-flex justify-content-center align-items-start promise">
                My promise to you
              </div>
            </div>
            <div className="pe-md-5 subscip-header fs-36">
              100% money back guaranteed if you are not satisfied
            </div>
            <div className="pe-md-3 ">
              We crafted Afforai with total belief in our ability to make a
              chatbot that is not only powerful and reliable, but able to
              maximise your satisfaction as a user. This is why we have
              implemented a money back guarantee if you find yourself not
              satisfied with the capabilities of Afforai.
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center mt-5 mt-md-0 col-md-4">
          <picture>
            <img
              src={require("../assets/laptop-landing-20.png").default}
              className="img-fluid"
              alt="100% money back guarantee"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};
export default Promise;
