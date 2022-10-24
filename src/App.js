import { useState, useEffect } from 'react';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';

const App = ({user, setUser}) => {

    const [showAddTask, setShowAddTask] = useState(false)

    const [tasks, setTasks] = useState(0);

    const getTasks = async() => {
        const response = await fetch('https://taskmanagercs.herokuapp.com/api/tasks/', {
          method:'POST',
          headers:{
            'Content-Type':'application/json',
          },
          body:JSON.stringify({'username':user})
        });
        const data = await response.json();
        if (response.status === 200) {
          setTasks(data['tasks']);
        }
    };

    useEffect((getTasks) => {
      getTasks();
    }, []);


    // Toggle reminder

    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => task.id === id ? { ...task,reminder: !task.reminder } : task))
    }

    return (
        <div className="container">
            <Header user={user} setUser={setUser} getTasks={getTasks} onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
            {showAddTask && <AddTask user={user} getTasks={getTasks} />}
            {tasks.length > 0 ? <Tasks user={user} getTasks={getTasks} tasks={tasks} onToggle={toggleReminder}/> : <h3>No Tasks</h3>}
        </div>
    )
}

export default App; 
