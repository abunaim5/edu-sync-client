import { Link } from 'react-router-dom';
import access from '../../assets/access2.svg'

const SignUp = () => {
    return (
        <div className="hero h-[calc(100vh-66px)]">
            <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                <div className="text-center lg:text-left w-1/2">
                    <img src={access} alt="" />
                </div>
                <div className="card shrink-0 max-w-md w-full shadow-lg rounded-sm">
                    <form className="card-body">
                        <h1 className="text-3xl font-bold text-center">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name <span className='text-red-600'>*</span></span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered rounded-sm" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email <span className='text-red-600'>*</span></span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered rounded-sm" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password <span className='text-red-600'>*</span></span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered rounded-sm" required />
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