

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import bg1 from '../assets/images/amin-bg1-remove.png'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post('http://157.173.222.27:8080/api/v1/auth/admin/login', {
        email,
        password,
      });
      const token = response.data.token; // Adjust this based on your API response structure
      localStorage.setItem('authToken', token);
      console.log('Token stored successfully');
      window.location.reload();
      navigate('/dashboard');
    } catch (error) {
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-800 h-screen sm:h-auto  ">
        <div className=' flex flex-row items-center justify-center  bg-bg-image  bg-no-repeat bg-cover h-full  sm:pb-4  sm:pt-[1.4rem]    '>
          <div className='  items-center  justify-center md:block hidden'>
            <img className='w-[38rem] h-[32rem]' src={bg1} alt="bg1" /></div>
          <div className=" justify-center items-center w-full bg-white mx-6 rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-900 dark:border-gray-700   ">
          <h1 className="text-4xl font-bold leading-tight tracking-tight pl-6   pt-4  md:text-3xl dark:text-white">
                Welcome User
              </h1>
              <h1 className="text-3xl font-semibold leading-tight tracking-tight  md:text-2xl text-gray-400 dark:text-white pt-3  pl-7">
                Sign in to continue
              </h1>
            <div className="m-6 p-2  space-y-4 md:space-y-6 sm:m-8">
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="/"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-gray-400"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                className="w-full  text-gray-200 text-xl bg-sky-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-normal rounded-lg px-3 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  Sign in
                </button>
                {error && <p className="text-sm font-light text-red-500">{error}</p>}
                <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                  Don't have an account yet?{' '}
                  <a
                    href="/"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
          </div>

        {/* </div> */}
      </section>
    </div>
  );
}

export default Login;


