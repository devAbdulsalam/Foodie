import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alert, setAlert] = useState(false)

    const handleAlert = () => {
        setAlert(!alert)
        setTimeout(() => {
            setAlert(!alert)
        }, 500);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(email || password){
            console.log(email, password)
            navigate("/dashboard")
        }else{
            handleAlert()
        }
    }
  return (
        <div id="login" className="h-screen w-screen flex justify-center items-center flex-col">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h1 className="mx-auto h-12 w-auto text-center text-2xl font-extrabold text-green-500">
                    Foodie
                </h1>
                <h2 className="mt-6 text-center text-xl font-semibold text-gray-900">
                    Login to Your Account
                </h2>
            </div>
            <div className="mt-8 sm:mx-auto w-full sm:max-w-lg px-4">
                <div className="bg-gray-50 py-8 px-6 shadow-xl rounded-lg">
                    <form className="mb-0 space-y-6 w-full" >
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-lg font-medium text-gray-700"
                                >Email address</label>
                            <div className="mt-1">
                                <input
                                    onChange={(e)=> setEmail(e.target.value)}
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className='w-full'>
                            <label
                                htmlFor="password"
                                className="block text-lg font-medium text-gray-700"
                                >Password</label>
                            <div className="mt-1 w-full">
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    name="password"
                                    type="password"
                                    required
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                                />
                            </div>
                        </div>
                        <div>
                            <p  className={`${alert ? "block" : "hidden"} -mt-5 text-center font-semibold p-1 text-red-500`}>Email or Password is incorrect</p>
                        </div>
                        <div>
                            <p className="text-center text-lg text-gray-600 max-w">
                                Not registered?
                                <span id="toggleLogin" className="font-medium text-green-600 cursor-pointer hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"> Sign Up</span >
                            </p>
                        </div>
                        <div>
                            <button  type="submit" onClick={handleSubmit}
                                className="w-full flex text-lg justify-center py-2 px-4 border border-transparent rounded-md shadow-sm font-medium text-white bg-green-600 hover:bg-green-400 focus:outline-none "
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
  )
}

export default Login