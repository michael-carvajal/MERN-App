import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>CEO Chronicles</h1>
        </Link>
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
