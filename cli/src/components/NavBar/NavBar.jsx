import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="menu">
      <div className="container">
        <ul className="menu__list">
          <li><a href="#" className="menu__link">Posts</a></li>
          <li><a href="#" className="menu__link">Login</a></li>
        </ul>
      </div>
    </nav>

  )
}

export default NavBar;
