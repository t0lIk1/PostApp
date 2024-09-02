import './NavBar.css'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="menu">
      <div className="container">
        <ul className="menu__list">
          <li><Link to='/' className="menu__link">Posts</Link></li>
          <li><Link to="/login" className="menu__link">Login</Link></li>
        </ul>
      </div>
    </nav>

  )
}

export default NavBar;
