import { useState } from "react";
import { useTasks } from "../store/taskContext";


export default function TaskInput() {
const [text, setText] = useState("");
const { setTasks } = useTasks();


const addTask = () => {
if (!text.trim()) return;


setTasks(prev => [
...prev,
{ id: Date.now(), text, completed: false }
]);


setText("");
};


return (
<div className="task-input">
<input
value={text}
onChange={e => setText(e.target.value)}
placeholder="Enter task"
/>
<button onClick={addTask}>Add Task</button>
</div>
);
}