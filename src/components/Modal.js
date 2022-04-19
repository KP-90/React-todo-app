// handles creating a new task to add to State
import { useEffect } from 'react'
import './modal.css'
let index = 1
const Modal = (props) => {
    let style = {'display': props.modalDisplay}
    useEffect(() => {
        const mod = document.querySelector("#newTaskModal")
        const btn = document.querySelector("#close")
        const handleClose = () => {
            const n = document.querySelector('input')
            const prio = document.querySelector("select")
            if (n.value !== '') {
                props.setTasks(props.tasks.concat({id:index, task: n.value, priority: prio.value}))
                console.log(prio.value)
                index += 1
            }
            props.setModalDisplay('none')            
        }
        btn.addEventListener("click", handleClose)
        return() => {btn.removeEventListener("click", handleClose)}
    })
    
    return(
        <div className="modal" id='newTaskModal' style={style}>
            <div className="modal-content">
                <form>
                    <label>
                        Task: 
                        <input type="text"></input>
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
                <button id='close'>Submit & Close</button>
            </div>
        </div>
    )
}

export default Modal