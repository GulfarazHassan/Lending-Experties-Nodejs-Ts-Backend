"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const posts_controller_1 = __importDefault(require("./controllers/posts.controller"));
const body_validation_middleware_1 = __importDefault(require("../common/middleware/body.validation.middleware"));
const express_validator_1 = require("express-validator");
const jwt_middleware_1 = __importDefault(require("../auth/middleware/jwt.middleware"));
class PostRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'PostRoutes');
    }
    configureRoutes() {
        this.app.post(`/post/create`, [
            jwt_middleware_1.default.validJWTNeeded,
            (0, express_validator_1.body)('post_type').isString(),
            (0, express_validator_1.body)('post_title').isString(),
            (0, express_validator_1.body)('post_description').isString(),
            body_validation_middleware_1.default.verifyBodyFieldsErrors,
            posts_controller_1.default.createPost,
        ]);
        this.app.put(`/post/update`, [
            jwt_middleware_1.default.validJWTNeeded,
            (0, express_validator_1.body)('post_id').isString(),
            body_validation_middleware_1.default.verifyBodyFieldsErrors,
            posts_controller_1.default.updatePost,
        ]);
        this.app.post(`/post/comment`, [
            jwt_middleware_1.default.validJWTNeeded,
            (0, express_validator_1.body)('post_id').isString(),
            (0, express_validator_1.body)('comment_text').isString(),
            body_validation_middleware_1.default.verifyBodyFieldsErrors,
            posts_controller_1.default.commentOnPost,
        ]);
        this.app.post(`/post/like`, [
            jwt_middleware_1.default.validJWTNeeded,
            (0, express_validator_1.body)('post_id').isString(),
            body_validation_middleware_1.default.verifyBodyFieldsErrors,
            posts_controller_1.default.likeOnPost,
        ]);
        this.app.get(`/post/current_user`, [
            jwt_middleware_1.default.validJWTNeeded,
            posts_controller_1.default.getCurrentUserPosts,
        ]);
        this.app.get(`/post/one`, posts_controller_1.default.getPostById);
        this.app.get(`/post/type`, posts_controller_1.default.getPostsByType);
        this.app.get(`/post/all`, posts_controller_1.default.getAllPost);
        return this.app;
    }
}
exports.PostRoutes = PostRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wb3N0cy9wb3N0cy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHlFQUFvRTtBQUNwRSxzRkFBNEQ7QUFFNUQsaUhBQXVGO0FBQ3ZGLHlEQUF5QztBQUN6Qyx1RkFBOEQ7QUFFOUQsTUFBYSxVQUFXLFNBQVEseUNBQWtCO0lBQ2hELFlBQVksR0FBd0I7UUFDbEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUM1Qix3QkFBYSxDQUFDLGNBQWM7WUFDNUIsSUFBQSx3QkFBSSxFQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUM1QixJQUFBLHdCQUFJLEVBQUMsWUFBWSxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQzdCLElBQUEsd0JBQUksRUFBQyxrQkFBa0IsQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUNuQyxvQ0FBd0IsQ0FBQyxzQkFBc0I7WUFDL0MsMEJBQWMsQ0FBQyxVQUFVO1NBQzFCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRTtZQUMzQix3QkFBYSxDQUFDLGNBQWM7WUFDNUIsSUFBQSx3QkFBSSxFQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUMxQixvQ0FBd0IsQ0FBQyxzQkFBc0I7WUFDL0MsMEJBQWMsQ0FBQyxVQUFVO1NBQzFCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUM3Qix3QkFBYSxDQUFDLGNBQWM7WUFDNUIsSUFBQSx3QkFBSSxFQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUMxQixJQUFBLHdCQUFJLEVBQUMsY0FBYyxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQy9CLG9DQUF3QixDQUFDLHNCQUFzQjtZQUMvQywwQkFBYyxDQUFDLGFBQWE7U0FDN0IsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzFCLHdCQUFhLENBQUMsY0FBYztZQUM1QixJQUFBLHdCQUFJLEVBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQzFCLG9DQUF3QixDQUFDLHNCQUFzQjtZQUMvQywwQkFBYyxDQUFDLFVBQVU7U0FDMUIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUU7WUFDakMsd0JBQWEsQ0FBQyxjQUFjO1lBQzVCLDBCQUFjLENBQUMsbUJBQW1CO1NBQ25DLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSwwQkFBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXRELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSwwQkFBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRTFELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSwwQkFBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXJELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7QUFsREQsZ0NBa0RDIn0=