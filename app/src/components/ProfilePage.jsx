import React from 'react'
import useAuth from '../useAuth';

const ProfilePage = () => {
    const auth = useAuth();

    return (
        <>
            <h1>Perfil</h1>

            <p>Hola {auth.user.username}</p>
        </>
    )
}

export default ProfilePage