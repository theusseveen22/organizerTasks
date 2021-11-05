import React, { useContext } from 'react';
import ContextTasks from '../Context/ContextTasks';

function addTasks() {
    const { data } = useContext(ContextTasks);
    const tasksVazios = 'Não existem itens ainda';
    
    return (
        <div className="demo">

        { !data.length <= 0
          ? (
            <table>
              <caption>Tarefas ativas</caption>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Descrição</th>
                  <th>Status</th>
                  <th>Atrasado ou não</th>
                </tr>
              </thead>
              <tbody>
                {data.map((itens, key) => (
                  <tr key={ key }>
                    <td>{itens.title}</td>
                    <td>{itens.text}</td>
                    <td>{itens.status}</td>
                  </tr>))}
              </tbody>
            </table>) : (
            tasksVazios
          )}
      </div>
    );
}

export default addTasks;