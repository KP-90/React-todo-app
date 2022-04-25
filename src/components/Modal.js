// handles creating a new task to add to State
import { useEffect } from 'react'
import './modal.css'
const Modal = (props) => {
    // index is used for the key value. This gets the highest id number found so that its not possible for collisions.
    let index = Math.max.apply(Math, props.tasks.map((i) => {return i.id}))
    let style = {'display': props.modalDisplay}
    useEffect(() => {
        const mod = document.querySelector("#newTaskModal")
        const btn = document.querySelector("#close")
        const handleClose = () => {
            const n = document.querySelector('input')
            const prio = document.querySelector("select")
            if (n.value !== '') {
                index += 1
                props.setTasks(props.tasks.concat({id:index, task: n.value, priority: prio.value}))
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
                        <input role="inputText" type="text"></input>
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