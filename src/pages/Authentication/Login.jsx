import { useEffect, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

const Login = () => {
    const { setUser, userLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/home";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);
    const handleLogin = async (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const captcha = form.captcha.value;

        // captcha check first
        if (!validateCaptcha(captcha)) {
            alert("Captcha does not match!");
            return;
        }

        try {
            const result = await userLogin(email, password);
            const user = result.user;

            setUser(user);

            navigate(from, { replace: true });

        } catch (error) {
            alert(error.message);
        }
    };
    return (
        <section className="min-h-screen flex items-center justify-center bg-base-200">
            <title>Login - Our Matrimony</title>
            <div className="card bg-base-100 w-full max-w-sm shadow-2xl">

                {/* Form Start  */}
                <form onSubmit={handleLogin} className="card-body">
                    <h1 className="text-3xl font-bold text-center mb-2">Login Now!</h1>

                    {/* Email and password  */}
                    <input type="email" name="email" className="input input-bordered" placeholder="Email" />
                    <input type="password" name="password" className="input input-bordered" placeholder="Password" />

                    <div className="flex justify-end mb-2">
                        <a className="link link-hover text-sm">Forgot password?</a>
                    </div>

                    <label className="label">
                        <LoadCanvasTemplate />
                    </label>
                    <input type="text" name="captcha" className="input input-bordered" placeholder="Captcha" />

                    <input className="btn btn-neutral mt-4 w-full" type="submit" value="Login" />

                    <div className="divider">OR</div>

                    <div className="flex flex-col gap-2">
                        <button type="button" className="btn btn-outline btn-neutral flex items-center justify-center gap-2">
                            <FcGoogle size={20} /> Continue with Google
                        </button>
                        <button type="button" className="btn btn-outline btn-primary flex items-center justify-center gap-2">
                            <FaFacebookF size={20} /> Continue with Facebook
                        </button>
                    </div>
                </form>

                <p className='text-center mt-4'>
                    <small>New Here? <Link to="/signup" className="hover:underline">Create an account</Link></small>
                </p>
            </div>
        </section>
    );
};

export default Login;