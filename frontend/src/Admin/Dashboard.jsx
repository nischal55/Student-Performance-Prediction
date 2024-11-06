import { SiGoogleclassroom } from "react-icons/si";
import { IoIosPeople } from "react-icons/io";
import { PiUserSquareLight } from "react-icons/pi";
import { useEffect, useState } from "react";
import axios from 'axios'
import {
    Chart as ChartJs,
    ArcElement,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { Bar } from 'react-chartjs-2'

ChartJs.register(
    ArcElement,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
);

function Dashboard() {
   
    const [datas,setData] = useState([]); 
    const [users, setUsers] = useState([]);
    const [examData , setExamData] = useState([]);
    let [examCount, setExamCount] = useState([]);
    let [userCount, setUserCount] = useState(0);
    let [count,setCount] = useState(0);
    let [first,setFirst] = useState(0);
    let [second,setSecond] = useState(0);
    let [third,setThird] = useState(0);
    let [fourth,setFourth] = useState(0);
    let [fifth,setFifth] = useState(0);
    let [sixth,setSixth] = useState(0);
    let [seventh,setSeventh] = useState(0);
    let [eighth,setEighth] = useState(0);
    const createdBy = localStorage.getItem('userId')

    useEffect(()=>{
        axios.get('/api/students/'+createdBy).then((res)=>{
            setData(res.data)
        })
    },[])

    useEffect(()=>{
      axios.get('/api/users').then((res) => {
        setUsers(res.data);
      });
    }, []);

    useEffect(()=>{
      axios.get('/api/examAndStudents/'+createdBy).then((res) => {
        setExamData(res.data);
      });
    }, []);

    {users.map(()=>{
        userCount++
    })}
    {examData.map(()=>{
      examCount++
  })}


    

    {datas.map((data)=>{
        count++;
        if(data.semester == "Sixth"){
            sixth++;
        }else if(data.semester == "First"){
            first++;
        }else if(data.semester == "Second"){
            second++;
        }else if(data.semester == "Third"){
            third++;
        }else if(data.semester == "Fourth"){
            fourth++;
        }else if(data.semester == "Fifth"){
            fifth++;
        }else if(data.semester == "Seventh"){
            seventh++;
        }else if(data.semester == "Eighth"){
            eighth++;
        }

      })}

    const data = {
        datasets:[{
            label:'Student Count',
            data:[first,second,third,fourth,fifth,sixth,seventh,eighth],
            backgroundColor : ['#359aff','#001fff','#5c628d','#b6bfff','#ff0000','#ffe000','#00cb16','#ff6c00'],
            borderColor:['#359aff','#001fff','#5c628d','#b6bfff','#ff0000','#ffe000','#00cb16','#ff6c00']
        }]
    }
    const options ={
        radius:130
    }

    const barData = {
     labels:["first","second","Third","Fourth","Fifth","Sixth","Seventh","Eighth"],
      datasets:[{
        label:"",
        data:[first,second,third,fourth,fifth,sixth,seventh,eighth],
        backgroundColor : ['#359aff','#001fff','#5c628d','#b6bfff','#ff0000','#ffe000','#00cb16','#ff6c00'],
        borderColor:['#359aff','#001fff','#5c628d','#b6bfff','#ff0000','#ffe000','#00cb16','#ff6c00']
    }]
    }
    const barOptions ={
   
  }
      
  return (
    <>
      <div className="bg-slate-200 w-full flex">
        <div className="w-full">
          <div className="flex mx-5">
            <div className="w-[35%] mt-8">
              <div className="card w-full h-32 bg-white pt-3 flex justify-center">
                <div className="text-center">
                  <p className="text-center mt-2">Students Count</p>
                  <SiGoogleclassroom className="text-4xl text-indigo-900 mx-6" />
                  <p className="me-6">{count}</p>
                </div>
              </div>
            </div>
            <div className="w-[65%] mt-8 flex mx-2  justify-around">
              <div className="card w-[48%] h-32 pt-3 bg-white flex justify-center">
                <div className="text-center">
                  <p className="text-center mt-2">User Count</p>
                  <IoIosPeople className="text-4xl text-indigo-900 mx-6" />
                  <p className="">{userCount}</p>
                </div>
              </div>
              <div className="card w-[48%] pt-3 h-32 bg-white flex justify-center">
              <div className="text-center">
                  <p className="text-center mt-2">Prediction Count</p>
                  <PiUserSquareLight className="text-4xl text-indigo-900 mx-8" />
                  <p className="text-center me-5">{examCount}</p>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="w-full my-5 flex pb-6">
            <div className="w-full bg-white h-80 mx-5 flex">
                
             <Doughnut
                data={data}
                options={options}
             />
             <div>
                
                <ul className="mt-[5rem] mx-10">
                    <li className="text-sm">
                        <div className="w-4 h-2 mx-4 inline-flex" style={{backgroundColor:'#359aff'}}></div>
                        First Semester
                    </li>
                    <li className="text-sm">
                    <div className="w-4 h-2 mx-4 inline-flex" style={{backgroundColor:'#001fff'}}></div>
                        Second Semester
                    </li>
                    <li className="text-sm">
                    <div className="w-4 h-2 mx-4 inline-flex" style={{backgroundColor:'#5c628d'}}></div>
                        Third Semester
                        </li>
                    <li className="text-sm">
                    <div className="w-4 h-2 mx-4 inline-flex" style={{backgroundColor:'#b6bfff'}}></div>
                        Fourth Semester
                        </li>
                    <li className="text-sm">
                    <div className="w-4 h-2 mx-4 inline-flex" style={{backgroundColor:'#ff0000'}}></div>
                    Fifth Semester
                    </li>
                    <li className="text-sm">
                    <div className="w-4 h-2 mx-4 inline-flex" style={{backgroundColor:'#ffe000'}}></div>
                    Sixth Semester
                    </li>
                    <li className="text-sm">
                    <div className="w-4 h-2 mx-4 inline-flex" style={{backgroundColor:'#00cb16'}}></div>
                    Seventh Semester
                    </li>
                    <li className="text-sm">
                    <div className="w-4 h-2 mx-4 inline-flex" style={{backgroundColor:'#ff6c00'}}></div>
                    Eighth Semester
                    </li>
                </ul>
             </div>
             </div>
             <div className="w-full bg-white h-80 me-[2rem]">
                  <Bar
                    data={barData}
                    options={barOptions}
                  />
             </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Dashboard;
