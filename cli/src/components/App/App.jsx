import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostPage from "../PostPage/PostPage.jsx";
import Login from "../Login/Login.jsx";
import Registration from "../Registration/Registration.jsx";
import CreatePost from "../CreatePost/CreatePost.jsx";
import EditPost from "../EditPost/EditPost.jsx";
import PostsPage from "../PostsPage/PostsPage.jsx";
// import NotFound from "../NotFound/NotFound.jsx"; // Допустим, у вас есть компонент для страницы 404

const App = () => {
    return (
      <Router >
        <Routes>
          <Route path="/" element={<PostsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/edit-post/:id" element={<EditPost />} /> {/* Динамический маршрут */}
          <Route path="*" element={<h1>не найдено</h1>} /> {/* Обработка неизвестных маршрутов */}
        </Routes>
      </Router>
    );
}

export default App;
