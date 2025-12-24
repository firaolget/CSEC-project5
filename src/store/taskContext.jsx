import { createContext, useContext, useEffect, useState } from "react";


const TaskContext = createContext();


export const TaskProvider = ({ children }) => {
const [tasks, setTasks] = useState(() => {
const saved = localStorage.getItem("tasks");
return saved ? JSON.parse(saved) : [];
});


const [darkMode, setDarkMode] = useState(() => {
return JSON.parse(localStorage.getItem("darkMode")) || false;
});


useEffect(() => {
localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);


useEffect(() => {
localStorage.setItem("darkMode", JSON.stringify(darkMode));
}, [darkMode]);


return (
<TaskContext.Provider value={{ tasks, setTasks, darkMode, setDarkMode }}>
{children}
</TaskContext.Provider>
);
};


export const useTasks = () => useContext(TaskContext);