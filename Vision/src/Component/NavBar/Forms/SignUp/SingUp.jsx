import React, { useState } from 'react'
import "./signUp.css"
const SingUp = ({cancelSignUpPage}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone:"",
    password:"",
    confirm_password:""
    
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleFormSubmit=(event)=>{
     event.preventDefault();
     console.log("Form data submitted:", formData);
  }

  return (
    <>
      <div className="sign_up">
        <div className="main">
          <div className="main-center">
            <h5>Sign up </h5>
            <form className="" method="post" action="#">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-user fa" aria-hidden="true"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="Enter your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-envelope fa" aria-hidden="true"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    placeholder="Enter your Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="username">Phone</label>
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-users fa" aria-hidden="true"></i>
                  </span>
                  <input
                    type="phone"
                    className="form-control"
                    name="phone"
                    placeholder="Enter your Phone no."
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-lock fa-lg" aria-hidden="true"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Enter your Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="confirm">Confirm Password</label>
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-lock fa-lg" aria-hidden="true"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    name="confirm_password"
                    placeholder="Confirm your Password"
                    value={formData.confirm_password}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button type="submit" onClick={handleFormSubmit}>
                SUBMIT
              </button>
            </form>
          </div>
        </div>
        <span className="cancel" onClick={() => cancelSignUpPage(false)}>
          cancel
        </span>
      </div>
    </>
  );
}
export default SingUp
