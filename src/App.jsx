import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskForm from './components/TaskForm.jsx'
import React from 'react'
import TaskColumn from './components/TaskColumn.jsx'
import Todo from "../assets/direct-hit.png"
import Doing from '../assets/glowing-star.png'
import Done from '../assets/check-mark-button.png'

const App = () => {
  return (
    <div className="app">
        <TaskForm/>
        <hr />
        <main className="app_main">
            <TaskColumn title="To do" imgName= {img}/>
            <TaskColumn title="Doing" imgName="Doing"/>
            <TaskColumn title="Done" imgName="Done"/>
        </main>
    </div>
  )
}

export default App
