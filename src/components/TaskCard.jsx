import React from 'react'
import TaskColumn from './TaskColumn'
import Tag from './Tag.jsx'
import Delete from '../assets/delete.png'
import './TaskCard.css'


const TaskCard = () => {
  return (
    <article className="task_card">
        <p className="task_text">Change delete icon</p>
        <div className="task_card_button_line">
            <div className="task_card_tag">
                <Tag tagName="HTML" />
                <Tag tagName="CSS"/>
            </div>
            <div className="task_delete">
                <img src={Delete} alt="" />
            </div>
        </div>
    </article>
  )
}

export default TaskCard
