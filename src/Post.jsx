import React, { useEffect, useState } from 'react'

function Post() {

    const [posts,setPosts]=useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/posts').
        then((data)=>data.json()).
        then((data)=>setPosts(data)).
        catch((error)=>console.log(error.message))
    },[])

  return (
    <div className='d-flex flex-column align-items-center justify-content-center'>
        {posts.length>0?(
            posts.map((post)=>(
                <div key={post.id} className='mt-4'>
                    <div className='d-flex mb-2'>
                        <img className='dp rounded-circle' src={post.profilePic} alt="" />
                        <h6 className='user'>{post.username}</h6>
                    </div>
                    <div>
                        <img className='poster' src={post.imageUrl} alt="" />
                    </div>
                    <div className='d-flex'>
                        <i className="bi bi-heart"></i>
                        <i className="bi bi-chat"></i>
                        <i className="bi bi-send"></i>
                    </div>
                    <div>
                        <h6 className='mt-2'>{post.likes} Likes </h6>
                        <p>{post.caption}</p>
                    </div>
                </div>
            ))):(
                <div>Loading....</div>
            )}
    </div>
  )
}

export default Post