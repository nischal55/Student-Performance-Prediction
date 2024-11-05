import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import { useNavigate } from "react-router-dom";

function UserRegForm() {
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password == confirmPassword) {
      //axios.post('/api/users',{username,password,email,contact}).then((res)=>{console.log(res.data)})
      const otp = Math.floor(100000 + Math.random() * 900000);
      axios.post("/api/users/verify", { email, otp }).then((res) => {
        toast.success(res.data);
        let user_otp = prompt("Enter the OTP:");
        if (otp == user_otp) {
          axios
            .post("/api/users", { username, password, email, contact })
            .then((res) => {
              console.log(res.data);
            })
            .catch((err) => {
              toast.error(err.response.data);
            });
        }else{
          toast.error("Wrong OTP")
        }
      });
    }
  };

  return (
    <>
      <div className="flex justify-center p-8 ">
        <form
          onSubmit={handleSubmit}
          className="border border-slate-200 rounded p-10"
        >
          <h2 className="text-center text-3xl my-8 font-semibold">
            User Registration Form
          </h2>
          <label htmlFor="">Username:</label>
          <br />
          <input
            type="text"
            className="border border-slate-200 w-96 h-10"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <br />
          <br />
          <label htmlFor="">Contact No:</label>
          <br />
          <input
            type="text"
            className="border border-slate-200 w-96 h-10"
            onChange={(e) => {
              setContact(e.target.value);
            }}
          />
          <br />
          <br />
          <label htmlFor="">Email Id:</label>
          <br />
          <input
            type="email"
            className="border border-slate-200 w-96 h-10"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <br />
          <label htmlFor="">Password:</label>
          <br />
          <input
            type="password"
            className="border border-slate-200 w-96 h-10"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />
          <label htmlFor="">Confirm Password:</label>
          <br />
          <input
            type="password"
            className="border border-slate-200 w-96 h-10"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <br />
          <br />

          <input
            type="submit"
            value="Submit"
            className="bg-indigo-950 text-white rounded w-96 h-10 cursor-pointer"
          />
        </form>
      </div>
    </>
  );
}

export default UserRegForm;
