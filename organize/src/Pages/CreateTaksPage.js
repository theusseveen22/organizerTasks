import React, { useState, useContext } from 'react';
import ContextTasks from '../Context/ContextTasks';

function CreateTaksPage() {
    const { addTasks } = useContext(ContextTasks);
    const [form, setForsm] = useState({})

    const handleChangeNames = (value) => {
        setForsm((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    };
    
    const handleSubmiteForm = async () => {
        const { title, text, days } = form;
        addTasks(title, text, days);
    }


    return (
        <div>
            <h3>Adicionar uma nova tarefa</h3>
            <label>Nome da nova tarefa
                <input type="text" name="newTask"
                    name="title"
                    onChange={handleChangeNames}
                /></label>
            <label>Descrição
                <input type="textArea" name="newTask"
                    name="text"
                    onChange={handleChangeNames}
                /></label>
            <label>Em quantos dias você espera concluir?
                <input type="number" 
                name="days"
                onChange={handleChangeNames}
                />
            </label>
            <button 
            type="button"
            onClick={handleSubmiteForm}
            >Adicionar Tarefa</button>
        </div>
    )
}

export default CreateTaksPage;