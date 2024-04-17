import { useState } from "react";
import "./index.css";

const Login = () => {
  const [allValues,setValues] = useState({
      username:"somesh",
      password:"somesh@123"
  });

  const onSubmitDetails = async(e) => {
    e.preventDefault();
    //Fetch Call
    //Response ok----->Redirect to Home
    //Response Failed--->Error Msg To user

    console.log(`${allValues.username}, ${allValues.password}`);

    const url = "https://apis.ccbp.in/login";

    const userDetails = {
      username: "rahul",
      password: "rahul@2021",
    };

    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(url,options);
    const fetchData = await response.json()
    console.log(fetchData);



  };



  return (
    <div className="login-cont">
      <form className="my-form" onSubmit={onSubmitDetails}>
        <img
          className="web-logo"
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        />

        <div className="form-group w-100 mb-4">
          <label htmlFor="exampleInputEmail1">Username</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group mb-4  w-100">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="btn-cont">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
