import React from 'react';
import './App.css';
import Header from './components/Header';
import DoneTasks from './components/DoneTasks';
import PendingTasks from './components/PendingTasks';
import StickyForm from './components/StickyForm';



function App() {

  return (
    <div className="App">
      <Header />
      <StickyForm />
      <h1 className="new-task-header">Novas Tarefas</h1>
      <PendingTasks />
      <h1 className="task-done-header">Tarefas Concluídas</h1>
      <DoneTasks />
    </div>
  );
}

export default App;
