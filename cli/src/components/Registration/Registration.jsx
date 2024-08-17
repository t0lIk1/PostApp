import './Registration.css';
import NavBar from "../NavBar/NavBar.jsx";

const Registration = () => {
  return (
    <div className="registration form-block">
      <NavBar/>
      <div className="container">

        <form method="POST" className="registration-form form">
          <h2 className="form-title">Registration</h2>
          <input className="form-input border-style" type="text" name="name" placeholder="Name..."/>
          <input className="form-input border-style" type="text" name="email" placeholder="Email..."/>
          <input className="form-input border-style" type="password" name="password" placeholder="Password..."/>
          <a href="#" className="form-link">I have an account</a>
          <button className="form-submit border-style">submit</button>
        </form>
      </div>
    </div>
  )
}

export default Registration;