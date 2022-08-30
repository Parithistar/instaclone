import Logo from "./asserts/logo.png"
import Camera from "./asserts/camera.png"
import { useNavigate } from "react-router-dom"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./form"
import "./postview.css"
import Pagination from "./pagination"
const PostView=()=>{
    const showPerPage = 5
    const [pagination,setpagenation]=useState({
        start:0,
        end:showPerPage
    })
    const onPaginationChange=(start,end)=>{
        setpagenation({start: start,end: end})
    }

    const navigate=useNavigate()
    const formpage=()=>{
        navigate("/Form")
    }
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        axios({
            url: "https://instacloneserver10x.herokuapp.com/post",
            method: "GET",
        }).then((itemdata)=>{
            setPosts(itemdata.data.item);
            console.log(itemdata.data);
        })
    },[])
    const cdate = new Date().toLocaleDateString();
    return(
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div className='container-1'>
            <header>
            <div className='header'>
            <img src={Logo} className="Logo" alt="insta-logo"/>
            <img src={Camera}  className="camera" alt='camera' onClick={formpage}/>
                
               
            </div>
            </header>
            <hr/>
            <div className='scroll' >
                {
                posts.slice(pagination.start,pagination.end).map((item,i)=>{
                        return(
                            
                            <div className='post' key={i}>
                                <div className='user-info'>
                               <div className='information'>
                                    <h3>{item.name}</h3>
                                    <span>{item.location}</span>
                                    </div>
                                        <div className='dots'>
                                            <p>&#8226;&#8226;&#8226;</p>
                                        </div>
                                </div>
                                <div className='post-image'>
                                    <img width={650} src={item.postimage} alt ="news-feed"></img>
                                </div>
                                <div className='post-date'>
                                    <span>{cdate}</span>
                                </div>
                                <div className='post-likes'>
                                <i class="fa fa-heart"  ></i>
                                    64likes
                                </div>
                                <div className='description'>
                                    {item.descripation}
                                </div>

                                    
                            </div>

                        )
                    })
                }
            </div>
           
            
        </div>
        <div className="pagination">
        <Pagination style={{display:"block" ,width:"20px"}} showperpage={showPerPage} total={posts.length} onPaginationChange={onPaginationChange}/>
        </div>
        </>
    )
}
export default PostView;
