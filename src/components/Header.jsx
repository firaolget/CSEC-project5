import { Link } from "react-router-dom";
import { useTasks } from "../store/taskContext";


export default function Header() {
const { darkMode, setDarkMode } = useTasks();


return (
<header className={darkMode ? "dark" : "light"}>
<h1>Task Tracker</h1>
<nav>
<Link to="/">Home</Link>
<Link to="/stats">Stats</Link>
</nav>
<button onClick={() => setDarkMode(!darkMode)}>
{darkMode ? "Light Mode" : "Dark Mode"}
</button>
</header>
);
}