import { useNavigate } from "react-router-dom";
import "../assets/css/Workout.css";
import add from "/images/add.png";

const Workout = ({ title, type, desc, isAdd }) => {
    const navigate = useNavigate();

    if (isAdd) {
        return (
            <div className="workout-container add-workout" onClick={() => navigate("/workout/add")}>
                <div className="workout-content2">
                    <img src={add} alt="" className="workout-add-icon" />
                    <h1 className="workout-add-text">Add a new workout</h1>
                </div>
            </div>
        );
    }

    const backgroundImage = `/images/${desc}.gif`;

    return (
        <div 
            className="workout-container"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="workout-content">
                <h2 className="workout-type">{type}</h2>
                <h1 className="workout-title">{title}</h1>
            </div>
        </div>
    );
};

export default Workout;
