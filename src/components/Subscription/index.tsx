import React from "react";
import BgImg from "./BgImg";
import Slider from "./Slider";
import AppSumo from "./AppSumo";
const Subscription = () => {
  return (
    <div className="py-4 container-fluid subscription">
      <div className="d-flex flex-column">
        <div className="d-flex flex-column align-items-center appsumo">
           <AppSumo/>
          <div className="text-center subscip-header">
            Your second brain for maximizing productivity
          </div>
          <div className="text-center">
            Afforai is an AI chatbot that searches, summarizes, and translates
            info from multiple sources to produce trustworthy research. Feed
            lengthy research documents to stacks of dry compliance requirements
            and extract the key findings you need.
          </div>

         <Slider/>

          <div className="d-flex flex-shrink-1 align-content-center flex-row gap-4">
            <button
              type="button"
              className="new-btn violet-fill btn btn-primary"
            >
              Try for free
            </button>
            <button type="button" className="new-btn gray btn btn-primary">
              View pricing
            </button>
          </div>
        </div>

       <BgImg/>
      </div>
    </div>
  );
};
export default Subscription;
