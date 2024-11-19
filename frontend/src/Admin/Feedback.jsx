import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  useNavigate } from "react-router-dom";

function Feedback() {

  const [rating, setRating] = useState('');
  const [feedback, setFeedBack] = useState(''); 
  const createdBy = localStorage.getItem('userId')
  const navigate = useNavigate();

  const ratingChanged = (newRating) => {
    setRating(newRating)
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('/api/feedbacks',{rating,feedback,createdBy}).then((res)=>{
      toast.success(res.data)
      navigate('/')
    })
  }

  

  return (
    <>
      <div className="w-full mx-auto mt-10">
        <form onSubmit={handleSubmit} className="max-w-sm  shadow-md p-10 mx-auto border border-slate-200">
          <h2 className="text-3xl text-center font-semibold">FeedBack Form</h2><br />
          <label htmlFor="">Rating:</label>

          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={32}
            activeColor="#ffd700"
          /><br />
          <label htmlFor="">Feedback:</label>
          <br />
          <textarea
            name=""
            id=""
            className="border border-slate-300 w-full h-24"
            onChange={(e)=>{setFeedBack(e.target.value)}}
          ></textarea>
          <br />
          <input type="submit" value="Submit" className="bg-indigo-800 text-white rounded w-full h-10 mt-5 cursor-pointer" />
        </form>
      </div>
    </>
  );
}

export default Feedback;
