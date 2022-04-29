import { useEffect } from "react"
import Task from "./task"
const Main = (props) => {

    useEffect(() => {
        // Want to make sure we get all the edit buttons when some are added
        // eslint-disable-next-line
        let allEdits = document.querySelectorAll(".edit")
        let allDels = document.querySelectorAll(".delete")

        const handleEdit = (e) => {
            // 'Un-hide' the edit div
            let editDiv = e.target.parentNode.querySelector(".editDiv")
            let p = e.target.parentNode.querySelector("p")
            p.setAttribute("hidden", true)
            editDiv.removeAttribute("hidden")

            const submitEdit = () => {
                let newTask = e.target.parentNode.querySelector("#editInput").value || "-blank-"

                //Find object that is being edited
                let copy = props.tasks.find(i => i.id === parseInt(p.id))

                //Update state, maps over each item. If it matches the edited item, set it to new value
                props.setTasks(prevState => prevState.map(
                    el => el.id === copy.id? {...el, task: newTask}:el
                ))
                // Re-hide the edit div
                p.removeAttribute('hidden')
                editDiv.setAttribute("hidden", true)
            }
            // Add submit edit function to the button
            let done = e.target.parentNode.querySelector(".done")
            done.addEventListener("click", submitEdit)  
        }

        const handleDelete = (e) => {
            if(window.confirm("Are you sure?")) {
                let taskToDelete = e.target.parentNode.querySelector("p")
                console.log(taskToDelete)
                let copy = props.tasks.find(i => i.id === parseInt(taskToDelete.id))
                console.log(copy)
                props.setTasks(prevState => prevState.filter(
                    el => el.id !== copy.id
                ))
            }
        }   

        allEdits.forEach(btn => btn.addEventListener("click", handleEdit))        
        allDels.forEach(btn => btn.addEventListener("click", handleDelete))

        return() => {
            allEdits.forEach(btn => btn.removeEventListener("click", handleEdit))
            allDels.forEach(btn => btn.removeEventListener("click", handleDelete))
        }
    })

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(props.tasks))
    }, [props.tasks])

    // Sorting functionality
    useEffect(() => {
        const sortPriority = document.querySelectorAll(".sorting")
        const handleSort = (e) => {
            let direction = e.target.id
            if (direction === "up") {
                props.setTasks([].concat(props.tasks.sort((a,b) => parseInt(a.priority) - parseInt(b.priority))))
            } else {
                props.setTasks([].concat(props.tasks.sort((a,b) => parseInt(b.priority) - parseInt(a.priority))))
            }
        }
        sortPriority.forEach(btn => btn.addEventListener("click", handleSort))
        return() => {
            sortPriority.forEach(btn => btn.removeEventListener("click", handleSort))
        }
    })

    return(
        <div className="main">
            <span>
                <h2>Task</h2>
                <h2 id="sortPriority">
                    <span className="sorting" id="up">&#8593;</span>
                    Priority
                    <span className="sorting" id="down">&#8595;</span></h2>
            </span>
            {props.tasks.map((item) => {
                return <Task key={item.id} item={item} />
            })}
        </div>
    )
}

export default Main