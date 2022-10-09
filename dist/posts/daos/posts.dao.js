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
// import { PatchUserDto } from '../dto/patch.user.dto';
// import { PutUserDto } from '../dto/put.user.dto';
const mongoose_service_1 = __importDefault(require("../../common/services/mongoose.service"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:in-memory-dao');
class PostsDao {
    constructor() {
        this.Schema = mongoose_service_1.default.getMongoose().Schema;
        this.postSchema = new this.Schema({
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
        }, {
            timestamps: true,
        });
        this.Post = mongoose_service_1.default.getMongoose().models.Posts ||
            mongoose_service_1.default.getMongoose().model('posts', this.postSchema);
        log('create new instance in post');
    }
    addPost(fields) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = new this.Post(Object.assign({}, fields));
            yield post.save();
            return post;
        });
    }
    getPostsByUserId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('getPostsByUserId');
            return this.Post.find({ user_id: id })
                .populate('post_comments.user_id', 'profile_image user_type first_name last_name')
                .populate('user_id', 'profile_image user_type first_name last_name')
                .exec();
        });
    }
    getPostsByType(type) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('getPostsByType');
            return this.Post.find({ post_type: type })
                .populate('post_comments.user_id', 'profile_image user_type first_name last_name')
                .populate('user_id', 'profile_image user_type first_name last_name')
                .exec();
        });
    }
    getPostById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Post.findById(id)
                .populate('post_comments.user_id', 'profile_image user_type first_name last_name')
                .populate('user_id', 'profile_image user_type first_name last_name')
                .exec();
        });
    }
    updatePostById(fields, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield this.Post.findOneAndUpdate({ _id: id }, { $set: fields }, { new: true }).exec();
            return post;
        });
    }
    updatePostCommentLikeById(fields, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield this.Post.findOneAndUpdate({ _id: id }, { $set: fields }, { new: true }).exec();
            return post;
        });
    }
    getAllPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Post.find()
                .populate('post_comments.user_id', 'profile_image user_type first_name last_name')
                .populate('user_id', 'profile_image user_type first_name last_name')
                .exec();
        });
    }
}
exports.default = new PostsDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Bvc3RzL2Rhb3MvcG9zdHMuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBS0Esd0RBQXdEO0FBQ3hELG9EQUFvRDtBQUNwRCw4RkFBcUU7QUFDckUsa0RBQTBCO0FBRTFCLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBRXhELE1BQU0sUUFBUTtJQWlDWjtRQWhDQSxXQUFNLEdBQUcsMEJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDOUMsZUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FDMUI7WUFDRSxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDeEMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFO1lBQzNELFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUN6QyxnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUMvQyxnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUMzRCxVQUFVLEVBQUU7Z0JBQ1YsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQztnQkFDMUQsT0FBTyxFQUFFLEVBQUU7YUFDWjtZQUNELHNCQUFzQixFQUFFLEVBQUUsSUFBSSxF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