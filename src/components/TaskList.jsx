import { useTasks } from "../store/taskContext";
import TaskItem from "./TaskItem";


export default function TaskList() {
const { tasks } = useTasks();


return (
<ul className="task-list">
{tasks.map(task => (
<TaskItem key={task.id} task={task} />
))}
</ul>
);
}