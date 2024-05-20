import React from 'react'
import Tag from './Tag'
import './TaskForm.css'


const TaskForm = () => {
  return (
    <div>
      <header className="app_header">
            <form action="">
                <input type="text" className="task_input" placeholder="Enter your task" />
                <div className="task_form_button_line">
                  <div>
                    {/* <button className="tag">HTML</button> */}
                    <Tag tagName="HTML"/>
                    <Tag tagName="CSS"/>
                    <Tag tagName="Javascript"/>
                    <Tag tagName="ReactJS"/>
                  </div>
                  <hr />
                  <div>
                    <select className="task_status">
                        <option value="todo">Todo</option>
                        <option value="doing">Donig</option>
                        <option value="done">Done</option>
                    </select>
                  </div>
                    <button type="submit" className="task_submit">+ Add Task</button>
                </div>
            </form>
      </header>
    </div>
  )
}

export default TaskForm
