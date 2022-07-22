import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';

const Checkout = () => {
    // const [user] = useAuthState(auth)
    return (
        <div>
            <h1>Checkout page </h1>
        </div>
    );
};

export default Checkout;