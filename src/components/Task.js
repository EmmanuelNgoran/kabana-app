import React, { useState } from 'react'
import './Task.css'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ListIcon from '@mui/icons-material/List';

function Task({ name, time_span, content }) {

  const [visible_content, setVisibleContent] = useState(false);

  const TodoContent = () => {
    return <div className="Task__content_body">
      <ul className='content_body__elements'>
        <h4>To be done</h4>
        {content.map(todo => <li key={todo}>
          <input type="checkbox" name="task_checked" id="1" />
          <span>{todo}</span>
        </li>
        )}
      </ul>
    </div>
  }

  return (
    <div className='Task'>
      <div className="Task__content_header">
        <h3 className="Task__list">
          {name}
        </h3>
        <div className="Task__timer">
          {time_span}
        </div>
        <div className="task_action" onClick={e =>setVisibleContent(!visible_content)}>
          <ListIcon className='Task__details'  />
        </div>
        
        <PlayCircleIcon className='Task__play' />
      </div>
       {visible_content && <TodoContent/>}
    </div>
  )
}

export default Task