
import './home.css'
import Cookies from 'js-cookie'
import { Link } from "react-router-dom";

const SideBar = () => {

  
  const myCar = Cookies.get('userId');
  const logout=()=>{
    Cookies.remove('token');
    window.location.href="/";
  
  }
  const home=()=>{
    window.location.href="/";
  }

  const uploadB=()=>{
    window.location.href="/uploadBike";
  }
  const bikes =()=>{
    window.location.href="/bike";
  }

  return (
    <div className=" bg-blue-600">
     
       
          
        
        <ul className="pt-6 navbar">
       
        <li onClick={home} className="btn-card1">
         
          <span className={`${!open && "hidden"} origin-left duration-200`}>
                Home
          </span>
          </li>

          <li onClick={uploadB} className="btn-card1">
          
          <span className={`${!open && "hidden"} origin-left duration-200`}>
                Upload Bike
          </span>
          </li>

          <Link to={`/myuploads/${myCar}`}>
          <li className="btn-card1">
          
          <span className={`${!open && "hidden"} origin-left duration-200`}>
                My Uploads
          </span>
          </li>
          </Link>

          <li onClick={bikes} className="btn-card1">
          
          <span className={`${!open && "hidden"} origin-left duration-200`}>
                All Bikes
          </span>
          </li>
          
          
          <li onClick={logout} className="btn-card1">
          
          <span className={`${!open && "hidden"} origin-left duration-200`}>
                Logout
          </span>
          </li>
        </ul>
      </div>
      
   
  );
};
export default SideBar;