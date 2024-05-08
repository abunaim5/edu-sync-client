import { Link } from 'react-router-dom';
import access from '../../assets/access2.svg'
import { FaGoogle, FaFacebookF, FaTwitter } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const Login = () => {
    const { user, loginUser } = useAuth()

    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors }
    } = useForm();
    const onSubmit = async data => {
        if(user){
            return Swal.fire({
                title: "Error",
                text: "You are already logged in.",
                icon: "error"
            })
        }
        
        const { email, password } = data;
        try {
            const result = await loginUser(email, password)
            result?.user && Swal.fire({
                title: "Success",
                text: "Your are logged in successfully",
                icon: "success"
            });
        } catch (error) {
            error && Swal.fire({
                title: "Error",
                text: `${error.message === 'Firebase: Error (auth/invalid-credential).' ? 'Invalid email or password.' : error.message}`,
                icon: "error"
            });
            // console.error(error);
        }
        // console.log(data)
    };

    return (
        <div className="hero h-[calc(100vh-66px)]">
            <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                <div className="text-center lg:text-left w-1/2">
                    <img src={access} alt="" />
                </div>
                <div className="card shrink-0 max-w-md w-full shadow-lg rounded-sm">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h1 className="text-3xl font-bold text-center">Sign In</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email <span className='text-red-600'>*</span></span>
                            </label>
                            <input {...register('email', { required: 'Email address is required.' })} type="email" placeholder="email" className="input input-bordered rounded-sm" />
                            {errors.email && <p role='alert' className='text-red-600 mt-2'>⚠ {errors.email?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password <span className='text-red-600'>*</span></span>
                            </label>
                            <input {...register('password', { required: 'Password is required.', minLength: { value: 6, message: 'Password must exceed 6 characters.' } })} type="password" placeholder="password" className="input input-bordered rounded-sm" />
                            {errors.password && <p role='alert' className='text-red-600 mt-2'>⚠ {errors.password?.message}</p>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn rounded-sm bg-[#FFA500] tracking-widest">LOGIN</button>
                        </div>
                        <div className="flex items-center pt-4 space-x-1">
                            <div className="flex-1 h-px sm:w-16 bg-[#8FBC8F] dark:bg-gray-300"></div>
                            <p className="px-3 text-base text-center dark:text-gray-600">Login with social accounts</p>
                            <div className="flex-1 h-px sm:w-16 bg-[#8FBC8F] dark:bg-gray-300"></div>
                        </div>
                        <div className="flex justify-center space-x-4">
                            <button type='button' aria-label="Log in with Google" className="p-3 rounded-sm">
                                <span className='w-5 h-5 text-xl text-[#4081EC]'><FaGoogle /></span>
                            </button>
                            <button type='button' aria-label="Log in with Facebook" className="p-3 rounded-sm">
                                <span className='w-5 h-5 text-xl text-[#395693]'><FaFacebookF /></span>
                            </button>
                            <button type='button' aria-label="Log in with Twitter" className="p-3 rounded-sm">
                                <span className='w-5 h-5 text-xl text-[#52A7E8]'><FaTwitter /></span>
                            </button>
                        </div>
                        <p className="text-base text-center sm:px-6 dark:text-gray-600">Don&apos;t have an account?
                            <Link to='/register' rel="noopener noreferrer" href="#" className="underline font-bold"> Sign Up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;