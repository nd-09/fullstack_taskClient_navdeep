import React, { useEffect, useState } from 'react';
import { Task } from '../types/Task';        
import { NewTask } from '../types/NewTask';  
import { fetchAllTasks } from '../api/task';
import { useSocket } from '../hooks/useSocket';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { socket, addTask } = useSocket();

  // Fetch initial tasks
  useEffect(() => {
    const loadTasks = async () => {
      const fetchedTasks = await fetchAllTasks();
      setTasks(fetchedTasks);
    };
    loadTasks();
  }, []);

  // Handle new tasks from backend via socket
  useEffect(() => {
    const handleNewTask = (task: Task) => {
      setTasks((prev) => [...prev, task]);
    };

    const handleTaskError = (error: { message: string; details?: any[] }) => {
      toast.error(error.message);
    };

    socket.on('taskAdded', handleNewTask);
    socket.on('taskError', handleTaskError);

    return () => {
      socket.off('taskAdded', handleNewTask);
      socket.off('taskError', handleTaskError);
    };
  }, [socket]);

  // Submit new task
  const handleAddTask = (text: string) => {
    if (!text.trim()) {
      toast.error('Note cannot be empty!'); 
      return;
    }
    const task: NewTask = {
      text,
      createdAt: new Date().toISOString(),
    };

    addTask(task);
    toast.success('Note added successfully!');
  };

  return (
    <div className="app-container">
      <h1>Note App</h1>
      <TaskInput addTask={handleAddTask} />
      <TaskList tasks={tasks} />
      <ToastContainer />
    </div>
  );
};

export default Home;
