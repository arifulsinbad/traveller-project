import React from 'react';
import { Link } from 'react-router-dom';
import { FaBeer, FaGoogle } from 'react-icons/fa';


const SignUp = () => {
 return (
  <div className="hero min-h-screen bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row-reverse gap-20">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up Now</h1>
      <div className="avatar placeholder">
  <div className="bg-green-600 text-neutral-content rounded-full w-24 btn-ghost mt-7">
    <Link className="text-3xl"><FaGoogle></FaGoogle></Link>
    <h3 className='text-2xl'>oogle</h3>
  </div>
</div> 
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
 );
};

export default SignUp;