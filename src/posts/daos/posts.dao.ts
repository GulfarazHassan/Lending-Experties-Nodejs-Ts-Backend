import {
  CreatePostDto,
  UpdatePostCommentsLikesDto,
  UpdatePostDto,
} from '../dto/posts.dto';
// import { PatchUserDto } from '../dto/patch.user.dto';
// import { PutUserDto } from '../dto/put.user.dto';
import mongooseService from '../../common/services/mongoose.service';
import debug from 'debug';

const log: debug.IDebugger = debug('app:in-memory-dao');

class PostsDao {
  Schema = mongooseService.getMongoose().Schema;
  postSchema = new this.Schema(
    {
      post_type: { type: String, default: '' },
      user_id: { type: this.Schema.Types.ObjectId, ref: 'Users' },
      post_title: { type: String, default: '' },
      post_description: { type: String, default: '' },
      post_images_link: { type: [{ type: String }], default: [] },
      post_likes: {
        type: [{ type: this.Schema.Types.ObjectId, ref: 'Users' }],
        default: [],
      },
      post_total_likes_count: { type: Number, default: 0 },
      post_total_comments_count: { type: Number, default: 0 },
      post_comments: {
        type: [
          {
            user_id: { type: this.Schema.Types.ObjectId, ref: 'Users' },
            comment_text: { type: String, default: '' },
          },
        ],
        default: [],
      },
    },
    {
      timestamps: true,
    }
  );

  Post =
    mongooseService.getMongoose().models.Posts ||
    mongooseService.getMongoose().model('posts', this.postSchema);
  constructor() {
    log('create new instance in post');
  }

  async addPost(fields: CreatePostDto) {
    const post = new this.Post({
      ...fields,
    });
    await post.save();
    return post;
  }

  async getPostsByUserId(id: string) {
    return this.Post.find({ user_id: id }).exec();
  }

  async getPostsByType(type: string) {
    return this.Post.find({ post_type: type }).exec();
  }

  async getPostById(id: string) {
    return this.Post.findById(id).exec();
  }

  async updatePostById(fields: UpdatePostDto, id: string) {
    const post = await this.Post.findOneAndUpdate(
      { _id: id },
      { $set: fields },
      { new: true }
    ).exec();

    return post;
  }

  async updatePostCommentLikeById(
    fields: UpdatePostCommentsLikesDto,
    id: string
  ) {
    const post = await this.Post.findOneAndUpdate(
      { _id: id },
      { $set: fields },
      { new: true }
    ).exec();

    return post;
  }

  async getAllPosts() {
    return this.Post.find().exec();
  }
}

export default new PostsDao();
