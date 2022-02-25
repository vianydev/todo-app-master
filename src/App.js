import { React } from "react";
import useLocalStorage from "use-local-storage";
import Toggle from './Components/Toggle';
import NewTodo from './Components/NewTodo';
import Todos from './Components/Todos';
import Filter from './Components/Filter';
import './App.css';


function App() {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

  const handleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }


  return (
    <div className="App" data-theme={theme}>
      <div className='app-container'>

        <nav className='nav-bar'>
          <h1 className='logo'>TODO</h1>
          <Toggle handleTheme={handleTheme} />
        </nav>

        <NewTodo />
        <Todos />
        <Filter />
        <p className="drag-text">Drag and drop to reorder list</p>
      </div>
    </div>
  );
}

export default App;
