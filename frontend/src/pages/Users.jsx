import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001')
            .then(result => {
                setUsers(result.data)

            }
            )
            .catch(err => console.log(err)
            )
    })
    // console.log(users);

    const deleteHandler = (id) => {
        axios.delete("http://crud-app-mern-api-nine.vercel.app/deleteUser/ " + id)
            .then(res =>
                console.log(res)
            )
            .catch(err => console.log(err)
            )
    }
    return (
        <div className="flex flex-col justify-center p-12 rounded-lg items-center bg-gray-100">
            <div>
                <h1 className="text-5xl font-bold mb-10">CRUD APP</h1>
            </div>
            <div className="flex ml-12 w-full max-w-4xl mb-4">
                <Link
                    to="/create"
                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
                >
                    Add +
                </Link>
            </div>
            <div className="overflow-x-auto w-full max-w-4xl p-4">
                <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">Name</th>
                            <th className="py-3 px-6 text-left">Email</th>
                            <th className="py-3 px-6 text-center">Age</th>
                            <th className="py-3 px-6 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {users.map((row, index) => (
                            <tr
                                key={index}
                                className="border-b border-gray-200 hover:bg-gray-100"
                            >
                                <td className="py-3 px-6 text-left whitespace-nowrap">
                                    {row.name}
                                </td>
                                <td className="py-3 px-6 text-left">{row.email}</td>
                                <td className="py-3 px-6 text-center">{row.age}</td>
                                <td className="py-3 px-6 text-center">
                                    <Link to={`/update/${row._id}`} className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition duration-300">
                                        Update
                                    </Link>
                                    <button onClick={(e) => deleteHandler(row._id)} className="bg-red-500 text-white py-1 px-3 rounded ml-2 hover:bg-red-600 transition duration-300">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
