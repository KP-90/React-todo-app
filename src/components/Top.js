// Handles anything related to the banner/top portion of this app
import { getAuth } from 'firebase/auth'
import { useState } from 'react'
import './top.css'

const Top = (props) => {

    const auth = getAuth()
    let username
    let login_logout 
    if (!auth.currentUser) {
        login_logout = <span id='login' onClick={props.loggin}>Log In</span>
        console.log(auth.currentUser)
    } else {    
        username = <span>hello {auth.currentUser.displayName}</span>
        login_logout = <span id='login' onClick={props.logout}>Log out</span>
    }
    return(
        <div className="top">
            <h1>To Do List</h1>
            <button id="add-task">+Add Task</button>
            {username}
            {login_logout}
        </div>
    )
}

export default Top