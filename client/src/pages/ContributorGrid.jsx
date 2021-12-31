import React from "react";
import team_mem from "../styles/images/team-images/profile.svg";

function ContributorGrid(props) {
  return (
    <div className="container">
      <div className="c-card">
        <div className="c-right">
          <img
            className="circular--square"
            src={props.imgUrl}
            alt="DSC"
            style={{ height: "140%", width: "80%" }}
          />

          <div className="c-contentBx">
            <h2 style={{ textAlign: "center" }}>{props.name}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContributorGrid;
