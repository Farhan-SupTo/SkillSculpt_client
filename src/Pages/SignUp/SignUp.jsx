import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import animation from '../../assets/Animation - 1704782399059.json'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { AuthContext } from '../../Providers/AuthProviders/AuthProviders';

const SignUp = () => {

    const {createUser,updateUserProfile} =useContext(AuthContext)

    const {
      register,
      handleSubmit,
     reset,
      formState: { errors },
    } = useForm()
    const navigate =useNavigate()
    
 
    const onSubmit = (data) => {
      // console.log(data)
      createUser(data.email,data.password)
      .then(result=>{ 
        const loggedUser =result.user 
        console.log(loggedUser)
        updateUserProfile(data.name,data.photo)
        .then(()=>{
          const savedUser ={email:data.email,name:data.name}
          fetch('https://education-server-ten.vercel.app/users',{
            method:'POST',
            headers: {
               'content-type':'application/json',
            },
            body:JSON.stringify(savedUser)
          })
          .then(res=>res.json())
          .then(data=>{
            if(data.insertedId){
              reset()
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/');
            }
  
          })
        })
        .catch(error => console.log(error))
      })
    }
  
      
    
      
    
   
    return (
        <div className='container mx-auto pt-4'>
            <div className="hero min-h-screen bg-base-200 md:p-32 sm:p-10">
  <div className="hero-content flex-col md:flex-row-reverse">
    <div className="text-center md:text-left">
      <h1 className="text-5xl font-bold mb-3">Login now!</h1>
      <Lottie className='bg-white' animationData={animation} loop={true} />;
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter Your Name</span>
          </label>
          <input  type="text" name='name' {...register("name", { required: true })} placeholder="Name" className="input input-bordered"/>
          {errors.name && <span className='text-red-500'>Name is required</span>}
        </div>
        <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Photo URL</span>
                </label>
                <input   type="text" {...register("photo", { required: true })} placeholder="Photo_URL" className="input input-bordered" />
                {errors.photo && <span className='text-red-500'>Photo URL is required</span>}
              </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' {...register("email", { required: true })} placeholder="email" className="input input-bordered"/>
          {errors.email && <span className='text-red-500'>Email is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' {...register("password", { required: true, minLength: 6, maxLength: 20, pattern:/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/ })}  placeholder="password" className="input input-bordered" />
          {errors.password?.type === "minLength" && (
        <p className='text-red-500'>Password must be 6 characters</p>
      )}
                {errors.password?.type === "maxLength" && (
        <p className='text-red-500'>Password must be 6 characters</p>
      )}
                {errors.password?.type === "pattern" && (
        <p className='text-red-500'>Password must be at least one digit,one special character,one uppercase,one lowercase</p>
      )}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        
          <input type="submit"  className="bg-teal-600 cursor-pointer py-2 rounded-sm font-medium text-white tracking-wider" value="SIGN UP" />
        </div>
      </form>
      <p className='text-center my-4'><small>Already Have an Account?<Link className='font-bold underline' to='/login'> Sign In</Link></small></p>
      <SocialLogin></SocialLogin>
    </div>
    
    
  </div>
  
</div>
        </div>
    );
};

export default SignUp;