import React from 'react';
import { Task } from '../types/Task';

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <ul className="task-list">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <li key={task.createdAt} className="task-item">
            <div className="note-text">{task.text}</div> 
            
            <div className="createdAt">{new Date(task.createdAt).toLocaleDateString()}
            <span className="createdAt">{new Date(task.createdAt).toLocaleTimeString()}</span>
            </div>
          </li>
        ))
      ) : (
        <li>No tasks available</li>
      )}
    </ul>
  );
};

export default TaskList;
