import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookies';
import "./index.css";


const Login = () => {
  const navigate = useNavigate();
  const token = Cookies.getItem("jwtToken");

  const [allValues,setValues] = useState({
      username:"",
      password:"",
      errorMsg:""
  });

  const onSubmitDetails = async(e) => {
    e.preventDefault();
    //Fetch Call
    //Response ok----->Redirect to Home
    //Response Failed--->Error Msg To user


    const url = "https://apis.ccbp.in/login";

    const userDetails = {
      username: allValues.username,
      password: allValues.password,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(url,options);
    const fetchData = await response.json()
    console.log(fetchData)
    if(response.ok===true){
        Cookies.setItem("jwtToken",fetchData.jwt_token)
        setValues({...allValues,errorMsg:""});
        navigate("/");
    }
    else{
        setValues({...allValues,errorMsg:fetchData.error_msg});
    }



  };

  const onChangeUsername = (event)=>{
    setValues({...allValues,username:event.target.value})
  }

  const onChangePassword = (event)=>{
    setValues({...allValues,password:event.target.value})
  }

  useEffect(()=>{
    if(token !== null){
      navigate("/")
    }
  },[])

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
            onChange={onChangeUsername}
          />
        </div>
        <div className="form-group mb-4  w-100">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={onChangePassword}
          />
        </div>
        <div className="btn-cont">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <p className="e-msg">{allValues.errorMsg}</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
