
import Camera from "./asserts/camera.png"
import Logo from "./asserts/logo.png"
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";
import FileBase64 from "react-file-base64";
import React from "react";
const Form = ()=>{
    const [posts,setPosts] = useState({});
    const navigate = useNavigate();
    const handlePosts =()=>{
        axios({
            url: "https://instacloneserver10x.herokuapp.com/post",
            method: "POST",
            headers: {

            },
            data: posts
        }).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
        navigate("/Postview");
    }
    return(
        <>
        
        <div className="Container-1">
        <header>
            <div className='header'>
            <img src={Logo} className="Logo" alt="insta-logo"/>
            <img src={Camera}  className="camera" alt='camera' />
                
               
            </div>
            </header>
            <hr/>
            <div className="main">
            <div className="input-box">
        <form >
        
        <div className="input">
        <FileBase64
          type="file" 
          multiple={false}
          onDone={({ base64 }) => setPosts({ ...posts, postimage: base64 })}
        />
        </div>
        <div className="input" >
    
        <spam><input type="text" placeholder="author" onChange={(e)=>{setPosts({...posts,name:e.target.value})}}></input></spam>
        <spam><input type="text" placeholder="location" onChange={(e)=>{setPosts({...posts,location:e.target.value})}}></input></spam>
        </div>
        
        <div className="input" >
        <input type="text" placeholder="description" onChange={(e)=>{setPosts({...posts,descripation:e.target.value})}}></input>
        </div>
       
      </form>

      <button type="submit" onClick={handlePosts} >submit</button>
      </div>
      </div>
      </div>
     
    </>
    )
};

export default Form;