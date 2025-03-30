import './index.css'
import Heading from './components/heading.jsx';
import InputBox from './components/input.jsx'
import Tasklist from './components/tasks.jsx';
import { useEffect, useState } from 'react';
import ClearAll from './components/clearbutton.jsx';

function App() {

  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || []
  });
  const [completedTasks, setCompletedTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("completedTasks")) || {}
  });

  useEffect(() => {
    localStorage.setItem("tasks" , JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  }, [completedTasks]);

  const addTasks = (task) => {
    if (task.trim() !== ""){
      setTasks([...tasks , task]);
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);

    const updatedCompletedTasks = {...completedTasks};
    delete updatedCompletedTasks[index];
    setCompletedTasks(updatedCompletedTasks);
  }
  return (
    <>
      <Heading />
      <InputBox addTasks={addTasks}></InputBox>
      <Tasklist tasks={tasks} deleteTask={deleteTask} completedTasks={completedTasks} setCompletedTasks={setCompletedTasks}></Tasklist>
      <ClearAll setTasks={setTasks} setCompletedTasks={setCompletedTasks}></ClearAll>
    </>
  );
}

export default App;
