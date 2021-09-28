import React, { useState } from 'react';
import './StickyForm.css';
import { refreshPage } from '../../hooks/refreshPage';


const StickyForm = () => {
    const id = localStorage.length;

    localStorage.setItem("key", id);

    const [color, setColor] = useState("");
    const [task, setTask] = useState("");

    const handleSubmit = () => {
        createNewTask();

    }

    const createNewTask = () => {

        localStorage.setItem(id, JSON.stringify({
            id: localStorage.getItem("key"),
            task: task,
            color: color,
            pending: true
        }))
    }


    const handleClean = () => {
        localStorage.clear();
        refreshPage();
    }

    return (
        <div className="StickyForm">
            <form className="main-form"onSubmit={(e) => handleSubmit(e)}>
                <input placeholder="Nova Tarefa" onChange={e => setTask(e.target.value)} required />
                <label htmlFor="sticky-color-selector">Cor: </label>
                <select id="sticky-color-selector" required name="colors" onChange={e => setColor(e.target.value)}>
                    <option value="">Nenhuma</option>
                    <option value="yellow">Amarelo</option>
                    <option value="green">Verde</option>
                    <option value="red">Vermelho</option>
                    <option value="purple">Roxo</option>
                    <option value="orange">Laranja</option>
                </select>
                <button>Cadastrar</button>
            </form>
            <button onClick={() => handleClean()}>Limpar tarefas</button>
        </div>
    );
}

export default StickyForm;