import { Link } from 'react-router-dom';
import access from '../../assets/access2.svg'
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { createUser } = useAuth();

    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors }
    } = useForm();
    const onSubmit = async data => {
        const { email, password } = data;
        try {
            const result = await createUser(email, password)
            result?.user && Swal.fire({
                title: "Success",
                text: "Your account created successfully",
                icon: "success"
            });
        } catch (error) {
            error && Swal.fire({
                title: "Error",
                text: `${error.message === 'Firebase: Error (auth/email-already-in-use).' ? 'An account already exist with this email.' : error.message}`,
                icon: "error"
            });
            console.error(error);
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
                        <h1 className="text-3xl font-bold text-center">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name <span className='text-red-600'>*</span></span>
                            </label>
                            <input {...register('name', { required: 'Name is required.' })} type="text" placeholder="Your Name" className="input input-bordered rounded-sm" />
                            {errors.name && <p role='alert' className='text-red-600 mt-3'>⚠ {errors.name?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email <span className='text-red-600'>*</span></span>
                            </label>
                            <input {...register('email', { required: 'Email address is required.' })} type="email" placeholder="email" className="input input-bordered rounded-sm" />
                            {errors.email && <p role='alert' className='text-red-600 mt-3'>⚠ {errors.email?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password <span className='text-red-600'>*</span></span>
                            </label>
                            <input {...register('password', { required: 'Password is required.', minLength: { value: 6, message: 'Password must exceed 6 characters.' } })} type="password" placeholder="password" className="input input-bordered rounded-sm" />
                            {errors.password && <p role='alert' className='text-red-600 mt-3'>⚠ {errors.password?.message}</p>}
                            {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                        </div>
                        <div className="form-control my-6">
                            <button className="btn rounded-sm bg-[#FFA500] tracking-widest">REGISTER</button>
                        </div>
                        <p className="text-base text-center sm:px-6 dark:text-gray-600">Already have an account?
                            <Link to='/login' rel="noopener noreferrer" href="#" className="underline font-bold"> Sign In</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;