

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
    const { registerUser } = useContext(AuthContext)
    console.log(registerUser);
    const [error, setError] = useState(null)


    const handleRegisterUser = async (e) => {
        e.preventDefault();
        const form = e.target;
        const userName = form.userName.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(userName, email, password);
        if (password.length < 6) {
            setError("Passwor must be more then 6 charecter")
            return
        }
        if (!/^(.*\d){3,}.*$/.test(password)) {
            setError("minimum 3 digit require in password")
            return
        }
        if (!/^(?=.*[\W_]).+$/.test(password)) {
            setError("minimum 1 special charecter is required")
            return
        }
        if (!/^(?=.*[A-Z]).+$/.test(password)) {
            setError("minimum 1 charecter shoul be upperclass")
            return
        }
        setError(null)
        registerUser(email, password)
            .then((result) => {
                console.log(result);
            })
            .catch(error => {
                setError(error.message.split("/")[1].split(")")[0].replaceAll("-", " "))

            })

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-orange-400">Register now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleRegisterUser} action="">
                            <fieldset className="fieldset pb-4">
                                <label className="fieldset-label">User Name</label>
                                <input name="userName" type="text" id="userName" className="input text-gray-800" placeholder="Enter your name" />
                                <label className="fieldset-label">Email</label>
                                <input name="email" type="email" id="email" className="input text-gray-800" placeholder="Email" />
                                <label className="fieldset-label">Password</label>
                                <input name="password" type="password" id="password" className="input text-gray-800" placeholder="Password" />
                                <div><a className="link link-hover text-gray-800">Forgot password?</a></div>
                                {
                                    error && <small className="text-sm text-red-700 font-bold">{error}</small>
                                }
                                <button type="submit" className="btn btn-neutral mt-4">Register</button>
                                <small className="text-gray-600 pt-2">Already have account <Link className="text-blue-700" to="/login">Login now!</Link></small>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;