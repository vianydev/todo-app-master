import React, {useState, useEffect } from "react";
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
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  //New Todo
  const [newTodo, setNewTodo] = useState("");
  const handleNewTodo = (e) => {
    setNewTodo(e.target.value);
  }

  //Add todos
  const [todoList, setTodoList] = useState([{
    id: 1,
    todo: "this is a test",
    status: "active"
    },
    {
      id: 2,
      todo: "second todo in the list",
      status: "active"
    },
    {
      id: 3,
      todo: "Hardcode to show todo list in the app",
      status: "active"
    }
  ])

  const addTodo = e => {
    let lastId = todoList.length !== 0
    ? Math.max.apply(null, todoList.map(item => item.id))
    : 0;
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

  //add Mark
  const markCompleted = (id, index) => {
    const todoText = document.getElementById(id);

    if(todoList[index].status === "completed"){
      todoList[index].status = "active"
      todoText.classList.remove("completed")
      todoText.classList.add("active")
      // const activeitems = todoList.filter(item => item.id === id)

    } else {
      todoList[index].status = "completed"
      todoText.classList.remove("active")
      todoText.classList.add("completed")
    }
  }

  //Lists
  const [completedList, setCompletedList] = useState([]);
  

  const completedFilter = () => {
    let completedItems = todoList.filter(item => item.status === "completed");
    setCompletedList([...completedItems]);
    console.log(completedList)
  }

  useEffect(()=> {
    completedFilter()
  }, [])


  const clearCompleted = e => {
    let newList = todoList.filter(item => item.status === "active");
    setTodoList(newList);
    setCompletedList([]);
  }

  //Filter
  const [filterStatus, setFilterStatus] = useState("all");

  const handleFilter = e => {
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
    if (completedList.length > 0 && todoList.length > 0) {
      let result = todoList.length - completedList.length;
      return result > 1 ? result + " items left" : result + " item left";
    } else if (todoList.length > 1){
      return todoList.length + " items left"
    } else if (todoList.length === 1) {
      return todoList.length + " item left"
    } else {
      return "0 items left"
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
          deleteTodo={deleteTodo}
          markCompleted={markCompleted}
          filterStatus={filterStatus}
          completedList={completedList}
        />
        <Filter
          itemsLeft={itemsLeft}
          handleFilter={handleFilter}
          clearCompleted={clearCompleted} 
        />
        <p className="drag-text">Drag and drop to reorder list</p>
      </div>
    </div>
  )
}

export default App;
