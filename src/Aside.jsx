import React from 'react'

function Aside() {
  return (
    <div className='size' >
        <div className='m-3 d-flex flex-column gap-3 position-fixed'>
            <img src="src\assets\insta_text.jpeg" className='insta-text' alt="Instagram" />
            <div><i className="bi bi-house-door"></i>Home</div>
            <div><i className="bi bi-search"></i>Search</div>
            <div><i className="bi bi-compass"></i>Explore</div>
            <div><i className="bi bi-play-btn"></i>Reels</div>
            <div><i className="bi bi-chat"></i>Messages</div>
            <div><i className="bi bi-heart"></i>Notifications</div>
            <div><i className="bi bi-plus-square"></i>Create</div>
            <div><i className="bi bi-person-circle"></i>Profile</div>
        </div>
        <div className='m-3 d-flex flex-column gap-3 position-fixed bottom-0'>
            <div><i className="bi bi-threads"></i>Threads</div>
            <div><i className="bi bi-list"></i>More</div>
        </div>
    </div>
  )
}

export default Aside