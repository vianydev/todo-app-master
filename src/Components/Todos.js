import iconCross from "../images/icon-cross.svg";

const Todos = () => {
    return (
        <div className="todos-container">
            <section className="todos-box">
                <label className="radio-container">
                    <input  className="radio__input"
                            type="checkbox"
                            
                    ></input>
                    <div className="radio__radio"> </div>
                </label>

                <div className="todo-text-container">
                    <p 
                        style={{
                            textDecoration: "line-through",
                            color: "hsl(236, 33%, 92%)",
                        }}> 
                    Occaecat dolore pariatur ipsum ex sit cupidatat reprehenderit enim eu ut mollit nisi labore adipisicing. </p>
                    <div className="icon cross">
                        <img src={iconCross} alt="icon-cross"></img>
                    </div>
                </div>
            </section>

            <section className="todos-box">
                <label className="radio-container">
                    <input  className="radio__input"
                            type="checkbox"
                    ></input>
                    <div className="radio__radio"></div>
                </label>

                <div className="todo-text-container">
                    <p> Occaecat dolore pariatur. </p>
                    <div className="icon cross">
                        <img src={iconCross} alt="icon-cross"></img>
                    </div>
                </div>
            </section>

            <section className="todos-box">
                <label className="radio-container">
                    <input  className="radio__input"
                            type="checkbox"
                    ></input>
                    <div className="radio__radio"></div>
                </label>

                <div className="todo-text-container">
                    <p> Fugiat elit aute aliqua sint Lorem voluptate et officia laborum occaecat voluptate mollit. </p>
                    <div className="icon cross">
                        <img src={iconCross} alt="icon-cross"></img>
                    </div>
                </div>
            </section>
        </div>
        
    )
}

export default Todos;