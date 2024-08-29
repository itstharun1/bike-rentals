import SideBar from './SideBar';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

function DisplayItem() {
  const { id } = useParams();
  //api for fetch the data useing id.
  let url = `http://localhost:8000/items/${id}`;

  const [records,setRecords]=useState([]);

   useEffect(()=>{
    fetch(url)
    .then(response => response.json())
    .then(data => setRecords(data))
   },[])
   

  return (
    <div>
      <SideBar />
      <div  className='font-serif font-bold text-md'>
                <div className="py-8 px-9">
                    <h4>Owner : {records.name}</h4>
                    <img src={records.image} />
                    <div className="flex flex-row justify-between">
                    <p>{records.bikeName}</p>
                    <p>RENT:{records.rentMoney}/hr</p>
                    </div>
                    <h4>Contact-owner : {records.mobileNumber}</h4>
                </div>
            </div>
     
    </div>
  );
}



export default DisplayItem
