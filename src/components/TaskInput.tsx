import React, { useState } from 'react';
import { toast } from 'react-toastify';

interface TaskInputProps {
  addTask: (task: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
  const [task, setTask] = useState<string>('');

  const handleAddTask = () => {
    if (!task.trim()) {
      toast.error('Task text cannot be empty!');
    } else {
      addTask(task); 
      setTask(''); 
    }
  };

  return (
    <div className="task-input-container">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        className="task-input"
      />
      <button onClick={handleAddTask} className="add-task-btn">Add</button>
    </div>
  );
};

export default TaskInput;
