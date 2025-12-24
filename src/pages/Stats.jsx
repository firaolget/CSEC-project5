import { useTasks } from "../store/taskContext";


export default function Stats() {
const { tasks } = useTasks();


const completed = tasks.filter(t => t.completed).length;


return (
<main>
<h2>Task Statistics</h2>
<p>Total Tasks: {tasks.length}</p>
<p>Completed: {completed}</p>
<p>Remaining: {tasks.length - completed}</p>
</main>
);
}