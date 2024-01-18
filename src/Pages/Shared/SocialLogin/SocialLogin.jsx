import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthProviders/AuthProviders";

const SocialLogin = () => {
    const {googleSignIn} =useContext(AuthContext)
    const location =useLocation()
    const navigate =useNavigate()

    const  from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result=>{
            
            const loggedUser =result.user 
            console.log(loggedUser)
            const savedUser ={email:loggedUser.email,name:loggedUser.displayName}
            
            fetch('https://education-server-ten.vercel.app/users',{
                method:'POST',
                headers: {
                   'content-type':'application/json',
                },
                body:JSON.stringify(savedUser)
              })
              .then(res=>res.json())
              .then(()=>{
                
                 

                  navigate(from, { replace: true });
               
      
              })
           
            
        })
    }
     
  return (
    <div>
      <div className="divider divider-horizontal"></div>
      <div className="text-center my-4">
        <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
            <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
