// Component should handle each individual item in State and anything related to that specific item.
import { useState } from 'react'
import Taskinfo from './Taskinfo'
import './task.css'
const Task = (props) => {
    const [active, setActive] = useState('')
    const [hide, setHide] = useState('none')
    const [taskInput, setTaskInput] = useState(props.item.task)
    const handleCheck = (e) => {
        if(active === '') {
            setActive('complete')
        }
        else {
            setActive('')
        }
    }
    // Reimplement when button is added
    const handleHide = (e) => {
        hide === 'none'? setHide("flex"):setHide("none")
    }
    // Close the modal when clicked outside of box
    const modalContent = document.querySelector("#taskInfoContent")
    window.onclick = (e) => {
        if (e.target !== modalContent && e.target === document.querySelector("#taskinfo")) {
            setHide('none')
        }
    }

    return(
        <div role="task" key={props.item.id} id={props.item.id}>
            <Taskinfo item={props.item} hide={hide}/>
            <div className='task' >
                <input type="checkbox" onClick={handleCheck}/>
                <div className="editDiv" hidden>
                
                    <textarea id="editInput" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} cols='45' maxLength='180'></textarea>
                    <button className='done'>done</button>
                </div>
                <p className={active} id={props.item.id}>{props.item.task}</p>
                <p>{props.item.priority}</p>               
                <button className='edit'>Edit</button>
                <button className='delete'>Delete</button>
            </div>
            
        </div>
    )
}

export default Task