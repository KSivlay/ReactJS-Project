import React from 'react'
// import Todo from "../assets/direct-hit.png"
// import Doing from '../assets/glowing-star.png'
// import Done from '../assets/check-mark-button.png'
import './TaskColumn.css'
import TaskCard from './TaskCard'

// var imgStore = [Todo,Doing,Done];
const TaskColumn = ({title},{imgName}) => {
  return (
    <section className="task_column">
        <h2 className="task_column_heading">
            <img className="task_column_icon" src={imgName} alt="" />
            {title}
        </h2>
        <TaskCard/>
    </section>
  )
}

export default TaskColumn
