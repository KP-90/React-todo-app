// handles creating a new task to add to State
import { useEffect } from 'react'
import './modal.css'
const Modal = (props) => {
    // index is used for the key value. This gets the highest id number found so that its not possible for collisions.
    //If the tasks array is empty, set index === 0
    let index = props.tasks.length > 0? Math.max.apply(Math, props.tasks.map((i) => {return i.id})) : 0
    let style = {'display': props.modalDisplay}
    useEffect(() => {
        const mod = document.querySelector("#newTaskModal")
        const btn = document.querySelector("#close")
        const handleClose = () => {
            const n = document.querySelector('textarea')
            const prio = document.querySelector("select")
            if (n.value !== '') {
                index += 1
                let date = new Date()
                let month = date.getMonth() + 1
                let day = date.getDate()
                console.log(typeof(day))
                day = day < 10 ? `0${day}` : day 
                props.setTasks(props.tasks.concat({id:index, 
                    task: n.value, 
                    priority: prio.value, 
                    complete: false,
                    time: `${month}/${day}`}))
            }
            props.setModalDisplay('none')            
        }
        btn.addEventListener("click", handleClose)
        return() => {
            btn.removeEventListener("click", handleClose)
            localStorage.setItem("tasks", JSON.stringify(props.tasks))

        }
    })
    
    return(
        <div role="modal" className="modal" id='newTaskModal' style={style}>
            <div className="modal-content">
                <form>
                    <label>
                        Task: 
                        <textarea role="inputText" cols='20' rows='10'></textarea>
                    </label>
                    <label>
                        Priority: 
                        <select>
                            <option value="1-High">1-High</option>
                            <option value="2-Normal">2-Normal</option>
                            <option value="3-Low">3-Low</option>
                        </select>
                    </label>
                </form>
                <button role="close" id='close'>Submit & Close</button>
            </div>
        </div>
    )
}

export default Modal