import React, { useEffect, useState } from 'react'
import { useParams,Link, useNavigate } from 'react-router-dom'

function ViewStory() {
    const {id ,tot}=useParams();

    const [story,setStory]=useState(null)

    const navigate=useNavigate()
    useEffect(()=>{
        fetch(`http://localhost:3000/stories/${id}`)
        .then(res => res.json())
        .then(data => setStory(data))
        .catch(err => console.log(err.message))

    },[id])

    if(id>tot || id<=0){
        navigate('/')
    }
  return (
    <div>
        {story && 
            <div className='story-view'>
                <Link to={`http://localhost:5173/story/${id-1}/${tot}`}><i class="bi bi-arrow-left-circle-fill arrow mx-3"></i></Link>
                <img className='story-content my-2' src={`/${story.imageUrl}`} alt="Story" />
                <Link to={`http://localhost:5173/story/${Number(id)+1}/${tot}`}><i class="bi bi-arrow-right-circle-fill arrow mx-3"></i></Link>
            </div>
        }
    </div>
  )
}

export default ViewStory