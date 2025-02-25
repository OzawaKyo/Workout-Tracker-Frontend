import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/home.css";
import { getUserProfile } from "../services/userServices";
import Filters from "../components/Filters";
import Workout from "../components/Workout";

const Home = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const userData = await getUserProfile();
                if (!userData) {
                    console.error("Utilisateur non connecté");
                    navigate("/login");
                } else {
                    setUser(userData);
                }
            } catch (error) {
                console.error("Erreur lors de la récupération du profil :", error);
                navigate("/login");
            }
        };

        fetchProfile();
    }, [navigate]);

    // Liste des workouts (exemple)
    const workouts = [
        { title: "Push-up", type: "Strength", desc: "curl" },
        { title: "Squat", type: "Legs", desc: "squat" },
        { title: "Burpees", type: "Cardio", desc: "biceps" },
        { isAdd: true } // Special block for adding a new workout
    ];

    // Diviser en groupes de 2 workouts
    const groupedWorkouts = [];
    for (let i = 0; i < workouts.length; i += 2) {
        groupedWorkouts.push(workouts.slice(i, i + 2));
    }

    return (
        <div className="home">
            <div className="home-top">
                <h1 className="home-t">Tracking your fitness now</h1>
                {user && user.avatar && (
                    <img src={`/pingu/${user.avatar}.png`} alt="avatar" className="home-profile-img" />
                )}
            </div>
            {/*afficher la resolution de l'ecran  */}
                <p>Resolution: {window.screen.width} x {window.screen.height}</p>
            <Filters options={["All", "Strength", "Flexibility", "Cardio"]} onSelect={(filter) => console.log(filter)} />

            <div className="home-workouts-container">
                <div className="home-workouts">
                    {groupedWorkouts.map((group, index) => (
                        <div className="workout-group" key={index}>
                            {group.map((workout, idx) => (
                                <Workout
                                    key={idx}
                                    title={workout.title}
                                    type={workout.type}
                                    desc={workout.desc}
                                    isAdd={workout.isAdd}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
