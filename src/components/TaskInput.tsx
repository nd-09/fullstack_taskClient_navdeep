import React, { useState } from 'react';
import { toast } from 'react-toastify';

interface TaskInputProps {
  addTask: (task: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
  const [task, setTask] = useState<string>('');

  const handleAddTask = () => {
    if (!task.trim()) {
      toast.error('Note text cannot be empty!');
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
        placeholder="Add a new note.."
        className="task-input"
      />
      <button onClick={handleAddTask} className="add-task-btn"><span style={{fontSize:16}}>⊕</span> Add</button>
    </div>
  );
};

export default TaskInput;
