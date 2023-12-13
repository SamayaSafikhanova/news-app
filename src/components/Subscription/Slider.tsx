import React from "react";
const Slider: React.FC = () => {
  return (
    <>
      <div className="d-flex justify-content-between slider">
        <div className="d-flex align-items-center">
          <div>
            <img src={require("../../assets/tick.svg").default} />
          </div>
          Summarize Key Findings
        </div>
        <div className="d-flex align-items-center">
          <div>
            <img src={require("../../assets/tick.svg").default} />
          </div>
          Compare Between Documents
        </div>
        <div className="d-flex align-items-center">
          <div>
            <img src={require("../../assets/tick.svg").default} />
          </div>
          Search For Answers
        </div>
        <div className="d-flex align-items-center">
          <div>
            <img src={require("../../assets/tick.svg").default} />
          </div>
          Ask in Any Language
        </div>
      </div>
    </>
  );
};
export default Slider;