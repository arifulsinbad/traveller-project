import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBeer, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Authprovider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
const Login = () => {
 const {login, google}=useContext(AuthContext)
 const provider = new GoogleAuthProvider()
 const navigate = useNavigate()
 const location = useLocation()
 const form = location.state?.from?.pathname || '/' 

 const handleLogin = (event)=>{
  event.preventDefault()
  const from = event.target;
  const email =from.email.value;
  const password =from.password.value;
  console.log(email, password)
  login(email, password)
  .then(result=>{
   const user = result.user;
   
  //  console.log(user)
const currentUser ={
  email: user.email
}
// console.log(currentUser)
fetch('https://y-chi-amber.vercel.app/jwt',{
  method: 'POST',
  headers:{
    'content-type' : 'application/json'
  },
  body: JSON.stringify(currentUser)
})
.then(res=>res.json())
.then(data=>{
  // console.log(data)
  localStorage.setItem('token', data.token)
  navigate(form, {replace: true})
})
.catch(error=>console.log(error))

  })
 
 }
 const handleGoogle = () =>{
  google(provider)
 }
 return (
  <div className="hero min-h-screen bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row-reverse gap-20">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login Now</h1>
      <div className="avatar placeholder">
  <div onClick={handleGoogle} className="bg-green-600 text-neutral-content rounded-full w-24 btn-ghost mt-7">
    <Link className="text-3xl"><FaGoogle></FaGoogle></Link>
    <h3 className='text-2xl'>oogle</h3>
  </div>
</div> 
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        
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
        <p className='text-start'>Create New Account...<Link to='/signup' className='text-primary-focus btn-ghost'>Sign Up</Link></p>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
 );
};

export default Login;