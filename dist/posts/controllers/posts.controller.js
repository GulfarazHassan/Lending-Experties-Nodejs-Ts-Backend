"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
const mongoose_1 = __importDefault(require("mongoose"));
const posts_service_1 = __importDefault(require("../services/posts.service"));
const posts_enum_1 = require("../posts.enum");
const log = (0, debug_1.default)('app:users-controller');
class PostsController {
    createPost(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { post_type, post_title, post_description, post_images_link } = req.body;
                const { user_id } = res.locals.jwt;
                const isPostTypeValid = (_a = Object.values(posts_enum_1.POST_TYPES_ENUM)) === null || _a === void 0 ? void 0 : _a.includes(post_type);
                if (!isPostTypeValid) {
                    return res.status(400).json({
                        error: "user_type must be in ['pomotional', 'advertisement', 'open_board_seats, 'community_event', 'fundraiser', 'recruit_for_volunteers', 'general_posts']",
                    });
                }
                const post = yield posts_service_1.default.create({
                    post_type,
                    user_id,
                    post_title,
                    post_description,
                    post_images_link,
                });
                return res.status(200).json({ success: true, data: post });
            }
            catch (e) {
                return res.status(500).json({ success: false, message: 'Error occured' });
            }
        });
    }
    updatePost(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { post_type, post_title, post_description, post_images_link, post_id, } = req.body;
                if (post_type) {
                    const isPostTypeValid = (_a = Object.values(posts_enum_1.POST_TYPES_ENUM)) === null || _a === void 0 ? void 0 : _a.includes(post_type);
                    if (!isPostTypeValid) {
                        return res.status(400).json({
                            error: "user_type must be in ['pomotional', 'advertisement', 'open_board_seats, 'community_event', 'fundraiser', 'recruit_for_volunteers', 'general_posts']",
                        });
                    }
                }
                const post = yield posts_service_1.default.updatePostById({
                    post_type,
                    post_title,
                    post_description,
                    post_images_link,
                }, post_id);
                return res.status(200).json({ success: true, data: post });
            }
            catch (e) {
                return res.status(500).json({ success: false, message: 'Error occured' });
            }
        });
    }
    commentOnPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { comment_text, post_id } = req.body;
                const { user_id } = res.locals.jwt;
                const post = yield posts_service_1.default.getById(post_id);
                if (post_id) {
                    let comments = [...post.post_comments];
                    const newComment = {
                        user_id,
                        comment_text,
                    };
                    comments.push(newComment);
                    const postUpdate = yield posts_service_1.default.updatePostCommentLikeById({
                        post_comments: comments,
                        post_total_comments_count: comments.length,
                    }, post_id);
                    return res.status(200).json({ success: true, data: postUpdate });
                }
                else {
                    return res
                        .status(404)
                        .json({ success: false, message: 'post not found' });
                }
            }
            catch (e) {
                return res.status(500).json({ success: false, message: 'Error occured' });
            }
        });
    }
    likeOnPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { post_id } = req.body;
                const { user_id } = res.locals.jwt;
                const post = yield posts_service_1.default.getById(post_id);
                if (post_id) {
                    let likes = [...post.post_likes];
                    const findUser = likes.find((d) => d == user_id);
                    if (findUser) {
                        return res
                            .status(200)
                            .json({ success: false, message: 'User already like this post' });
                    }
                    likes.push(user_id);
                    const postUpdate = yield posts_service_1.default.updatePostCommentLikeById({
                        post_likes: likes,
                        post_total_likes_count: likes.length,
                    }, post_id);
                    return res.status(200).json({ success: true, data: postUpdate });
                }
                else {
                    return res
                        .status(404)
                        .json({ success: false, message: 'post not found' });
                }
            }
            catch (e) {
                return res.status(500).json({ success: false, message: 'Error occured' });
            }
        });
    }
    getPostById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { post_id } = req.query;
                const chec_id = mongoose_1.default.isValidObjectId(post_id);
                if (!chec_id) {
                    return res
                        .status(500)
                        .json({ success: false, message: 'Prove valid id' });
                }
                const post = yield posts_service_1.default.getById(post_id || null);
                if (post) {
                    return res.status(200).json({ success: true, data: post });
                }
                else {
                    return res
                        .status(404)
                        .json({ success: false, message: 'Post not found' });
                }
            }
            catch (e) {
                return res.status(500).json({ success: false, message: 'Error occured' });
            }
        });
    }
    getAllPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const post = yield posts_service_1.default.getAll();
                if (post) {
                    return res.status(200).json({ success: true, data: post });
                }
                else {
                    return res
                        .status(404)
                        .json({ success: false, message: 'Posts not found' });
                }
            }
            catch (e) {
                return res.status(500).json({ success: false, message: 'Error occured' });
            }
        });
    }
    getCurrentUserPosts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { user_id } = res.locals.jwt;
                const post = yield posts_service_1.default.getByUserId(user_id);
                if (post) {
                    return res.status(200).json({ success: true, data: post });
                }
                else {
                    return res
                        .status(404)
                        .json({ success: false, message: 'Posts not found' });
                }
            }
            catch (e) {
                return res.status(500).json({ success: false, message: 'Error occured' });
            }
        });
    }
    getPostsByType(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { post_type } = req.query;
                const post = yield posts_service_1.default.getByType(post_type || null);
                if (post) {
                    return res.status(200).json({ success: true, data: post });
                }
                else {
                    return res
                        .status(404)
                        .json({ success: false, message: 'Post not found' });
                }
            }
            catch (e) {
                return res.status(500).json({ success: false, message: 'Error occured' });
            }
        });
    }
}
exports.default = new PostsController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3N0cy9jb250cm9sbGVycy9wb3N0cy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esa0RBQTBCO0FBQzFCLHdEQUFnQztBQUNoQyw4RUFBcUQ7QUFDckQsOENBQWdEO0FBRWhELE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBRTNELE1BQU0sZUFBZTtJQUNiLFVBQVUsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOzs7WUFDMUQsSUFBSTtnQkFDRixNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxHQUNqRSxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUNYLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFFbkMsTUFBTSxlQUFlLEdBQ25CLE1BQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQyw0QkFBZSxDQUFDLDBDQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDdEQsSUFBSSxDQUFDLGVBQWUsRUFBRTtvQkFDcEIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFDMUIsS0FBSyxFQUNILHFKQUFxSjtxQkFDeEosQ0FBQyxDQUFDO2lCQUNKO2dCQUVELE1BQU0sSUFBSSxHQUFHLE1BQU0sdUJBQVksQ0FBQyxNQUFNLENBQUM7b0JBQ3JDLFNBQVM7b0JBQ1QsT0FBTztvQkFDUCxVQUFVO29CQUNWLGdCQUFnQjtvQkFDaEIsZ0JBQWdCO2lCQUNqQixDQUFDLENBQUM7Z0JBQ0gsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUs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