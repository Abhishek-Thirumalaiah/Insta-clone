import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Story() {
  const [stories,setStories]=useState([])
  let tot=0
  const navigate=useNavigate()

  useEffect(()=>{
    fetch('http://localhost:3000/stories').
    then(data=>data.json()).
    then(data=>setStories(data)).
    catch(err=>console.log(err.message))
  },[])
  
  return (
    <div>
      <div className='d-none'>{tot=stories.length}</div>
      {stories.length>0?
      <div className='d-flex'>
        {stories.map((story)=>(
          <div key={story.id} className='mx-2' onClick={()=>navigate(`/story/${story.id}/${tot}`)}>
            <div className='story-back'>
              <img className='story-post rounded-circle' src={story.imageUrl} alt="Story" />
            </div>
            <p className='text-truncate' style={{width:"60px"}}>{story.username}</p>
          </div>
        ))}
      </div>:
      <p></p>}
    </div>
  )
}

export default Story