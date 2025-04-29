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
            <span className="createdAt">{task.text}</span> 
            <span className="createdAt">{task.createdAt}</span>
          </li>
        ))
      ) : (
        <li>No tasks available</li>
      )}
    </ul>
  );
};

export default TaskList;
