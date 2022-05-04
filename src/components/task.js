// Component should handle each individual item in State and anything related to that specific item.
import { useEffect, useState } from 'react'
import './task.css'
const Task = (props) => {
    const [active, setActive] = useState('')
    const [hide, setHide] = useState('none')
    const [taskInput, setTaskInput] = useState(props.item.task)
    const [check, setCheck] = useState(false)

    // Set values if item is marked as complete
    useEffect(() => {
        if (props.item.complete) {
            setActive('complete')
            setCheck(true)
        }
    }, [])

    // Updates the individual task completion based on checkbox
    const handleCheck = (e) => {
        setCheck(!check)
        let p = e.target.parentNode.querySelector("p")
        let copy = props.tasks.find(i => i.id === parseInt(p.id))
        if(active === '') {
            props.setTasks(prevState => prevState.map(
                el => el.id === copy.id? {...el, complete: true}:el
            ))
            setActive('complete')
        }
        else {
            props.setTasks(prevState => prevState.map(
                el => el.id === copy.id? {...el, complete: false}:el
            ))
            setActive('')
        }
    }

    return(
        <div role="task-container" key={props.item.id} id={props.item.id}>
            <div className='task' >
                {props.item.complete? <input type="checkbox" onChange={handleCheck} checked={check}/> :
                    <input type="checkbox" onChange={handleCheck} checked={check}/>}
                
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