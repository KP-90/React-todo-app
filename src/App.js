import './App.css';
import Top from './components/Top';
import Panel from './components/Panel';
import Main from './components/Main';
import Modal from './components/Modal';

import { useEffect, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([])
  const [loaded, setLoaded] = useState(false)
  
  const [modalDisplay, setModalDisplay] = useState("none")
  
  //Playing with local storage
  
    if(loaded === false){
      if(localStorage.getItem("tasks")) {
        let saved = localStorage.getItem("tasks")
        console.log("local storage:", JSON.parse(saved))
        setTasks(JSON.parse(saved))
        setLoaded(true)
      }
      else {
        console.log("Setting up local storage")
        let defaultTask = {id:0, task: "Hello, welcome to the App!", priority: "1-High"}
        setTasks([].concat(defaultTask))
        setLoaded(true)
      }
    }
  

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])
  
  //--Local storage end

  useEffect(() => {
    const handleClick = (e) => {
      const modal = document.querySelector("#newTaskModal")
      setModalDisplay('flex') 
    }
    let btn = document.querySelector("#add-task")
    btn.addEventListener("click", handleClick)
    return() => {btn.removeEventListener("click", handleClick)}
  }, [])

  useEffect(() => {
    window.onclick = (e) => {
      if (e.target !== document.querySelector('.modal-content') && e.target === document.querySelector("#newTaskModal")) {
        setModalDisplay('none')
    }  
    }
  })

  return (
    <div className="App">
      <Modal tasks={tasks} setTasks={setTasks} modalDisplay={modalDisplay} setModalDisplay={setModalDisplay}/>

      <Top />
      
      <Main tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
