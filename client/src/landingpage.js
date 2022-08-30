import LogImg  from "./asserts/images.jpg"
import "./landingpage.css"
import { Link } from "react-router-dom"
import React from "react"
const LandingPage =()=>{
       const handleRoute=()=>
       {

       }

    return(
        <>
        <div className="container">
            <div className="poster-img">
            <img src={LogImg} alt="banner"></img>
            </div>
            <div className="poster">
            <h2>
                10x team 04
            </h2>
            <Link to="/Postview">   <button onClick={handleRoute}>Enter</button></Link>
            </div>

        </div>
        </>
    )
}
export default LandingPage