import axios from "axios";
import { Line } from "rc-progress";
import { useState, useEffect } from "react";
import PredictComponent from "./PredictComponent";

function Report() {
  const [datas, setDatas] = useState([]);
  const [semester, setSemester] = useState("First");

  useEffect(() => {
    axios.get("/api/examAndStudents").then((res) => {
      setDatas(res.data);
    });
  }, []);

  const filteredData = datas.filter(
    (data) => data.studentId.semester === semester
  );

  return (
    <>
      <div className="w-full  ">
        <div className="flex m-5 justify-start">
          <h2 className=" text-2xl">Students Report</h2>
          <select
            className="w-96 border border-slate-200 mx-10 rounded-md"
            onChange={(e) => {
              setSemester(e.target.value);
            }}
          >
            <option value="First">First Semester</option>
            <option value="Second">Second Semester</option>
            <option value="Third">Third Semester</option>
            <option value="Fourth">Fourth Semester</option>
            <option value="Fifth">Fifth Semester</option>
            <option value="Sixth">Sixth Semester</option>
            <option value="Seventh">Seventh Semester</option>
            <option value="Eighth">Eighth Semester</option>
          </select>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-4">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 text-center">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Student Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>

                <th scope="col" className="px-6 py-3">
                  {`Semester`}
                </th>
                <th scope="col" className="px-6 py-3">
                  {`Assignment Status`}
                </th>
                <th scope="col" className="px-6 py-3">
                  {`Pre Board Grade`}
                </th>
                <th scope="col" className="px-6 py-3">
                  {`Attendance`}
                </th>
                <th scope="col" className="px-6 py-3">
                  {`Predicted GPA`}
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredData.map((data) => {
                let gpa = Math.round((data.examGpa / 4) * 100);
                let Previous_Grade = data.examGpa;
                let Attendance = data.attendance;
                let ExtraCurricular = data.studentId.ecaInvolve;
                let PartTimeJob = data.studentId.partTimeJob;
                let Assignment = data.assignment;

                let partJob = 0;
                let eca = 0;

                if (PartTimeJob == "Yes") {
                  partJob = 1;
                } else {
                  partJob = 0;
                }

                if (ExtraCurricular == "Yes") {
                  eca = 1;
                } else {
                  eca = 0;
                }

                let jsonString = [
                  {
                    "Previous Grade (GPA)": Previous_Grade,
                    Attendance: Attendance,
                    ExtraCurricular: eca,
                    PartTimeJob: partJob,
                    Assignment: Assignment,
                  },
                ];
                const predictKey = `${data.studentId._id}-${semester}`;

                return (
                  <>
                    <tr className="bg-white border-b ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        {data.studentId.fullName}
                      </th>
                      <td className="px-6 py-4">{data.studentId.address}</td>
                      <td className="px-6 py-4">{data.studentId.semester}</td>
                      <td className="px-6 py-4">{data.assignment}</td>
                      <td className="px-6 py-4">
                        <p className="text-xs mb-1">
                          GPA Score: {data.examGpa}
                        </p>
                        <Line
                          percent={gpa}
                          strokeWidth={4}
                          strokeColor="#252abb"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-xs mb-1">
                          Attendance: {data.attendance} %
                        </p>
                        <Line
                          percent={data.attendance}
                          strokeWidth={4}
                          strokeColor="#252abb"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <PredictComponent key={predictKey} jsonData={jsonString} />
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Report;
