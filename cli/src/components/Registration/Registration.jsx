import './Registration.css';
import NavBar from "../NavBar/NavBar.jsx";
import {Link} from "react-router-dom";
import {useContext, useState} from "react";
import {Context} from "../../main.jsx";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {store} = useContext(Context);
  return (
    <div className="registration form-block">
      <NavBar/>
      <div className="container">

        <div className="registration-form form">
          <h2 className="form-title">Registration</h2>
          <input className="form-input border-style" onChange={e => setName(e.target.value)} type="text"
                 name="name" placeholder="Name..."/>
          <input className="form-input border-style" onChange={e => setEmail(e.target.value)} type="text"
                 name="email" placeholder="Email..."/>
          <input className="form-input border-style" onChange={e => setPassword(e.target.value)}
                 type="password" name="password" placeholder="Password..."/>
          <Link to="/login" className="form-link">I have an account</Link>
          <button className="form-submit border-style"
                  onClick={() => store.registration(name, email, password)}>submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Registration;