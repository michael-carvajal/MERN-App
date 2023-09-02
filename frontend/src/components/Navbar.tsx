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
    <header className='w-full flex justify-between p-3'>

        <Link to="/" className='font-bold text-3xl hover:text-gray-800'>
          CEO Chronicles
        </Link>
        <nav>
          {user && <div>
            <Link to="/new/interview">
              <h1>Publish +</h1>
            </Link>
            {user.email}
          <button className=' text-slate-400 customButton' onClick={handleLogout}>Log out</button>
          </div>}

          {!user && (
            <div className='flex gap-2'>

            <Link to="/signup" className="bg-white hover:bg-gray-300 text-gray-800  py-2 px-4 border border-gray-400 rounded shadow">
                Sign Up
              </Link>
            <Link to="/login" className="bg-white hover:bg-gray-300 text-gray-800  py-2 px-4 border border-gray-400 rounded shadow">
                Log In
              </Link>
            </div>
          )}
        </nav>

    </header>
  )
}

export default Navbar
