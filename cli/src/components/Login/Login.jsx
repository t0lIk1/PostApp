import './Login.css';
import NavBar from "../NavBar/NavBar.jsx";

const Login = () => {
  return (
    <div className="login form-block">
      <NavBar/>
      <div className="container">

        <form method="POST" className="login-form form">
          <h2 className="form-title">Login</h2>
          <input className="form-input border-style" type="text" name="email" placeholder="Email..."/>
          <input className="form-input border-style" type="password" name="password" placeholder="Password..."/>
          <a href="#" className="form-link">I don't have an account</a>
          <button className="form-submit border-style">login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
