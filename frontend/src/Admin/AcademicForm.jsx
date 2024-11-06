import axios from "axios";
import { useState,useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function AcademicForm() {
  const navigate = useNavigate();
  const [students,setStudents] = useState([]);
  const [studentId, setStudentId] = useState('');
  const [examGpa, setExamGpa] = useState('');
  const [assignment, setAssignment] = useState('');
  const [attendance, setAttendance] = useState('');
  const createdBy = localStorage.getItem('userId')

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(studentId != "0"){
      axios.post('/api/exam',{studentId,examGpa,assignment,attendance,createdBy}).then((res)=>{
        navigate('/studentTable')
        toast.success(res.data.meassage)
      }).catch((err) => {
        toast.error(err.response.data);
      });
    }
  }
  
  useEffect(()=>{
    axios.get('/api/students').then((res)=>{setStudents(res.data)})
  },[])
  
  return (
    <>
     <div className="flex justify-center p-8 ">
        
        <form   className="border border-slate-200 rounded p-10" onSubmit={handleSubmit}>
        <h2 className="text-center text-3xl my-8 font-semibold">Academics Form</h2>
          <label htmlFor="">{`Student's Name`}</label>
          <br />
          <select name="" id="" className="w-96 h-10 border border-slate-200" onChange={(e)=>{setStudentId(e.target.value)}}>
            <option value="0">Select the Student</option>
            {students.map((student)=>{
              return(
                <>
                <option value={student._id}>{student.fullName}</option>
                </>
              )
            })}
            
          </select>
          <br />
          <br />
          <label htmlFor="">Preboard Exam Grade:</label>
          <br />
          <input type="text" className="border border-slate-200 w-96 h-10" onChange={(e)=>{setExamGpa(e.target.value)}}/>
          <br />
          <br />
          <label htmlFor="">Assignment Status:</label>
          <br />
          <input type="text" className="border border-slate-200 w-96 h-10" onChange={(e)=>{setAssignment(e.target.value)}}/>
          <br />
          <br />
          <label htmlFor="">Attendance:</label>
          <br />
          <input type="text" className="border border-slate-200 w-96 h-10" onChange={(e)=>{setAttendance(e.target.value)}}/>
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

export default AcademicForm;
