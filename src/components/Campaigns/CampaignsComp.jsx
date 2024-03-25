import React from "react";

function CampaignsComp() {
  return (
    <div>
      <div className="campaignContent col-12 py-5 d-flex justify-content-center align-items-center flex-column">
        <h4 className="text-center pb-3">
            You've not sent any campaigns yet!
        </h4>
        <button className="btn">Send my first Campaign now</button>
      </div>
    </div>
  );
}

export default CampaignsComp;
