import { IoIosPeople } from "react-icons/io";
import { TbReportAnalytics } from "react-icons/tb";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";

function AdminDash() {
  const [feedbacks, setFeedback] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("/api/feedbacks").then((res) => {
      setFeedback(res.data);
    });
  }, []);
  useEffect(() => {
    axios.get("/api/users").then((res) => {
      setUsers(res.data);
    });
  }, []);
  let count_users = users.length;
  let count_feedback = feedbacks.length;
  let total_rate = 0;
  feedbacks.map((feedback) => {
    total_rate = total_rate + feedback.rating;
  });
  let avg_rate = total_rate/count_feedback;
  let precent_rate = (avg_rate/5)*100;

  return (
    <>
      <div className="w-full flex flex-wrap justify-start gap-4 px-10 py-5">
        <div className="">
          <div className="flex flex-wrap">
            <div className="w-72 h-40 border border-slate-200 shadow-md">
              <IoIosPeople className="text-[4rem] text-indigo-900 mx-auto mt-5" />
              <p className="text-center text-slate-700">{count_users}</p>
            </div>
            <div className="w-72 h-40 border border-slate-200 shadow-md">
              <TbReportAnalytics className="text-[4rem] text-indigo-900  mx-auto mt-5" />
              <p className="text-center text-slate-700">{count_feedback}</p>
            </div>
          </div>
          <div className="w-[36rem] h-[20rem] border border-slate-200 shadow-md mt-4 ">
        
            <h2 className="text-center font-bold text-xl text-slate-600 p-4">
              Average Rating From Clients {avg_rate}
            </h2>
            <div className="flex justify-center mt-5">
              <div style={{ width: 200, height: 200 }}>
                <CircularProgressbar value={precent_rate} text={`${avg_rate}`} />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[43rem] h-[31rem] border border-slate-200 shadow-md overflow-y-scroll">
          <p className="text-slate-700 text-xl font-semibold text-center p-5">
            Latest Feedbacks From Clients
          </p>
          {feedbacks.map((feedback) => {
            return (
              <>
                <div className="w-9/13 border border-slate-200 p-3 mx-2 px-6  rounded">
                  <h2 className="text-md font-semibold">
                    {feedback.createdBy.username}
                  </h2>

                  <ReactStars
                    count={5}
                    value={feedback.rating}
                    size={15}
                    activeColor="#ffd700"
                    edit={false}
                  />
                  <p className="text-slate-600">{feedback.feedback}</p>
                </div>
                
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AdminDash;
