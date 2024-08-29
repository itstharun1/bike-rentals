import  { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [signUpDetails,setSignUpDetails]=useState({
    name:'',
    email: '',
    password: ''
   
  })
  
  

  
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/login')
  };


  const handleSubmit = async(e) => {
    e.preventDefault(); 
    
    console.log(signUpDetails)
    //fetch data sending details
    const url = `http://localhost:8000/signup`
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(signUpDetails)
      }
      const response = await fetch(url, options)
      const data = await response.json()
      console.log(data)
      if(data.message === 'User created successfully'){
        alert('User created successfully please login')
        navigate('/login')
        }
        else{
          alert('User already exits')
          }
  };
  const token = Cookies.get('token')
  if(token!==undefined){
    return <Navigate to="/"/>
  }
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
        <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">name</label>
            <input
              type="text"
              id="name"
              value={signUpDetails.name}
              onChange={(e)=>{setSignUpDetails((prev)=>{return {...prev,name:e.target.value}})}}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={signUpDetails.email}
              onChange={(e)=>{setSignUpDetails((prev)=>{return {...prev,email:e.target.value}})}}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={signUpDetails.password}
              onChange={(e)=>{setSignUpDetails((prev)=>{return {...prev,password:e.target.value}})}}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
           
          <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700">Sign Up</button>
          <h5 className="text-2xl font-bold text-center">Or</h5>
          
          <button onClick={handleClick} className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700">Login</button>
          
        </form>
      </div>
    </div>
  );
};

export default SignUp;
