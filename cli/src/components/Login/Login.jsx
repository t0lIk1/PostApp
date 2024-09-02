import './Login.css';
import NavBar from "../NavBar/NavBar.jsx";
import {Link} from "react-router-dom";
import {useContext, useState} from "react";
import {Context} from "../../main.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {store} = useContext(Context);
  return (
    <div className="login form-block">
      <NavBar/>
      <div className="container">

        <div className="login-form form">
          <h2 className="form-title">Login</h2>

          <input className="form-input border-style" onChange={e => setEmail(e.target.value)} type="text"
                 name="email"
                 placeholder="Email..."/>
          <input className="form-input border-style" onChange={e => setPassword(e.target.value)}
                 type="password" name="password" placeholder="Password..."/>

          <Link to="/registration" className="form-link">I don't have an account</Link>
          <button className="form-submit border-style" onClick={() => store.login(email, password)}>login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
