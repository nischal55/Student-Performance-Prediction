import axios from "axios";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function StudentRegForm() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [guardianName, setGuardian] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [semester, setSemester] = useState("");
  const [ecaInvolve, setEcaInvolve] = useState("Yes");
  const [partTimeJob,setPartTimeJob] = useState("No");

  const handleSubmit = (e) => {
    e.preventDefault();
    let createdBy = localStorage.getItem("userId")
    axios.post("/api/students",{fullName,contact,gender,guardianName,semester,ecaInvolve,partTimeJob,address,createdBy}).then((res)=>{
      toast.success(res.data.meassage)
      navigate('/studentTable')
        setFullName("");
        setGender("");
        setGuardian("");
        setAddress("");
        setContact("");
        setSemester("");
        setEcaInvolve("");
        setPartTimeJob("");
    }).catch((err) => {
      toast.error(err.response.data);
    });
  };
  return (
    <>
      <div className="flex justify-center w-full">
        <form
          action=""
          className="w-[60%] mt-4 shadow p-4"
          onSubmit={handleSubmit}
        >
          <h2 className="text-center text-3xl p-5 font-semibold">
            Student Registration Form
          </h2>
         
          <label htmlFor="">Full Name:</label>
          <br />
          <input
            type="text"
            className="border border-slate-400 w-full h-[2.5rem] rounded-md"
            onChange={(e) => {
              setFullName(e.target.value);
            }}
            value={fullName}          />
          <br />
          <br />
          <label htmlFor="">Gender:</label>
          <br />
          <input
            type="text"
            className="border border-slate-400 w-full h-[2.5rem] rounded-md"
            onChange={(e) => {
              setGender(e.target.value);
            }}
            value={gender}
          />
          <br />
          <br />
          <label htmlFor="">Guardian Name:</label>
          <br />
          <input
            type="text"
            className="border border-slate-400 w-full h-[2.5rem] rounded-md"
            onChange={(e) => {
              setGuardian(e.target.value);
            }}
            value={guardianName}
          />
          <br />
          <br />
          <label htmlFor="">Address:</label>
          <br />
          <input
            type="text"
            className="border border-slate-400 w-full h-[2.5rem] rounded-md"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            value={address}
          />
          <br />
          <br />
          <label htmlFor="">Contact no:</label>
          <br />
          <input
            type="text"
            className="border border-slate-400 w-full h-[2.5rem] rounded-md"
            onChange={(e) => {
              setContact(e.target.value);
            }}
            value={contact}
          />
          <br />
          <br />

          <label>Select Semester:</label>
          <br />

          <select
            name=""
            id=""
            className="border border-slate-400 w-full h-[2.5rem] rounded-md"
            onChange={(e) => {
              setSemester(e.target.value);
            }}
            value={semester}
          >
            <option value={`First`}>1st Semester</option>
            <option value={`Second`}>2nd Semester</option>
            <option value={`Third`}>3rd Semester</option>
            <option value={`Fourth`}>4th Semester</option>
            <option value={`Fifth`}>5th Semester</option>
            <option value={`Sixth`}>6th Semester</option>
            <option value={`Seventh`}>7th Semester</option>
            <option value={`Eighth`}>8th Semester</option>
          </select>
          <br />
          <br />

          <label>ECA Envolvement:</label>
          <br />

          <select
            name=""
            id=""
            className="border border-slate-400 w-full h-[2.5rem] rounded-md"
            onChange={(e) => {
              setEcaInvolve(e.target.value);
            }}
            value={ecaInvolve}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <br />
          <br />
          <label>Part Time Job:</label>
          <br />

          <select
            name=""
            id=""
            className="border border-slate-400 w-full h-[2.5rem] rounded-md"
            onChange={(e) => {
              setPartTimeJob(e.target.value);
            }}
            value={partTimeJob}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <br />
          <br />
          <input
            type="submit"
            value="Submit"
            className="bg-indigo-950 text-white w-full h-[2.5rem] rounded-md cursor-pointer"
          />
        </form>
      </div>
    </>
  );
}

export default StudentRegForm;
