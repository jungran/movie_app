import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(){
    
    //router 밖에서는 Link를 쓸 수 없다.
    //<a href> 태그는 html이므로 새로고침 해버려서 다른 페이지로 이동하지 않는다.
    return <div className = "nav">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    </div>;
}


export default Navigation;

