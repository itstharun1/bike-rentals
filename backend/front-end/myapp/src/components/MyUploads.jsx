
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import './home.css'
import { Link } from 'react-router-dom';
import SideBar from './SideBar';

function MyUploads() {
  const { id } = useParams();
  //api for fetch the data useing id.
  let url = `${window.location.origin}/myuploads/${id}`;

  const [records,setRecords]=useState([]);

   useEffect(()=>{
    fetch(url)
    .then(response => response.json())
    .then(data => setRecords(data))
   },[])
   console.log(records)

  // const handleDelete=(id)=>{
    //delete api useing id and axios
    /*axios.delete(`http://localhost:8000/delete/${id}`)
    .then(response => console.log(response))
    .catch(err => console.log(err)) */
    ////delete api useing id and fetch
    
    
  // }
   const handleDelete = async(id) => {
 

    //upload formData to server
    const response = await fetch(`${window.location.origin}/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        },
        });
        const data = await response.json();
        console.log(data)
        if(data==="bike deleted"){
          alert('Bike deleted ')
          window.location.href="/bike";         
            
          }
          else{
            alert('Failed to delete')
            }

    
        
  };
   
   

  return (
      <div className='dis'> 
      <SideBar/>   
      
      
      <div  className='font-serif font-bold text-md grid grid-cols-1 gap-6 mt-8 sm:mt-12 xl:mt-20 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-14'>
      
        
         {
                records.map((list)=>(
                    
                    <div  key={list.id}>
                       
                        <div className=" font-serif font-bold text-md">
                <div className="py-8 px-9">
                    <h4>Owner : {list.name}</h4>
                    <img src={list.image} />
                    <div className="flex flex-row justify-between">
                    <p>vehicle:{list.bikeName}</p>
                    <p>RENT:{list.rentMoney}/hr</p>
                    </div>
                    <h4>Contact-owner : {list.mobileNumber}</h4>
                    <div className='flex justify-between'>
                    <Link to={`/update/${list._id}`}>
                    <button  className='btn1'>Edit</button>
                    </Link>
                    <button  className='btn1' onClick={()=>handleDelete(list._id)}  >Delete</button>
                    </div>
                </div>
            </div>
            
                    </div>
                    
                ))
            }
       
      </div>
      </div>
     
 
  );
}




export default MyUploads
