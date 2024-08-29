
import './home.css'
import Cookies from 'js-cookie'
import Sidebar from './SideBar'

import { Navigate } from 'react-router-dom'
import { useState } from "react"
import { useEffect } from "react"
//let newData=[];
import { Link } from "react-router-dom"

function BikePage() {
   const [records,setRecords]=useState([]);

   useEffect(()=>{
    fetch('http://localhost:8000/bike')
    .then(response => response.json())
    .then(data => setRecords(data))
    .catch(e=>console.log(e))
   },[])
    
  
    
   
   


    
    

/*    const dataFetch=async()=>{
        const url = 'http://localhost:8000/bike'
    const options = {
      method: 'GET'
      }
      const response = await fetch(url, options)
      const data = await response.json()
      // set this array of data in setData
      {
        data.map((each)=>(
            newData.push(each)
        ))
      }
        
      
        
    }
    dataFetch()
   
   */


    const name = Cookies.get('name')

    const uploadBike=()=>{
        window.location.href="/uploadBike";        
    }
    const token = Cookies.get('token')
    if (token === undefined) {
        return <Navigate to="/login" />
        
        }
    
    const displayItem=()=>{
        console.log("item is Clicked...")
    }
    
    


  return (
    <div >
        
    <div >
    <Sidebar/>
        
      <section className="card py-10  sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-left sm:text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">Hello {name}</h2>
            <p className="mt-4 text-xl text-black">Get Most affordable bikes and car rental at your door step book at your choice and make money by uploading your bike or car and take rent</p>
            <button onClick={uploadBike} className="btn1">Upload Bike</button>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-8 sm:mt-12 xl:mt-20 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-14">
          
            {
                records.map((list)=>(
                    
                    <div onClick={displayItem} key={list.id}>
                        <Link to={`/items/${list._id}`}>
                        <div className=" font-serif font-bold text-md">
                <div className="py-8 px-9">
                    <h4>Owner : {list.name}</h4>
                    <img src={list.image} />
                    <div className="flex flex-row justify-between">
                    <p>vehicle:{list.bikeName}</p>
                    <p>RENT:{list.rentMoney}/hr</p>
                    </div>
                    <h4>Contact-owner : {list.mobileNumber}</h4>
                </div>
            </div>
            </Link>
                    </div>
                    
                ))
            }
       
 
            
            

            

           

            

            

            
        </div>
    </div>
    
</section>

    </div>
    </div>
  )
}

export default BikePage
