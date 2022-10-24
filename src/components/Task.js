import { FaTimes } from 'react-icons/fa';


const Task = ({ task, user, getTasks }) => {

    const deleteTask = async() => {
        const response = await fetch('http://127.0.0.1:8000/api/deletetask/', {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({'username':user, 'task':task[0]})
        });
        const data = await response.json();
        if (response.status === 200) {
            getTasks();
        };
    };

    const completed = async() => {
        const response = await fetch('http://127.0.0.1:8000/api/completed/', {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({'username':user, 'task':task[0]})
        });
        const data = await response.json();
        if (response.status === 200) {
            getTasks();
        };
    };

    return (
        <div className={`task ${task[2] === '0' ? 'reminder' : 'completed'}`} onDoubleClick={() => completed()}>
            <h3>{task[0]} <FaTimes style={{color:'red', cursor:'pointer'}} onClick={() => deleteTask()}/></h3>
            <p>{task[1]}</p>
        </div>
    )
}

export default Task