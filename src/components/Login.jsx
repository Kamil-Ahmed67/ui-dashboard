import { Link } from "react-router-dom";
import google from '../assets/google-icon.png'
const handleLogin=()=>{

}
const Login = () => {
    return (
        <div  data-aos="zoom-in" className="min-h-screen flex justify-center items-center">
        <div className="card bg-slate-100 w-full max-w-lg shrink-0 rounded-xl p-10">
            <h2 className="text-3xl text-[#3d84a8] font-semibold text-center mt-6">Login</h2>
            <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="email" className="input input-bordered " required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                    {/* {error.login && (
                        <label className="label text-sm text-red-600 ">
                            {error.login}
                        </label>
                    )} */}
                    <label  className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#3d84a8] text-sm lg:text-base text-gray-50 rounded-lg">Login</button>
                </div>
                <div className="divider">OR</div>
                <div className="form-control">
                    <button 
                     className="btn bg-base-100 text-sm lg:text-base text-gray-800 rounded-lg">
                    <img className="w-7 h-7 rounded-full" src={google} alt="" srcset="" /> Sign in With Google</button>
                </div>
            </form>
            <p className="text-center font-semibold">
                Don't Have An Account ? <Link className="text-[#3d84a8]" to="/register">Register</Link>
            </p>
        </div>
    </div>
    );
};

export default Login;