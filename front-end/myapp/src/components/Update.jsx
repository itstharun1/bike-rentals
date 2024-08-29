import  { useState } from 'react';
import './home.css'
import Cookies from 'js-cookie'
import { useParams } from 'react-router-dom';



const Update = () => {
  const userId = Cookies.get('userId');
  const {id} = useParams();
  const [formData, setFormData] = useState({
    name: '',
    bikeName: '',
    mobileNumber: '',
    rentMoney: '',
    image: null,
    userId:userId,
  });
console.log(id)
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData)
    //delete and update
    

    //upload formData to server
    const response = await fetch(`http://localhost:8000/uploadBike`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        });
        const data = await response.json();
        console.log(data)
        if(data.message === "User created successfully"){
          alert('Bike updated successfully')
          window.location.href="/bike";         
          
          }
          else{
            alert('Failed to upload bike')
            }
    //delete

      
        

    
        
  };

  const DeleteItem = async() => {
 

    //upload formData to server
    const response = await fetch(`http://localhost:8000/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        },
        });
        const data = await response.json();
        console.log(data)
       

    
        
  };
  DeleteItem()


  
  const goBack=()=>{
    window.location.href="/bike";

  }




  return (
    <form onSubmit={handleSubmit} className="up-card max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
          Owner Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="bikeName">
          Bike Name
        </label>
        <input
          type="text"
          name="bikeName"
          id="bikeName"
          value={formData.bikeName}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="mobileNumber">
          Mobile Number
        </label>
        <input
          type="tel"
          name="mobileNumber"
          id="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="rentMoney">
          Rent per hour eg:250/hr
        </label>
        <input
          type="number"
          name="rentMoney"
          id="rentMoney"
          value={formData.rentMoney}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
          Upload Image from google link
        </label>
        <input
          type="text"
          name="image"
          id="image"
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Submit
      </button>
      <p className='text-center'>Or</p>
      <button onClick={goBack} className='w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"'>Back</button>
    </form>

  );
};

export default Update;





