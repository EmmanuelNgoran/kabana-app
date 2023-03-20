import React from 'react'
import "./MainContent.css"
import NoteAddBar from './NoteAddBar'
import Task from './Task'
import tasks from '../data'

function MainContent(props) {
  return (
    <div className='MainContent'>
        <div className="MainContent__section">
            <NoteAddBar {...props} />
            <div className="MainContent__tasks"> 
               {tasks.map(task=><Task {...task}/> ) }
            </div>
        </div>
    </div>
  )
}

export default MainContent