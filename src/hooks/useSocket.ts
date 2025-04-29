import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

const socket: Socket = io('http://localhost:4000'); // Persistent instance

export const useSocket = () => {
  const [socketConnected, setSocketConnected] = useState(false);

  useEffect(() => {
    socket.on('connect', () => {
      setSocketConnected(true);
    });
    socket.on('disconnect', () => {
      setSocketConnected(false);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
  }, []);

  const addTask = (task: { text: string; createdAt: string }) => {
    socket.emit('add', task);
  };

  return { socket, socketConnected, addTask };
};
