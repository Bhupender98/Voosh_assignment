import React from "react";

function Demo() {
  const registrationForm = () => {
    window.scrollBy(0, 1000);
  }
  return (
    <>
        <div className="main-container">
          {/* container for displaying the demo button  */}
          <div className="container">
          <h2>
            Consolidate your resttaurants' inshights in one place. Unlock growth.
          </h2><br />
          <p>
            Your one stop solution to view mission-critical data and insights
            from all your locations in one place.
          </p><br />
          <button id='demoBtn' onClick={registrationForm} >Book Demo</button>
        </div>
        <div className="bg-container">
          <img
            src="https://voosh.in/static/media/my_profile.61da110e7e1e80c97356.webp"
            alt="bg_Image"
          />
        </div>
        </div>
    </>
  );
}

export default Demo;
