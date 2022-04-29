import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import './App.css';
import Top from './components/Top';
import Panel from './components/Panel';
import Main from './components/Main';
import Modal from './components/Modal';

import { useEffect, useState } from 'react';

function App(props) {
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



// Google sign in
const signin = () => {
    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        console.log(user)
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    }
const signout = () => {
  const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}
// End google signn in

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

      <Top loggin={signin} logout={signout} />
      <Panel />
      <Main tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
