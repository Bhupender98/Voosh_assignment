import React, { useState } from "react";

function RegistrationForm() {
    
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [company , setCompany] = useState("");
  const [title , setTitle] = useState("");
  const [password , setPassword] = useState("");

  let object = {name, email, company, title, password};

  const bookDemoNow = (e) => {
    // e.preventDefault();
    localStorage.setItem("new_Customer",JSON.stringify(object));
  }

  return (
    <div className="registration-form-container">
      <div className="book-a-demo">
        <h1>Book A Demo Now</h1>
      </div>
      <div className="registration-form">
        <div className="form-division">
          <form action="">
            <label htmlFor="fname">
              Name <span>*</span>
            </label>
            <br />
            <input
              type="text"
              name="fname"
              id="fname"
              placeholder="Ex. John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <br />

            <label htmlFor="email">
              Email <span>*</span>
            </label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Ex. mail@website.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />

            <label htmlFor="cname">
              Company Name <span>*</span>
            </label>
            <br />
            <input
              type="text"
              name="cname"
              id="cname"
              placeholder="Ex. XYZ PVT LTD"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <br />
            <br />

            <label htmlFor="title">
              Your title <span>*</span>
            </label>
            <br />
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Ex. operational Head"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <br />

            <label htmlFor="setpassword">
              Set Password <span>*</span>
            </label>
            <br />
            <input
              type="password"
              name="setpassword"
              id="setpassword"
              placeholder="Ex. string@123"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />

            <button type="submit" id="boookDemoSubmit" onClick={bookDemoNow}>
              Book Demo Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
