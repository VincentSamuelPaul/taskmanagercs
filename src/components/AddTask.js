import { useState } from "react"

const AddTask = ({ onAdd, user, getTasks }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')


    const addTask = async(e) => {
        e.preventDefault();
        if (!text) {
            alert('Please add a task')
            return
        }
        setText('')
        setDay('')
        const response = await fetch('https://taskmanagercs.herokuapp.com/api/addtask/', {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({'user':user, 'taskname':text, 'day':day})
        });
        // const data = response.json();
        if (response.status === 200) {
            getTasks();
        };
    };

    return (
        <form className="add-form" onSubmit={addTask}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task" autoFocus='on' value={text} onChange={(e)=> 
                    setText(e.target.value)
                }/>
            </div>
            <div className="form-control">
                <label>Day and Time</label> 
                <input type="text" placeholder="Add day and time" value={day} onChange={(e)=> 
                    setDay(e.target.value)
                }/>
            </div>
            <button className="btn btn-block">Add task</button>
        </form>
    )
}

export default AddTask