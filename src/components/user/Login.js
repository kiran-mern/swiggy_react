import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/userContext';

const Login = () => {
  const navigate= useNavigate()
  const{setLoggedInUser}=useContext(UserContext)

  const handleLogin = (e) => {
    e.preventDefault()
    const formData=new FormData(e.target)
    const loginData=Object.fromEntries(formData.entries())
        const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));
        if(registeredUser && 
           registeredUser.email === loginData.email &&
      registeredUser.password === loginData.password
        ){
      localStorage.setItem('user', JSON.stringify(registeredUser));
      setLoggedInUser(registeredUser)
      console.log('Login successful',);
      navigate('/');
    } else {
      alert('Invalid email or password');
    }
   }

  return (
    <div className="min-h-screen flex items-center justify-center  bg-slate-400">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-2">Sign in</h2>
        <p className="text-sm text-gray-500 text-center mb-6">Please enter your login and password!</p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            name='email'
            placeholder="Email address"
            className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name='password'
            placeholder="Password"
            className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />



          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md mb-4"
            type='submit'
          >
            Login
          </button>
        </form>

        <hr className="my-4" />

        <div>
          <p className="mb-0">Don't have an account?
            <Link to={'/signup'} className="text-blue/50 font-bold">Sign Up</Link>
          </p>

        </div>


      </div>
    </div>
  );
};

export default Login;
