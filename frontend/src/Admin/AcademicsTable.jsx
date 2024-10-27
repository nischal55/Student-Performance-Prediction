import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AcademicsTable() {
  const [datas, setdatas] = useState([]);
  const [semester, setSemester] = useState("First");

  useEffect(() => {
    axios.get("/api/examAndStudents").then((res) => {
      setdatas(res.data);
    });
  }, []);
  const filteredData = datas.filter((data) => data.studentId.semester === semester);
  return (
    <>
      <div className="flex m-5 justify-between">
        <h2 className=" text-2xl">Academic Details</h2>
        <select
          className="w-96 border border-slate-200 rounded-md"
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
        <Link
          className="bg-indigo-950 text-white  p-2 px-5 mx-5 rounded-xl"
          to={`/academics`}
        >
          New Record
        </Link>
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
                {`Pre Board Grade`}
              </th>
              <th scope="col" className="px-6 py-3">
                {`Attendance`}
              </th>
              <th scope="col" className="px-6 py-3">
                {`Assignment Status`}
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((data) => {
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
                    <td className="px-6 py-4">{data.examGpa}</td>
                    <td className="px-6 py-4">{data.attendance}%</td>
                    <td className="px-6 py-4">{data.assignment}</td>

                    <td className="px-6 py-4">
                      <Link
                        to={`/academicsUpdate/${data._id}`}
                        className="font-medium text-blue-600 hover:underline"
                      >
                        Edit
                      </Link>
                      <Link
                        to={`/deleteAcademics/${data._id}`}
                        className="font-medium text-blue-600 hover:underline mx-4"
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AcademicsTable;
