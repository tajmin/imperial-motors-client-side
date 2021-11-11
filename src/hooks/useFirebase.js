import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

import initAuth from "../Firebase/firebase.init";

initAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //email registration
    const emailRegistration = (name, email, password, history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setErrorMessage('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUserToDB(newUser, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.push('/');
            })
            .catch((error) => {
                setErrorMessage(error.message);
                setLoading(false);
            })
            .finally(() => setLoading(false));
    }

    //email login
    const emailLogin = (email, password, location, history) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.push(destination);
                setErrorMessage('');
            })
            .catch((error) => {
                setErrorMessage(error.message);
            })
            .finally(() => setLoading(false));
    }

    //google sign-in
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .finally(() => { setLoading(false) });
    }

    //log out user
    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setLoading(false));
    }


    const saveUserToDB = (user, method) => {
        fetch('https://pacific-sands-70895.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    //observer 
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // getIdToken(user)
                //     .then(idToken => {
                //         setToken(idToken);
                //     })
            } else {
                setUser({})
            }
            setLoading(false);
        });
        return () => unsubscribed;
    }, [])

    return { user, loading, errorMessage, emailRegistration, emailLogin, signInUsingGoogle, logOut }

}

export default useFirebase;