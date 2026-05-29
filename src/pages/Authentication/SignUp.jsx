import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

const SignUp = () => {
    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const { email, password, photoURL } = data;
        try {
            const result = await createNewUser(email, password);
            const user = result.user;
            setUser(user);
            console.log("User created:", result.user);

            await updateUserProfile({
                displayName: data.name,
                photoURL: data.photoURL,
            });

            navigate("/home");

        } catch (error) {
            console.error("Error:", error.message);
            alert(error.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <title>SignUp - Our Matrimony</title>
            <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <h1 className="text-3xl font-bold text-center mb-2">Sign Up</h1>

                    {/* Name */}
                    <input type="text" {...register("name", { required: true })} className="input input-bordered" placeholder="Name" />
                    {errors.name && <span className="text-red-600">Name is required</span>}

                    {/* Email */}
                    <input type="text" {...register("email", { required: true })} className="input input-bordered" placeholder="Email" />
                    {errors.email && <span className="text-red-600">Email is required</span>}

                    {/* PhotoUrl  */}
                    <input type="text" {...register("photoURL", { required: true })} className="input input-bordered" placeholder="Photo URL" />
                    {errors.photoURL && <span className="text-red-600">Photo is required</span>}


                    {/* Password */}
                    <input type="text" {...register("password", { required: true, minLength: 6, maxLength: 20 })} className="input input-bordered" placeholder="Password" />
                    {errors.password?.type === "required" && <p className="text-red-600">Password is required</p>}
                    {errors.password?.type === "minLength" && <p className="text-red-600">Password must be at least 6 characters</p>}
                    {errors.password?.type === "maxLength" && <p className="text-red-600">Password must not exceed 20 characters</p>}

                    <input className="btn btn-neutral mt-4 w-full" type="submit" value="Sign Up" />

                    <div className="divider">OR</div>

                    {/* Social button implement from firebase  */}
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
                    <small>
                        <Link to="/login" className="hover:underline">Already have an account?</Link>
                    </small>
                </p>
            </div>
        </div>
    );
};

export default SignUp;