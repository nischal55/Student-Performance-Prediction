import axios from "axios";
import { Line } from "rc-progress";
import { useEffect, useState } from "react";

function PredictComponent(props) {
const [predictedGpa, setPredictedGpa] = useState('');
  useEffect(() => {
    axios
      .post("http://localhost:5000/predict", props.jsonData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setPredictedGpa(res.data.predictions)
      });
  }, []);

  let gpaPercent = (predictedGpa/4)*100;
  let roundedGpa = Math.round(predictedGpa*100)/100

  return (
    <>
   
        <p className="text-xs mb-1">Predicted GPA: {roundedGpa}</p>
        <Line percent={gpaPercent} strokeWidth={4} strokeColor="#252abb" />
      
    </>
  );
}

export default PredictComponent;
