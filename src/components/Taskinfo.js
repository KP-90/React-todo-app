// Component just shows more info on an individual item by use of a modal 
import './modal.css'
const Taskinfo = (props) => {
    let style = {display: props.hide}

    return(
        <div className="modal" id="taskinfo" style={style}>
            <div className="modal-content" id='taskInfoContent'>
                <h1>{props.item.task}</h1>
            </div>

        </div>
    )
}

export default Taskinfo