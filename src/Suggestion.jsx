import React, { useEffect, useState } from 'react'

function Suggestion() {

    const [profile, setProfile] = useState('')
    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/profile').
            then(data => data.json()).
            then(data => setProfile(data)).
            catch(err => console.log(err.message))

        fetch('http://localhost:3000/sugest').
            then(data => data.json()).
            then(data => setSuggestions(data)).
            catch(err => console.log(err.message))
    }, [])

    return (
        <div className='w-85 mx-auto'>
            <div>
                {profile ?
                    <div className='d-flex m-4 '>
                        <img className='dp rounded-circle' src={profile.profilePic} alt="" />
                        <h6 className='user'>{profile.username}</h6>
                        <small className='text-primary ms-auto'>switch</small>
                    </div> :
                    <p>Loading...</p>}
            </div>
            <div className='d-flex m-4'>
                    <h6>Suggestion for you</h6>
                    <small className='ms-auto text-primary'>see all</small>
            </div>
            <div className='m-4'>
                {suggestions.length>0?
                <div className=''>
                    {suggestions.map((suggest)=>(
                        <div className='d-flex mb-2' key={suggest.id}>
                            <img className='dp rounded-circle' src={suggest.profilePic} alt="" />
                            <h6 className='user'>{suggest.username}</h6>
                        <p className='ms-auto text-primary'>Follow</p>
                    </div>
                    ))}
                </div>:
                <p>Loading...</p>}
            </div>
        </div>
    )
}

export default Suggestion