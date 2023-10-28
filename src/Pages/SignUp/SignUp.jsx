import { Link } from "react-router-dom";
import img from '../../assets/images/login/login.svg';

const SignUp = () => {

    const handleSignUp = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const login = {name, email, password};
        console.log(login);
    }
    

    return (
        <div className="hero min-h-[70vh] bg-base-300">
            <div className="hero-content flex-col md:flex-row">
                <div className="w-1/2 lg:mr-72">
                    
                    <img src={img} alt="img" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                    <h1 className="text-5xl font-bold text-center">Sign UP</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>Alredy have an account <Link to='/login'><button className="btn btn-link">Login</button></Link> </p>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default SignUp;