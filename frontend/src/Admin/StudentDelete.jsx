import { toast } from 'react-toastify';
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from "react-router-dom";
import {  useNavigate } from "react-router-dom";


function StudentDelete() {
    const {id} = useParams();
    const navigate = useNavigate();
    let confirmation = confirm("Are you sure to Delete?")
    if(confirmation){
        axios.delete('/api/students/'+id).then((res)=>{
            toast.success(res.data.meassage)
            navigate('/studentTable')
        })
    }else{
        navigate('/studentTable')
    }
    return (
        <>
            
        </>
    );
}

export default StudentDelete;