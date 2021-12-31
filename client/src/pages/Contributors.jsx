import React from "react";
import ContributorGrid from "./ContributorGrid";

function Contributors() {
  //----------------------TEST TEAM DATA-------------------------
  let members = {
    data: [
      {
        name: "Shekhar Kumar",
        info: "",
        imgUrl: "https://cdn-icons-png.flaticon.com/512/168/168726.png",
      },
      {
        name: "Yash Chaudhary",
        info: "",
        imgUrl: "https://cdn-icons-png.flaticon.com/512/168/168726.png",
      },
      {
        name: "Abhishek Kumar Meel",
        info: "",
        imgUrl: "https://cdn-icons-png.flaticon.com/512/168/168726.png",
      },
      {
        name: "Chandresh Singh",
        info: "",
        imgUrl: "https://cdn-icons-png.flaticon.com/512/168/168726.png",
      },
      {
        name: "Shantanu Kumar Kar",
        info: "",
        imgUrl: "https://cdn-icons-png.flaticon.com/512/168/168726.png",
      },
      {
        name: "Monu Yadav",
        info: "",
        imgUrl: "https://cdn-icons-png.flaticon.com/512/168/168726.png",
      },
      {
        name: "Bhavana",
        info: "",
        imgUrl: "https://cdn-icons-png.flaticon.com/512/168/168726.png",
      },
      {
        name: "Tarun Mishra",
        info: "Hello from Codestein!",
        imgUrl: "https://avatars.githubusercontent.com/u/32845547",
      },
      {
        name: "Akansha",
        info: "Happy Hacktoberfest!!",
        imgUrl: "https://avatars.githubusercontent.com/u/43820703",
      },
      {
        name: "Vinita",
        info: "",
        imgUrl: "https://cdn-icons-png.flaticon.com/512/168/168726.png",
      },
      {
        name: "Prince Harshwardhan",
        info: "",
        imgUrl: "https://avatars.githubusercontent.com/u/76548962",
      },
      {
        name: "Mahesh",
        info: "Happy to start HacktoberFest'21",
        imgUrl: "https://cdn-icons-png.flaticon.com/512/168/168726.png",
      },
      {
        name: "Abhinab ",
        info: "God here!!",
        imgUrl: "https://avatars.githubusercontent.com/u/73732246",
      },
      {
        name: "Swaraj",
        info: "Hello there!!",
        imgUrl: "https://avatars.githubusercontent.com/u/76423625",
      },
      {
        name: "Mohit",
        info: "Hello there!!",
        imgUrl: "https://avatars.githubusercontent.com/u/90604050",
      },
      {
        name: "Gaurav",
        info: "Hello there!!",
        imgUrl:
          "https://avatars.githubusercontent.com/u/73770830",
      },
      {
        name: "Sayanya",
        info: "Hello there!!",
        imgUrl: "https://avatars.githubusercontent.com/u/76493885",
      },
      {
        name: "Muskan",
        info: "K",
        imgUrl: "https://avatars.githubusercontent.com/u/76208395",
      },
      /* 
      {
        name: "Your_Name",
        info: "Your Message to us",
        imgUrl: "Your github profile image's address",
      }
      */
    ],
  };
  //----------------------TEST TEAM DATA-------------------------

  return (
    <div className="team">
      <h1 className="headings">Contributors</h1>
      <div className="member">
        {members.data.map((member, ind) => {
          return (
            <ContributorGrid
              key={ind}
              name={member.name}
              imgUrl={member.imgUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Contributors;
