import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
            })
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const facbookLogin = () => {
        return signInWithPopup(auth, facebookProvider)
    }

    const logout = () => {
        return signOut(auth)
    }

    const authInfo = {
        registerUser,
        signInUser,
        user,
        setUser,
        googleLogin,
        facbookLogin,
        logout

    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log(currentUser);
                setUser(currentUser)
                // ...
            } else {
                console.log("logedout");
                setUser(null)
            }
        });
        return () => { unSubscribe() }
    }, [])

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;