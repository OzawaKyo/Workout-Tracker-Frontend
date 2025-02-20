import "../assets/css/Workout.css";

const Workout = ({ title, type ,desc }) => {
    const backgroundImage = `/images/${desc}.gif`; // Utilise le dossier public

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
