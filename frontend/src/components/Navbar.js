import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import  useLogout  from '../hooks/useLogout';

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  console.log(user);
  const handleLogout = () => {
    logout()
  }

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>CEO Chronicles</h1>
        </Link>
        <div>

        <button className='logout' onClick={handleLogout}>Log out</button>
        </div>
        <nav>

          <Link to="/signup">
            <h1>Sign Up</h1>
          </Link>
          <Link to="/login">
            <h1>Log In</h1>
          </Link>
        </nav>

      </div>
    </header>
  )
}

export default Navbar
