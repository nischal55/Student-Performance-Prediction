import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setReduxUser } from "../Redux/slice/userSlice";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function UserLogin() {
    let dispatch = useDispatch();
    const navigate = useNavigate();
    const[username,setUsername] = useState('');
    const[password, setPassword] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('/api/users/auth',{username,password}).then((res)=>{
            dispatch(setReduxUser(res.data.user));
            localStorage.setItem("access_token",res.data.token)
            localStorage.setItem("username",res.data.user.username)
            localStorage.setItem("userId",res.data.user._id)
            toast.success(res.data)
            navigate('/')
            
        }).catch((err) => {
          toast.error(err.response.data);
        });
    }

  return (
    <>
      <div className="w-96 shadow-xl p-10 mx-auto my-10">
        <h2 className="text-center text-2xl font-bold p-5">
            Student Performance Prediction 
        </h2>
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Username:
            </label>
            <input
              type="text"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={(e)=>{setUsername(e.target.value)}}
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              onChange={(e)=>{setPassword(e.target.value)}}
              required
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default UserLogin;
