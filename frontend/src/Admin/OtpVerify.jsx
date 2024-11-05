import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";


function OtpVerify() {
  const location = useLocation();
  const [otp,setOtp] = useState('');
  const [username,setUsername] = useState('');
  const [password, setPassword]= useState('');
  const [email,setEmail] = useState('');
  const [contact, setContact] = useState('');

const handleSubmit=(e)=>{
    e.preventDefault();
    if(otp==location.state.send_otp){
        setUsername(location.state.username);
        setPassword(location.state.password)
        setEmail(location.state.email)
        setContact(location.state.contact)
    
        console.log({username,password,email,contact})
        axios.post('/api/users',{username,password,email,contact}).then((res)=>{console.log(res.data)})
      }else{
        console.log("Invalid OTP")
      }
}
 

  return (
    <>
      <div className="flex justify-center mt-32">
        <form className="mx-auto p-4 border border-slate-200" onSubmit={handleSubmit}>
            <label className="text-slate-700">Enter OTP:</label><br />
          <input
            type="text"
            className="border border-slate-300 w-96 h-10 mx-auto"
            onChange={(e)=>{setOtp(e.target.value)}}
          /><br/>
          <input type="submit" value="Verify" className="bg-green-600 text-white p-2 mt-2 w-full rounded cursor-pointer"/>
        </form>
      </div>
    </>
  );
} 

export default OtpVerify;
