import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignUp = () => {
    const navigate=useNavigate()

const handleSubmit=(e)=>{
    e.preventDefault();
    const formData= new  FormData(e.target)
    const data= Object.fromEntries(formData.entries())

    const userData={
        ...data,
        userId:Date.now()
    }

    localStorage.setItem('user',JSON.stringify(userData));

    localStorage.setItem('registeredUser',JSON.stringify(userData));


    console.log("user saved",userData);
    navigate('/');
    
}

  return (
    <div className="min-h-screen flex items-center justify-center  bg-slate-400">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-2">Sign Up</h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Please enter your details!
        </p>


    <form onSubmit={handleSubmit}>

        <input
          type="username"
          name='username'
          placeholder="Username"
          className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
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

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md mb-4">
          Create Account
        </button>

      </form>

        <hr className="my-4" />

        <div>
          <p className="mb-0">
            Already have an account?
            <Link to={"/login"} className="text-blue/50 font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
