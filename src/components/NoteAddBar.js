import React from 'react'
import './NoteAddBar.css'

function NoteAddBar({setPopOverVisibleListener}) {
  return (
    <div className="NoteAddBar" onClick={setPopOverVisibleListener}>
        Add a new task
    </div>
  )
}

export default NoteAddBar