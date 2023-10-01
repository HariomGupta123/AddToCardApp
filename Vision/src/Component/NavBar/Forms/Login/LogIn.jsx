
import { MdClose } from "react-icons/md";
import "./login.css"
import  { useState } from 'react'

const LogIn = ({resisterFromLogin,cancelLoginPage}) => {
    const [logInformData, setLogInFormData] = useState({
      username: "",
      password: "",
     
    });
    const handleLoginForm=(e)=>{
         const { name, value } = e.target;
         setLogInFormData({
           ...logInformData,
           [name]: value,
         });
    }
    return (
      <div className="form-login">
      
        <div id="login">
          <div className="container">
            <div
              id="login-row"
              className="row justify-content-center align-items-center"
            >
              <div id="login-column" className="col-md-6">
                <div id="login-box" className="col-md-14">
                  <form
                    id="login-form"
                    className="form"
                    action=""
                    method="post"
                  >
                    <h3 className="text-center text-info">Login</h3>
                    <div className="form-group">
                      <label htmlFor="username" className="text-info">
                        Username:
                      </label>
                      <br />
                      <input
                        type="text"
                        name="username"
                        id="username"
                        className=""
                        style={{
                          backgroundColor: "white",
                          color: "black",
                          border: "none",
                        }}
                        onChange={handleLoginForm}
                        value={logInformData.username}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password" className="text-info">
                        Password:
                      </label>
                      <br />
                      <input
                        type="password"
                        name="password"
                        id="password"
                        style={{
                          backgroundColor: "white",
                          color: "black",
                          border: "none",
                        }}
                        className=""
                        onChange={handleLoginForm}
                        value={logInformData.password}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="remember-me" className="text-info">
                        <span>Remember me</span> 
                        <span>
                          <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                          />
                        </span>
                      </label>
                      <br />
                      <input
                        type="submit"
                        name="submit"
                        className="btn btn-info btn-md"
                        value="submit"
                      />
                    </div>
                    <div
                      id="register-link"
                      className="text-right"
                      onClick={resisterFromLogin}
                    >
                      <a href="#" className="text-info">
                        Register
                      </a>
                    </div>
                  </form>
                  <span  className="cancel-btn" onClick={()=>{cancelLoginPage(false)}}>cancel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default LogIn
