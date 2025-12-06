import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { auth } from '../config/firebase';

export default function useAuth() {

    const [user, setuser] = useState(null);
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => {
            if (user) {
                setuser(user)
            } else {
                setuser(null)
            }
        });
        return unsub
    }, [])
    return { user }
}