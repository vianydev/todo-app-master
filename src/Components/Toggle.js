import moon from "../images/icon-moon.svg";
import sun from "../images/icon-sun.svg";

const Toogle = ({ handleTheme }) => {
    return (
        <div>
            <img className="icon-toggle" 
                src={moon} 
                alt="icon-moon"
                onClick={handleTheme}
                ></img>
            <img 
                className="icon-toggle" 
                src={sun} 
                alt="icon-sun"
                style={{
                    display: "none"
                }}
                ></img>
        </div>
    )
}

export default Toogle;