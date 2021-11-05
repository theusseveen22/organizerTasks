import React, { useState, useEffect } from 'react';
import ContextTasks from './ContextTasks';
import Axios from 'axios';

const ProviderTasks = ({ children }) => {
  const [data, setData] = useState([]);

  const allTasks = async () => {
      const dataAllTasks = await Axios.get('http://localhost:3001/tasks');
      setData(dataAllTasks.data);
  }

  const addTasks = async (title, text, days) => {
    const data = { title, text, days }
    try {
      await Axios.post('http://localhost:3001/tasks', data );
    } catch (error) {
        return alert('Task já cadastrada no sistema')
    }
  }
    useEffect( () => {
    allTasks();
    }, []);

  const context = {
    data,
    addTasks,
  };

  return (
    <div>
      <ContextTasks.Provider value={ context }>
        { children }
      </ContextTasks.Provider>
    </div>
  );
};

export default ProviderTasks;