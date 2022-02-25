const Filter = () => {
    return (
        <section className="filter-container">
            <div className="filter-mobile"> 
                <div className="filter-box">
                    <p className="items-left"> 5 items left </p>
                    <p className="clear"> Clear Completed </p> 
                </div>
                
            </div>

           <div className="filter-desktop">
                <p className="item"> 5 items left </p>

                <div className="filter-box">
                    <p className="filter-item active">All</p>
                    <p className="filter-item">Active</p>
                    <p className="filter-item">Completed</p>
                </div>

                <p className="item clear"> Clear Completed </p> 
           </div>
            
     

        </section>
    )
}

export default Filter;