import express from 'express';
import debug from 'debug';
import mongoose from 'mongoose';
import postsService from '../services/posts.service';
import { POST_TYPES_ENUM } from '../posts.enum';

const log: debug.IDebugger = debug('app:users-controller');

class PostsController {
  async createPost(req: express.Request, res: express.Response) {
    try {
      const {
        post_type,
        post_title,
        post_description,
        post_images_link,
        address,
        time,
      } = req.body;
      const { user_id } = res.locals.jwt;

      const isPostTypeValid =
        Object.values(POST_TYPES_ENUM)?.includes(post_type);
      if (!isPostTypeValid) {
        return res.status(400).json({
          error:
            "user_type must be in ['pomotional', 'advertisement', 'open_board_seats, 'community_event', 'fundraiser', 'recruit_for_volunteers', 'general_posts']",
        });
      }

      const post = await postsService.create({
        post_type,
        user_id,
        post_title,
        post_description,
        post_images_link,
        address,
        time,
      });
      return res.status(200).json({ success: true, data: post });
    } catch (e) {
      return res.status(500).json({ success: false, message: 'Error occured' });
    }
  }

  async updatePost(req: express.Request, res: express.Response) {
    try {
      const {
        post_type,
        post_title,
        post_description,
        post_images_link,
        post_id,
        address,
        time,
      } = req.body;

      if (post_type) {
        const isPostTypeValid =
          Object.values(POST_TYPES_ENUM)?.includes(post_type);
        if (!isPostTypeValid) {
          return res.status(400).json({
            error:
              "user_type must be in ['pomotional', 'advertisement', 'open_board_seats, 'community_event', 'fundraiser', 'recruit_for_volunteers', 'general_posts']",
          });
        }
      }

      const post = await postsService.updatePostById(
        {
          post_type,
          post_title,
          post_description,
          post_images_link,
          address,
          time,
        },
        post_id
      );
      return res.status(200).json({ success: true, data: post });
    } catch (e) {
      return res.status(500).json({ success: false, message: 'Error occured' });
    }
  }

  async commentOnPost(req: express.Request, res: express.Response) {
    try {
      const { comment_text, post_id } = req.body;
      const { user_id } = res.locals.jwt;
      const post = await postsService.getById(post_id);
      if (post_id) {
        let comments: any = [...post.post_comments];
        const newComment = {
          user_id,
          comment_text,
        };
        comments.push(newComment);
        const postUpdate = await postsService.updatePostCommentLikeById(
          {
            post_comments: comments,
            post_total_comments_count: comments.length,
          },
          post_id
        );
        return res.status(200).json({ success: true, data: postUpdate });
      } else {
        return res
          .status(404)
          .json({ success: false, message: 'post not found' });
      }
    } catch (e) {
      return res.status(500).json({ success: false, message: 'Error occured' });
    }
  }

  async likeOnPost(req: express.Request, res: express.Response) {
    try {
      const { post_id } = req.body;
      const { user_id } = res.locals.jwt;
      const post = await postsService.getById(post_id);
      if (post_id) {
        let likes: any = [...post.post_likes];
        const findUser = likes.find((d: String) => d == user_id);
        if (findUser) {
          likes = likes.filter((d: String) => d != user_id);
          const postUpdate = await postsService.updatePostCommentLikeById(
            {
              post_likes: likes,
              post_total_likes_count: likes.length,
            },
            post_id
          );
          return res.status(200).json({ success: true, data: postUpdate });
        } else {
          likes.push(user_id);
          const postUpdate = await postsService.updatePostCommentLikeById(
            {
              post_likes: likes,
              post_total_likes_count: likes.length,
            },
            post_id
          );
          return res.status(200).json({ success: true, data: postUpdate });
        }
      } else {
        return res
          .status(404)
          .json({ success: false, message: 'post not found' });
      }
    } catch (e) {
      return res.status(500).json({ success: false, message: 'Error occured' });
    }
  }

  async getPostById(req: express.Request, res: express.Response) {
    try {
      const { post_id }: any = req.query;
      const chec_id = mongoose.isValidObjectId(post_id);
      if (!chec_id) {
        return res
          .status(500)
          .json({ success: false, message: 'Prove valid id' });
      }
      const post = await postsService.getById(post_id || null);
      if (post) {
        return res.status(200).json({ success: true, data: post });
      } else {
        return res
          .status(404)
          .json({ success: false, message: 'Post not found' });
      }
    } catch (e) {
      return res.status(500).json({ success: false, message: 'Error occured' });
    }
  }

  async getAllPost(req: express.Request, res: express.Response) {
    try {
      const post = await postsService.getAll();
      if (post) {
        return res.status(200).json({ success: true, data: post });
      } else {
        return res
          .status(404)
          .json({ success: false, message: 'Posts not found' });
      }
    } catch (e) {
      return res.status(500).json({ success: false, message: 'Error occured' });
    }
  }

  async getCurrentUserPosts(req: express.Request, res: express.Response) {
    try {
      const { user_id } = res.locals.jwt;
      const post = await postsService.getByUserId(user_id);
      if (post) {
        return res.status(200).json({ success: true, data: post });
      } else {
        return res
          .status(404)
          .json({ success: false, message: 'Posts not found' });
      }
    } catch (e) {
      return res.status(500).json({ success: false, message: 'Error occured' });
    }
  }

  async getPostsByType(req: express.Request, res: express.Response) {
    try {
      const { post_type }: any = req.query;
      const post = await postsService.getByType(post_type || null);
      if (post) {
        return res.status(200).json({ success: true, data: post });
      } else {
        return res
          .status(404)
          .json({ success: false, message: 'Post not found' });
      }
    } catch (e) {
      return res.status(500).json({ success: false, message: 'Error occured' });
    }
  }
}

export default new PostsController();
