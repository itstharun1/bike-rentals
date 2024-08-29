import { useNavigate } from 'react-router-dom';

import { Navigate } from 'react-router-dom';
import { useState} from 'react';

import Cookies from 'js-cookie'


const Login = () => {
  const [loginDetails,setLoginDetails]=useState({
    email: '',
    password: '',
  })
  

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/signup');
  };

  
  



 

  const handleSubmit = async(e) => {
    e.preventDefault();
    // authenticate by fetch
    const url = 'http://localhost:8000/login';
    const options ={
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginDetails),
        };
        const response = await fetch(url, options)
        const data = await response.json()
        console.log(data)
        if(data.message==='Login successfully'){
          Cookies.set('token', data.token,{expires:1});
          Cookies.set('name', data.tharun,{expires:1});
          Cookies.set('userId',data.userId,{expires:1});
          
          navigate('/')
          }
          else{
            alert('Invalid credentials')
            }


    
      

  };

 
  
  const token = Cookies.get('token')
  
  if(token!==undefined){
    return <Navigate to='/' />
  }



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={loginDetails.email}
              onChange={(e)=>{setLoginDetails((prev)=>{return {...prev,email:e.target.value}})}}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={loginDetails.password}
              onChange={(e) => setLoginDetails((prev)=>{return {...prev,password:e.target.value}})}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
          <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700">Login</button>
          <h2 className="text-2xl font-bold text-center">Or</h2>
          <button onClick={handleClick} className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
