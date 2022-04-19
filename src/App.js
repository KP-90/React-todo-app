import './App.css';
import Top from './components/Top';
import Panel from './components/Panel';
import Main from './components/Main';
import Modal from './components/Modal';

import { useEffect, useState } from 'react';

function App() {
  console.log("lets go")
  
  const [tasks, setTasks] = useState([{
    id:0, 
    task:"Hello user, welcome to the app",
    priority: '1-HIGH'
    }
  ])
  const [modalDisplay, setModalDisplay] = useState("none")

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
      <Panel />
      <Main tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
