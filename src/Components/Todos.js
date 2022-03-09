import iconCross from "../images/icon-cross.svg";
import { ReactSortable } from "react-sortablejs";

const Todos = ({ 
    todoList,
    setTodoList, 
    markCompleted,
    deleteTodo,
    filterStatus }) => {

    if(filterStatus === "all"){
        return (
            <div className="todos-container">
            <ReactSortable list={todoList} setList={setTodoList}>
                {  
                    todoList.map( (item, index) => (
                        <section 
                            key={ item.id }
                            index={index}
                            >
                            <div
                                className="todos-box"
                                 >
                            
                                <label className="radio-container">
                                    <input
                                        className="radio__input"
                                        type="checkbox"
                                        defaultChecked={item.status === "completed" ?
                                        "checked" : "" }
                                        onClick={()=>markCompleted(item.id)}>
                                    </input>
                                    <div className="radio__radio"></div>
                                </label>
        
                                <div className="todo-text-container">
                                    <p 
                                        id={item.id}
                                        className={item.status}
                                    > 
                                        {item.todo}
                                    </p>
                                    <div 
                                        className="icon cross"
                                        onClick={() => deleteTodo(item.id)}>
                                        <img src={iconCross} alt="icon-cross"></img>
                                    </div>
                                </div>
                            </div>
                        </section> ))
                }
                </ReactSortable>
            </div> 
        )

    } else if (filterStatus === "completed"){
        let completedList = todoList.filter(item => item.status === "completed")

        return (
            <div className="todos-container">
                {  
                    completedList.map( (item) => (
                        <section 
                            key={ item.id }  >
                             <div
                                className="todos-box">
                                <label className="radio-container">
                                    <input
                                        id="radio"                                    className="radio__input"
                                        type="checkbox"
                                        defaultChecked
                                        onClick={()=>markCompleted(item.id)}
                                    >
                                    </input>
                                    <div className="radio__radio"></div>
                                </label>
        
                                <div className="todo-text-container">
                                    <p 
                                        id={item.id}
                                        className={item.status}
                                    > 
                                        {item.todo}
                                    </p>
                                    <div 
                                        className="icon cross"
                                        onClick={() => deleteTodo(item.id)}>
                                        <img src={iconCross} alt="icon-cross"></img>
                                    </div>
                                </div>
                            </div>
                        </section> ))
                }
            </div> 
        )
    } else if (filterStatus === "active") {
        let activeList = todoList.filter(item => item.status === "active");

        return (
            <div className="todos-container">
                {  
                    activeList.map( item => (
                        <section 
                            key={ item.id } >
                             <div
                                className="todos-box">
                                <label className="radio-container">
                                    <input
                                        id="radio"                                    className="radio__input"
                                        type="checkbox"
                                        onClick={()=>markCompleted(item.id)} >
                                    </input>
                                    <div className="radio__radio"></div>
                                </label>
        
                                <div className="todo-text-container">
                                    <p 
                                        id={item.id}
                                        className={item.status}
                                    > 
                                        {item.todo}
                                    </p>
                                    <div 
                                        className="icon cross"
                                        onClick={() => deleteTodo(item.id)}>
                                        <img src={iconCross} alt="icon-cross"></img>
                                    </div>
                                </div>
                            </div>
                        </section> ))
                }
                
            </div> 
        )
    }
    
}

export default Todos;