import React from 'react'
import '../assets/css/home.css'
import { getUserProfile } from '../services/userServices'
import { useEffect, useState } from 'react'
import Filters from '../components/Filters'
import Workout from '../components/Workout'
import Button from '../components/Button'

const Home = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const userData = await getUserProfile();
                setUser(userData);
            } catch (error) {
                console.error("Erreur lors de la récupération du profil :", error);
            }
        };

        fetchProfile();
    }, []);

    // Liste des workouts (exemple)
    const workouts = [
        { title: "Push-up", type: "Strength", desc: "curl" },
        { title: "Squat", type: "Legs", desc: "squat" },
        { title: "Burpees", type: "Cardio", desc: "biceps" }
    ];

    // Diviser en groupes de 2 workouts
    const groupedWorkouts = [];
    for (let i = 0; i < workouts.length; i += 2) {
        groupedWorkouts.push(workouts.slice(i, i + 2));
    }

    return (
        <div className='home'>
            <div className='home-top'>
                <h1 className='home-t'>Tracking your fitness now</h1>
                {user && user.avatar && (
                    <img className='home-profile-img' src={user.avatar} alt="User Avatar" />
                )}
            </div>

            <Filters options={["All", "Strength", "Flexibility", "Cardio"]} onSelect={(filter) => console.log(filter)} />

            {/* Conteneur scrollable horizontalement */}
            <div className='home-workouts-container'>
                <div className='home-workouts'>
                    {groupedWorkouts.map((group, index) => (
                        <div className='workout-group' key={index}>
                            {group.map((workout, idx) => (
                                <Workout key={idx} title={workout.title} type={workout.type} desc={workout.desc} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
