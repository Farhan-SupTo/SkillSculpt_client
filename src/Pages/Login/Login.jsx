import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import animation from '../../assets/Animation - 1704782399059.json'
import { AuthContext } from '../../Providers/AuthProviders/AuthProviders';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  const {signIn} =useContext(AuthContext)
  const location =useLocation()
  const navigate =useNavigate()

 const  from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault()
      const form =event.target 
      const email =form.email.value
      const password =form.password.value 
      console.log(email,password)
      signIn(email,password)
      .then(result=>{
        const user =result.user
        console.log(user)
        Swal.fire({
          title: "User login successful",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
          
        });
        navigate(from, { replace: true });
      })
      .catch(error=>{
        console.log(error.message)
      })
    }
  

    return (
        <div className='container mx-auto pt-20'>
            <div className="hero min-h-screen bg-base-200 md:p-32 sm:p-10">
  <div className="hero-content flex-col md:flex-row-reverse">
    <div className="text-center md:text-left">
      <h1 className="text-5xl font-bold mb-3">Login now!</h1>
      <Lottie className='bg-white' animationData={animation} loop={true} />;
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        
          <input type="submit"  className="bg-teal-600 cursor-pointer py-4 rounded-sm font-medium text-white tracking-wider" value="LOGIN" />
        </div>
      </form>
      <p className='text-center my-4'><small>New Here? <Link className='font-bold underline' to='/signup'>Create an Account</Link></small></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;