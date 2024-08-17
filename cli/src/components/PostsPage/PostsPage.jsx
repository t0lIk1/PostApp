import './PostsPage.css';
import NavBar from "../NavBar/NavBar.jsx";

const PostsPage = () => {
  return (
    <div className="posts">
      <NavBar/>
      <div className="container">
        <ul className="posts-list">
          <li className="posts-item border-style">
            <div className="post-info">
              <span className="post-creator">Joe</span>
              <span className="post-date">11.02.2024</span>
            </div>
            <div className="post-content">
              <span className="post-title">lorem</span>
              <p className="post-description">Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Adipisci aspernatur consequatur consequuntur debitis error esse et iste modi
                molestiae, molestias nam officiis quae, quam, rerum sapiente! Architecto nostrum placeat unde.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PostsPage;
