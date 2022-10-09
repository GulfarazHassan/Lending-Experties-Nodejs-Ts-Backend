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
const posts_dao_1 = __importDefault(require("../daos/posts.dao"));
class PostsService {
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return posts_dao_1.default.addPost(resource);
        });
    }
    updatePostById(resource, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return posts_dao_1.default.updatePostById(resource, id);
        });
    }
    updatePostCommentLikeById(resource, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return posts_dao_1.default.updatePostCommentLikeById(resource, id);
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return posts_dao_1.default.getPostById(id);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return posts_dao_1.default.getAllPosts();
        });
    }
    getByUserId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return posts_dao_1.default.getPostsByUserId(id);
        });
    }
    getByType(type) {
        return __awaiter(this, void 0, void 0, function* () {
            return posts_dao_1.default.getPostsByType(type);
        });
    }
}
exports.default = new PostsService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3N0cy9zZXJ2aWNlcy9wb3N0cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0VBQXlDO0FBT3pDLE1BQU0sWUFBWTtJQUNWLE1BQU0sQ0FBQyxRQUF1Qjs7WUFDbEMsT0FBTyxtQkFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQyxDQUFDO0tBQUE7SUFFSyxjQUFjLENBQUMsUUFBdUIsRUFBRSxFQUFVOztZQUN0RCxPQUFPLG1CQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMvQyxDQUFDO0tBQUE7SUFFSyx5QkFBeUIsQ0FDN0IsUUFBb0MsRUFDcEMsRUFBVTs7WUFFVixPQUFPLG1CQUFRLENBQUMseUJBQXlCLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzFELENBQUM7S0FBQTtJQUVLLE9BQU8sQ0FBQyxFQUFVOztZQUN0QixPQUFPLG1CQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7S0FBQTtJQUVLLE1BQU07O1lBQ1YsT0FBTyxtQkFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hDLENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxFQUFVOztZQUMxQixPQUFPLG1CQUFRLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkMsQ0FBQztLQUFBO0lBRUssU0FBUyxDQUFDLElBQVk7O1lBQzFCLE9BQU8sbUJBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQztLQUFBO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLFlBQVksRUFBRSxDQUFDIn0=