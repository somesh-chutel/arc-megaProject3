import Cookies from 'js-cookies';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Protectedroute = (props)=>{
    const {Component} = props
    const token = Cookies.getItem("jwtToken");
    const navigate = useNavigate();
    
    useEffect(()=>{
        if(token===null){
            navigate("/login")
        }
    },[])
    
    return (
        <Component/>
    )
}



export default Protectedroute;