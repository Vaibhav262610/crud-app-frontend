import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const CreateUser = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()


    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://crud-app-mern-api-nine.vercel.app/create-user", { name, email, age })
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
                <h2 className="text-5xl font-bold  text-center mb-12 text-gray-700">Create</h2>
                <form onSubmit={submitHandler}>
                    {/* Name Field */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
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
                            onChange={(e) => setAge(e.target.value)}
                            id="age"
                            placeholder="Enter your age"
                            className="w-[25rem] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 mt-12 px-4 rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateUser;
