import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const SignUp = () => {

    const { createUser, updateUserProfile} = useContext(AuthContext);
    
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name =  form.name.value;

        const email = form.email.value;
        const photo = form. photo.value;
        const password = form.password.value;
        console.log(name,email,password,photo);

        createUser(email, password)
        .then(result => {
          updateUserProfile(
           name, photo)
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error))


    }

    
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row ">
          <div className=" w-1/2 mr-5">
            
        
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-5xl text-center font-mono">Sign Up</h1>
            <div className="form-control">
                <label className="label">
                  <span className="label-text font-mono">Name</span>
                </label>
                <input type="name" placeholder="name" name='name' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  font-mono">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  font-mono">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  font-mono">Photo</span>
                </label>
                <input type="text" placeholder="email" name='photo' className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                
                <input className="btn btn-primary" type="submit" value="Sign Up" />
              </div>
            </form>
            <p className='my-4 text-center font-mono'>Already Have an Account <Link to="/login" className='text-orange-600' >Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;