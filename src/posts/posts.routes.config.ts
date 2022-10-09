import { CommonRoutesConfig } from '../common/common.routes.config';
import postController from './controllers/posts.controller';
import express from 'express';
import BodyValidationMiddleware from '../common/middleware/body.validation.middleware';
import { body } from 'express-validator';
import jwtMiddleware from '../auth/middleware/jwt.middleware';

export class PostRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'PostRoutes');
  }

  configureRoutes() {
    this.app.post(`/post/create`, [
      jwtMiddleware.validJWTNeeded,
      body('post_type').isString(),
      body('post_title').isString(),
      body('post_description').isString(),
      BodyValidationMiddleware.verifyBodyFieldsErrors,
      postController.createPost,
    ]);

    this.app.put(`/post/update`, [
      jwtMiddleware.validJWTNeeded,
      body('post_id').isString(),
      BodyValidationMiddleware.verifyBodyFieldsErrors,
      postController.updatePost,
    ]);

    this.app.post(`/post/comment`, [
      jwtMiddleware.validJWTNeeded,
      body('post_id').isString(),
      body('comment_text').isString(),
      BodyValidationMiddleware.verifyBodyFieldsErrors,
      postController.commentOnPost,
    ]);

    this.app.post(`/post/like`, [
      jwtMiddleware.validJWTNeeded,
      body('post_id').isString(),
      BodyValidationMiddleware.verifyBodyFieldsErrors,
      postController.likeOnPost,
    ]);

    this.app.get(`/post/current_user`, [
      jwtMiddleware.validJWTNeeded,
      postController.getCurrentUserPosts,
    ]);

    this.app.get(`/post/one`, postController.getPostById);

    this.app.get(`/post/type`, postController.getPostsByType);

    this.app.get(`/post/all`, postController.getAllPost);

    return this.app;
  }
}
