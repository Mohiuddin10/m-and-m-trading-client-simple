import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";



const Login = () => {
    const { signInUser, googleLogin, setUser, facbookLogin } = useContext(AuthContext)
    const navigate = useNavigate()


    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        await signInUser(email, password)
            .then(result => setUser(result))
            .catch(error => console.log(error.message))
        navigate("/showClients")
        window.location.reload()

    }

    const handleGoogleSignin = () => {
        googleLogin()
            .then(result => setUser(result.user))
            .catch(error => console.log(error.message))
    }

    const handleFacebookSignin = () => {
        facbookLogin()
            .then(result => setUser(result.user))
            .catch(error => console.log(error.message))
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-orange-500">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm pb-4 shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleLogin} action="">
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Email</label>
                                <input name="email" type="email" id="email" className="input text-gray-600" placeholder="Email" />
                                <label className="fieldset-label">Password</label>
                                <input name="password" type="password" id="password" className="input text-gray-600" placeholder="Password" />
                                <div><a className="link link-hover text-gray-700">Forgot password?</a></div>
                                <button type="submit" className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                    </div>
                    <button onClick={handleGoogleSignin} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>

                    <button onClick={handleFacebookSignin} className="btn bg-[#1A77F2] text-white border-[#005fd8]">
                        <svg aria-label="Facebook logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path></svg>
                        Login with Facebook
                    </button>
                    <small className="text-gray-600 pt-2">Don't have account <Link className="text-blue-700" to="/register">Ragister now!</Link></small>
                </div>

            </div>
        </div>
    );
};

export default Login;