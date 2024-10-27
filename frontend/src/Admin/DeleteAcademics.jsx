import { toast } from 'react-toastify';
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from "react-router-dom";
import {  useNavigate } from "react-router-dom";

function DeleteAcademics() {
    const {id} = useParams();
    const navigate = useNavigate();
    let confirmation = confirm("Are you sure to Delete?")
    if(confirmation){
        axios.delete('/api/exam/'+id).then((res)=>{
            toast.success(res.data.meassage)
            navigate('/academicTable')
        })
    }else{
        navigate('/academicTable')
    }
    return (
        <>
            
        </>
    );
}

export default DeleteAcademics;