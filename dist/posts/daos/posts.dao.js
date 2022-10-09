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
            return this.Post.find({ user_id: id }).exec();
        });
    }
    getPostsByType(type) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Post.find({ post_type: type }).exec();
        });
    }
    getPostById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Post.findById(id).exec();
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
            return this.Post.find().exec();
        });
    }
}
exports.default = new PostsDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Bvc3RzL2Rhb3MvcG9zdHMuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBS0Esd0RBQXdEO0FBQ3hELG9EQUFvRDtBQUNwRCw4RkFBcUU7QUFDckUsa0RBQTBCO0FBRTFCLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBRXhELE1BQU0sUUFBUTtJQWlDWjtRQWhDQSxXQUFNLEdBQUcsMEJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDOUMsZUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FDMUI7WUFDRSxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDeEMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFO1lBQzNELFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUN6QyxnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUMvQyxnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUMzRCxVQUFVLEVBQUU7Z0JBQ1YsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQztnQkFDMUQsT0FBTyxFQUFFLEVBQUU7YUFDWjtZQUNELHNCQUFzQixFQUFFLEVBQUUsSUFBSSxF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