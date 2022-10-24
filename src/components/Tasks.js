import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle, user, getTasks }) => {
    return (
        <>
            {tasks.map((task) => (<Task user={user} getTasks={getTasks} key={task[0]} task={task} 
                onToggle={onToggle}
            />))}
        </>
    )
}

export default Tasks