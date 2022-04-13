import React, {useState} from "react";
import navbar from "../../assets/navbar.svg";
import pic from "../../assets/pic.svg";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [show,setshow] = useState(false)
    const Logout = () => {
      localStorage.removeItem("email");
      <Link to='/login'/>
    }

  return (
    <div className="flex justify-between p-5 ">
      <div className="p-2">
        <img src={navbar} onClick={()=>{show ? setshow(false) : setshow(true)}} className="w-[2vw] cursor-pointer" />
      </div>
      <div>
        <p className="text-3xl" style={{fontFamily : "Playfair Display"}}>Job Findr</p>
      </div>
      <div>
      <Link to="/login"><a className="bg-black px-2 p-2 text-white rounded-md" 
      onClick={()=>{
        Logout();
      }}>Logout</a></Link>
      </div>
    </div>
  );
};

export default Navbar;
