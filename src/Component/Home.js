import React from "react";

function Home() {
  const containerStyle = {
    backgroundImage: `url(https://img.freepik.com/free-photo/black-wireless-headphones-black-surface_417767-115.jpg?t=st=1715719453~exp=1715723053~hmac=437a57bdc6ca67ea0c213661c165fb3dc557b859e5b843e6beee5b0f3e354211&w=1060)`, // Set the background image
    backgroundSize: "cover", // Cover the entire container
    backgroundPosition: "center", // Center the background image
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Adjust as needed
  };

  return (
    <React.Fragment>
      <div className="conta" style={containerStyle}>
      
        <div className="flex-item">
          <p style={{ fontSize: "50px" }}>
           ONE PLACE ,ALL YOU WANT IN <br></br>  <span style={{ color: "orange" }}>DIGITAL WORLD.</span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
