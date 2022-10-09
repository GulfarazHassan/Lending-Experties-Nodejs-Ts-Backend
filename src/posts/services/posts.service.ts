import PostsDao from '../daos/posts.dao';
import {
  CreatePostDto,
  UpdatePostCommentsLikesDto,
  UpdatePostDto,
} from '../dto/posts.dto';

class PostsService {
  async create(resource: CreatePostDto) {
    return PostsDao.addPost(resource);
  }

  async updatePostById(resource: UpdatePostDto, id: string) {
    return PostsDao.updatePostById(resource, id);
  }

  async updatePostCommentLikeById(
    resource: UpdatePostCommentsLikesDto,
    id: string
  ) {
    return PostsDao.updatePostCommentLikeById(resource, id);
  }

  async getById(id: string) {
    return PostsDao.getPostById(id);
  }

  async getAll() {
    return PostsDao.getAllPosts();
  }

  async getByUserId(id: string) {
    return PostsDao.getPostsByUserId(id);
  }

  async getByType(type: string) {
    return PostsDao.getPostsByType(type);
  }
}

export default new PostsService();
