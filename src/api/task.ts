import axios from 'axios';
import { Task } from '../types/Task';


export const fetchAllTasks = async (): Promise<Task[]> => {
  try {
    const response = await axios.get('http://localhost:4000/fetchAllTasks');
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return [];
  }
};
