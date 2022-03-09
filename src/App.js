import React, {useState } from "react";
import useLocalStorage from "use-local-storage";
import Toggle from './Components/Toggle';
import NewTodo from './Components/NewTodo';
import Todos from './Components/Todos';
import Filter from './Components/Filter';

import './App.css';


function App() {
  // Toggle Dark-light theme
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const handleTheme = () => {
    const moon = document.getElementById("moon");
    const sun = document.getElementById("sun");

    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    if(theme === "light"){
      moon.style.display = "none";
      sun.style.display = "block";
    } else if (theme === "dark"){
      moon.style.display = "block";
      sun.style.display = "none";
    }
  }

  //New Todo
  const [newTodo, setNewTodo] = useState("");
  const handleNewTodo = (e) => {
    setNewTodo(e.target.value);
  }

  const [todoList, setTodoList] = useState([{
      id: 1,
      todo: "Spanish homework",
      status: "active"
    },
    {
      id: 2,
      todo: "Buy groseries",
      status: "active"
    },
    {
      id: 3,
      todo: "Write documentation",
      status: "active"
    }]);

  const addTodo = e => {
    let lastId = todoList.length !== 0
    ? Math.max.apply(null, todoList.map(item => item.id)) : 0;
    let newId = ++lastId;
    const noSpace = /.*\S.*/;

    if (e.code === 'Enter' && newTodo.length > 0 && newTodo.match(noSpace)) {
      setTodoList([...todoList, {
        id: newId,
        todo: newTodo,
        status: "active"
      }]);
      setNewTodo("");
      e.target.value = "";
    }
  }

  // Delete todos
  const deleteTodo = id => {
    let removeTodo = todoList.filter(item => item.id !== id);
    setTodoList(removeTodo);
  }

  //add Completed Mark
  const [completedList, setCompletedList] = useState([]);

  const markCompleted = id => {
    const todoText = document.getElementById(id);
    const index = todoList.findIndex(item => item.id === id);
    
    if(todoList[index].status === "active"){
      todoList[index].status = "completed";
      todoText.classList.remove("active");
      todoText.classList.add("completed");

      const completed = todoList.filter(item => item.status === "completed");
      setCompletedList([...completed]);

    } else if (todoList[index].status === "completed"){
      todoList[index].status = "active" ;
      todoText.classList.remove("completed");
      todoText.classList.add("active");

      const completed = todoList.filter(item => item.status === "completed");
      setCompletedList([...completed]);
    }
  }

  const clearCompleted = () => {
    let newList = todoList.filter(item => item.status === "active");
    setTodoList(newList);
    setCompletedList([]);
  }

  //Filter
  const [filterStatus, setFilterStatus] = useState("all");

  const changeFilter = e => {
    const all = document.getElementById("all");
    const active = document.getElementById("active");
    const completed = document.getElementById("completed");

    if(e.target === all) {
      all.classList.add("activated");
      active.classList.remove("activated");
      completed.classList.remove("activated");
      setFilterStatus("all");

    } else if (e.target === active) {
      all.classList.remove("activated");
      completed.classList.remove("activated");
      active.classList.add("activated");
      setFilterStatus("active");

    } else if (e.target === completed) {
      all.classList.remove("activated");
      active.classList.remove("activated");
      completed.classList.add("activated");
      setFilterStatus("completed");
    }
  }

  const itemsLeft = () => {
    let items = todoList.length
    let completed = completedList.length;
    let active = items - completed;

    if (active === 1){
      return `${active} item left`
    } else {
      return `${active} items left`
    }
  }

  return (
    <div className="App" data-theme={theme}>
      <div className='app-container'>

        <nav className='nav-bar'>
          <h1 className='logo'>TODO</h1>
          <Toggle handleTheme={handleTheme} />
        </nav>

        <NewTodo
          handleNewTodo={handleNewTodo}
          addTodo={addTodo}
        />

        <Todos
          todoList={todoList}
          setTodoList={setTodoList}
          deleteTodo={deleteTodo}
          markCompleted={markCompleted}
          filterStatus={filterStatus}

        />
        <Filter
          itemsLeft={itemsLeft}
          changeFilter={changeFilter}
          clearCompleted={clearCompleted} 
        />

        <div className="drag-drop">
          <p className="drag-text">Drag and drop to reorder list</p>
        </div>
        
      </div>
    </div>
  )
}

export default App;
