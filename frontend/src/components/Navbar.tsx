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

        <Link to="/">
          <h1>CEO Chronicles</h1>
        </Link>
        <nav>
          {user && <div>
            <Link to="/new/interview">
              <h1>Publish +</h1>
            </Link>
            {user.email}
            <button className='logout' onClick={handleLogout}>Log out</button>
          </div>}

          {!user && (
            <div className='flex gap-2'>

              <Link to="/signup">
                <h1>Sign Up</h1>
              </Link>
              <Link to="/login">
                <h1>Log In</h1>
              </Link>
            </div>
          )}
        </nav>

    </header>
  )
}

export default Navbar
