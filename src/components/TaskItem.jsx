import { useTasks } from "../store/taskContext";


export default function TaskItem({ task }) {
const { tasks, setTasks } = useTasks();


const toggle = () => {
setTasks(tasks.map(t =>
t.id === task.id ? { ...t, completed: !t.completed } : t
));
};


const remove = () => {
setTasks(tasks.filter(t => t.id !== task.id));
};


return (
<li className={task.completed ? "completed" : ""}>
<input type="checkbox" checked={task.completed} onChange={toggle} />
<span>{task.text}</span>
<button onClick={remove}>❌</button>
</li>
);
}