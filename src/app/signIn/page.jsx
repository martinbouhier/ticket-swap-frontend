import React, { useState } from 'react';
import axios from 'axios';
import SignUp from '../signup/page';

export default function SignIn() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUpClick = (e) => {
    e.preventDefault();
    setShowSignUp(true);
  };

  const handleSignInClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_TICKET_SWAP_API_URL}/users/login`, { username, password });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (showSignUp) {
    return <SignUp />;
  }
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 z-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
        <div>
        <label htmlFor="username" className="block text-sm font-medium leading-5 text-gray-700">
          Username
        </label>
        <div className="mt-1 rounded-md shadow-sm">
          <input id="username" type="username" required className="text-black appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" 
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">
          Password
        </label>
        <div className="mt-1 rounded-md shadow-sm">
          <input id="password" type="password" required className="text-black appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" 
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
      </div>

          <div>
          <button
          onClick={handleSignInClick}
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign in
        </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <button
            onClick={handleSignUpClick}
            type="button"
            className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}
