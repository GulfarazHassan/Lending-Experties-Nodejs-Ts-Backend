"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessOwnerProfilesRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const businessOwnerProfiles_controller_1 = __importDefault(require("./controllers/businessOwnerProfiles.controller"));
const jwt_middleware_1 = __importDefault(require("../Auth/middleware/jwt.middleware"));
class BusinessOwnerProfilesRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'BusinessOwnerProfilesRoutes');
    }
    configureRoutes() {
        this.app
            .route(`/business_owner_profile`)
            .patch(jwt_middleware_1.default.validJWTNeeded, businessOwnerProfiles_controller_1.default.patch);
        this.app
            .route(`/business_owner_profile/my_profile`)
            .get(jwt_middleware_1.default.validJWTNeeded, businessOwnerProfiles_controller_1.default.getMyProfileFromToken);
        return this.app;
    }
}
exports.BusinessOwnerProfilesRoutes = BusinessOwnerProfilesRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzaW5lc3NPd25lclByb2ZpbGVzLnJvdXRlcy5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9CdXNpbmVzc093bmVyUHJvZmlsZXMvYnVzaW5lc3NPd25lclByb2ZpbGVzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EseUVBQW9FO0FBQ3BFLHNIQUFtRjtBQUNuRix1RkFBOEQ7QUFFOUQsTUFBYSwyQkFBNEIsU0FBUSx5Q0FBa0I7SUFDakUsWUFBWSxHQUF3QjtRQUNsQyxLQUFLLENBQUMsR0FBRyxFQUFFLDZCQUE2QixDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsR0FBRzthQUNMLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQzthQUNoQyxLQUFLLENBQUMsd0JBQWEsQ0FBQyxjQUFjLEVBQUUsMENBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFcEUsSUFBSSxDQUFDLEdBQUc7YUFDTCxLQUFLLENBQUMsb0NBQW9DLENBQUM7YUFDM0MsR0FBRyxDQUNGLHdCQUFhLENBQUMsY0FBYyxFQUM1QiwwQ0FBcUIsQ0FBQyxxQkFBcUIsQ0FDNUMsQ0FBQztRQUVKLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7QUFuQkQsa0VBbUJDIn0=