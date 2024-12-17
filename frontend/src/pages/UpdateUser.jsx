import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const UpdateUser = () => {

    const { id } = useParams()

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3001/getUser/' + id)
            .then(result => {
                console.log(result.data);
                setName(result.data.name)
                setEmail(result.data.email)
                setAge(result.data.age)

            })
            .catch(err => console.log(err))
    })

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put("http://localhost:3001/updateUser/" + id, { name, email, age })
            .then(result => {
                console.log(result)
                navigate('/')
            }
            )
            .catch(err => console.log(err)
            )
    }


    return (
        <div className="flex items-center justify-center p-12 rounded-lg bg-gray-100">
            <div className="w-full bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-5xl font-bold  text-center mb-12 text-gray-700">Update</h2>
                <form onSubmit={submitHandler}>
                    {/* Name Field */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className="w-[25rem] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Email Field */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-[25rem] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Age Field */}
                    <div className="mb-4">
                        <label htmlFor="age" className="block text-gray-700 font-medium mb-1">
                            Age
                        </label>
                        <input
                            type="number"
                            id="age"
                            placeholder="Enter your age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className="w-[25rem] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 mt-12 px-4 rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateUser;
