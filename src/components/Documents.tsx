import React from "react";
const Documents = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="px-0 pe-md-5 d-flex flex-column justify-content-center col-md-5 offset-md-1">
          <div className="px-3 pe-md-5 container">
            <div className="mb-3 subscip-header fs-36">
              Say goodbye to long, tiresome documents
            </div>
            <div className="mb-4 me-3 me-md-5">
              Afforai seamlessly translates documents, files, spreadsheets &amp;
              websites, filtering out what you don’t need &amp; answering your
              specific questions within seconds.
            </div>
            <div className="d-flex flex-column gap-3 options">
              <div className="d-flex align-items-center">
                <img
                  src={require("../assets/check-circle.svg").default}
                  className="me-3"
                  alt="checkmark"
                  height="24"
                />
                <span>A whip smart research assistant</span>
              </div>
              <div className="d-flex align-items-center">
                <img
                  src={require("../assets/check-circle.svg").default}
                  className="me-3"
                  alt="checkmark"
                  height="24"
                />
                <span>We speak every language</span>
              </div>
              <div className="d-flex align-items-center">
                <img
                  src={require("../assets/check-circle.svg").default}
                  className="me-3"
                  alt="checkmark"
                  height="24"
                />
                <span>Reliable data citation for answers</span>
              </div>
              <div className="d-flex align-items-center">
                <img
                  src={require("../assets/check-circle.svg").default}
                  className="me-3"
                  alt="checkmark"
                  height="24"
                />
                <span>Fort-Knox level data security</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 mt-md-0 col-md-5">
          <picture>
            <source type="image/webp" />
            <img
              src={require("../assets/laptop-landing-4.png").default}
              className="img-fluid"
              alt="Afforai masters the documents you upload"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};
export default Documents;
