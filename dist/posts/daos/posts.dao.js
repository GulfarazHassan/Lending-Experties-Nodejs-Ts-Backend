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
            address: { type: String, default: '' },
            time: { type: String, default: '' },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Bvc3RzL2Rhb3MvcG9zdHMuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBS0Esd0RBQXdEO0FBQ3hELG9EQUFvRDtBQUNwRCw4RkFBcUU7QUFDckUsa0RBQTBCO0FBRTFCLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBRXhELE1BQU0sUUFBUTtJQW1DWjtRQWxDQSxXQUFNLEdBQUcsMEJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDOUMsZUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FDMUI7WUFDRSxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDeEMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFO1lBQzNELFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUN6QyxnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUMvQyxnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUMzRCxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDdEMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ25DLFVBQVUsRUFBRTtnQkFDVixJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFB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