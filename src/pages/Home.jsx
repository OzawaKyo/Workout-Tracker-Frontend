import React from 'react'
import '../assets/css/home.css'
import { getUserProfile } from '../services/userServices'
import { useEffect, useState } from 'react'
import Filters from '../components/Filters'

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

    return (
        <div className='home'>
            <div className='home-top' >
                <h1 className='home-t'>Tracking your fitness now</h1>
                {user && user.avatar && <img className='home-profile-img' src={user.avatar} alt="User Avatar" />}
            </div>
            <Filters options={["All", "Strength", "Cardio", "Flexibility", "blabla", "scrollable"]} onSelect={(filter) => console.log(filter)} />
        </div>
    )
}

export default Home