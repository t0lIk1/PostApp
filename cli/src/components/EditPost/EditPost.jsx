import "./EditPost.css"
import NavBar from "../NavBar/NavBar.jsx";

const EditPost = () => {
  return (
    <div className="editpost form-block">
      <NavBar/>
      <div className="container">

        <form method="POST" className="edit-form form">
          <h2 className="form-title">Edit Post</h2>
          <input className="form-input border-style" type="text" name="title" placeholder="Title..."/>
          <textarea className="form-input form-textarea border-style" name="email" placeholder="Text..."/>
          <button className="form-submit border-style">edit</button>
        </form>
      </div>
    </div>
  )
}


export default EditPost