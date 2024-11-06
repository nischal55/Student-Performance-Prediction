import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserTable() {
  const [datas, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/users").then((res) => {
      setData(res.data);
    });
    console.log(datas);
  }, []);

  return (
    <>
      <div className="flex m-5 justify-between">
        <h2 className=" text-2xl">User Details</h2>
        {/* <Link
          className="bg-indigo-950 text-white  p-2 px-5 mx-5 rounded-xl"
          to={`/userReg`}
        >
          New User
        </Link> */}
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 text-center">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                Contact No
              </th>
              <th scope="col" className="px-6 py-3">
                {`EmailID`}
              </th>
              <th scope="col" className="px-6 py-3">
                {`Role`}
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {datas.map((data) => {
              return (
                <>
                  <tr className="bg-white border-b ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {data.username}
                    </th>
                    <td  className="px-6 py-4">{data.contact}</td>
                    <td className="px-6 py-4">{data.email}</td>
                    <td className="px-6 py-4">{data.role}</td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 hover:underline"
                      >
                        Edit
                      </a>
                      <a
                        href="#"
                        className="font-medium text-blue-600 hover: mx-2"
                      >
                        Delete
                      </a>
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

export default UserTable;
