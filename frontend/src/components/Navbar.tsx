import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import  useLogout  from '../hooks/useLogout';
import React from 'react';

const Navbar: React.FC = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleLogout = () => {
    logout()
  }

  return (
<header className="w-full flex flex-col md:flex-row justify-between p-3 md:w-3/4 my-0 mx-auto items-center">
      <Link to="/" className="font-bold text-3xl hover:text-gray-800">
        CEO Chronicles
      </Link>
      <nav className="mt-3 md:mt-0 flex flex-wrap gap-2">
        {user && (
          <div className="flex gap-2 items-center">
            <Link to="/new/interview" className="text-xl hover:text-gray-800">
              Publish +
            </Link>
            <span className="text-gray-600">{user.email}</span>
            <button
              className="text-slate-400 customButton"
              onClick={handleLogout}
            >
              Log out
            </button>
          </div>
        )}

        {!user && (
          <div className="flex justify-between w-[211px]">
            <Link
              to="/signup"
              className="bg-white hover:bg-gray-300 text-gray-800 py-2 px-4 border border-gray-400 rounded shadow "
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="bg-white hover:bg-gray-300 text-gray-800 py-2 px-4 border border-gray-400 rounded shadow "
            >
              Log In
            </Link>
          </div>
        )}
      </nav>
    </header>
  );

}

export default Navbar
