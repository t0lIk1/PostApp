import "./CreatePost.css"
import NavBar from "../NavBar/NavBar.jsx";

const CreatePost = () => {
  return (
    <div className="createpost form-block">
      <NavBar/>
      <div className="container">

        <form method="POST" className="create-form form">
          <h2 className="form-title">Create Post</h2>
          <input className="form-input border-style" type="text" name="title" placeholder="Title..."/>
          <textarea className="form-input border-style form-textarea" name="text" placeholder="Text..."/>
          <button className="form-submit border-style">create</button>
        </form>
      </div>
    </div>
  )
}


export default CreatePost