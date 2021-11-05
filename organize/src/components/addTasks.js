import React from 'react';
import { Link } from 'react-router-dom';

function addTasks () {
    return (
        <Link to="/Pages/createTasksPage">Adicionar nova tarefa</Link>
    )
}

export default addTasks;