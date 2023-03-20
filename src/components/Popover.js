import React , {useState} from "react";
import "./Popover.css";

function Popover({ visible }) {

    const [task_name,setTaskName] = useState("");
    const [task_duration,setTaskDuration] = useState(0);

    /**
     * 
     * @param {Event} e 
     */
    const popOverSubmitlistener = (e) =>{
        e.preventDefault();
        console.log(task_name,"")
        console.log("form submited")

        setTaskName(e.target.value)
    }

  return <>{visible && <div className="Popover">
        <form onSubmit={popOverSubmitlistener}>
            <div className="Popover__content">
                <label>Task name</label>
                <input  name="task-name" value={task_name} type="text" onChange={(e)=>setTaskName(e.target.value)}/>
                <label>Duration</label>
                <input task="task-duration" type="time" />
                <input type="submit" value="Add"/>
            </div> 
        </form>
    </div>}</>;
}

export default Popover;
