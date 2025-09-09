import React from 'react'
import Aside from './Aside.jsx'
import Feed from './Feed.jsx'
import Suggestion from './Suggestion.jsx'

function App() {
  return (
    <div className='d-flex vh-100'>
      <div className='w-20 bord'><Aside /></div>
      <div className='w-50 bord'><Feed /></div>
      <div className='w-30'><Suggestion /></div>
    </div>
  )
}

export default App