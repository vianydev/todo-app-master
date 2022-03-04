const Filter = ({ itemsLeft, clearCompleted, handleFilter }) => {
    return (
        <section className="filter-container">
            <div className="filter-mobile"> 
                <div className="filter-box">
                    <p className="items-left"> { itemsLeft() } </p>
                    <p className="clear"> Clear Completed </p> 
                </div>
                
            </div>

           <div className="filter-desktop">
                <p className="item"> { itemsLeft() } </p>

                <div className="filter-box">
                    <p id="all" className="filter-item activated" onClick={handleFilter}>All</p>
                    <p id="active" className="filter-item" onClick={handleFilter}>Active</p>
                    <p id="completed" className="filter-item" onClick={handleFilter}>Completed</p>
                </div>

                <p className="item clear"
                    onClick={clearCompleted}> Clear Completed </p> 
           </div>
            
     

        </section>
    )
}

export default Filter;