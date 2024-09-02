import $api from "../http/index.js";

export default class PostService {
  static async createPost(title, text) {
    return $api.post('/create', { title, text });
  }

  static async editPost(postId, title, text) {
    return $api.put(`/edit/${postId}`, { title, text });  // Правильное использование postId в URL
  }

  static async deletePost(postId) {
    return $api.delete(`/delete/${postId}`);  // Правильное использование postId в URL
  }

  static async getPosts() {
    return $api.get('/get');
  }
}
