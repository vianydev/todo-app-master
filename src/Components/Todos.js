import iconCross from "../images/icon-cross.svg";

const Todos = ({ 
    todoList, 
    completedList,
    markCompleted,
    deleteTodo, 
    filterStatus }) => {

    if(filterStatus === "all"){
        return (
            <div className="todos-container">
                {  
                    todoList.map( (item, index) => (
                        <section 
                            className="todos-box" 
                            key={ item.id } 
                            index={index} 
                        >
                            <label className="radio-container">
                                <input
                                    id="radio"                                    className="radio__input"
                                    type="checkbox"
                                    onClick={()=>markCompleted(item.id, index)}
                                >
                                </input>
                                <div className="radio__radio"></div>
                            </label>
    
                            <div className="todo-text-container">
                                <p 
                                    id={item.id}
                                    className="active"
                                > 
                                    {item.todo}
                                </p>
                                <div 
                                    className="icon cross"
                                    onClick={() => deleteTodo(item.id)}>
                                    <img src={iconCross} alt="icon-cross"></img>
                                </div>
                            </div>
                        </section> ))
                }
            </div> 
        )

    } else if (filterStatus === "completed"){
        let completed = todoList.filter(item => item.status === "completed");

        return (
            <div className="todos-container">
                {  
                    completed.map( (item, index) => (
                        <section 
                            className="todos-box" 
                            key={ item.id } 
                            index={index} 
                        >
                            <label className="radio-container">
                                <input
                                    id="radio"                                    className="radio__input"
                                    type="checkbox"
                                    defaultChecked
                                    onClick={()=>markCompleted(item.id, index)}
                                >
                                </input>
                                <div className="radio__radio"></div>
                            </label>
    
                            <div className="todo-text-container">
                                <p 
                                    id={item.id}
                                    className="completed"
                                > 
                                    {item.todo}
                                </p>
                                <div 
                                    className="icon cross"
                                    onClick={() => deleteTodo(item.id)}>
                                    <img src={iconCross} alt="icon-cross"></img>
                                </div>
                            </div>
                        </section> ))
                }
            </div> 
        )
    } else if (filterStatus === "active") {
        let activeItems =  todoList.filter(item => item.status === "active");

        return (
            <div className="todos-container">
                {  
                    activeItems.map( (item, index) => (
                        <section 
                            className="todos-box" 
                            key={ item.id } 
                            index={index} 
                        >
                            <label className="radio-container">
                                <input
                                    id="radio"                                    className="radio__input"
                                    type="checkbox"
                                    onClick={()=>markCompleted(item.id, index)}
                                >
                                </input>
                                <div className="radio__radio"></div>
                            </label>
    
                            <div className="todo-text-container">
                                <p 
                                    id={item.id}
                                    className="active"
                                > 
                                    {item.todo}
                                </p>
                                <div 
                                    className="icon cross"
                                    onClick={() => deleteTodo(item.id)}>
                                    <img src={iconCross} alt="icon-cross"></img>
                                </div>
                            </div>
                        </section> ))
                }
            </div> 
        )
    }
    
}

export default Todos;