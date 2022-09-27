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
const communityMemberProfiles_service_1 = __importDefault(require("../services/communityMemberProfiles.service"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:users-controller');
class CommunityMemberProfilesController {
    constructor() { }
    patch(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user_id } = res.locals.jwt;
            const updatedProfile = yield communityMemberProfiles_service_1.default.patchById(user_id, req.body);
            return res.status(200).json({
                message: 'Community Member Profile Updated',
                profile: updatedProfile,
            });
        });
    }
    getMyProfileFromToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user_id } = res.locals.jwt;
            const profile = yield communityMemberProfiles_service_1.default.readById(user_id);
            return res.status(200).json({
                message: 'Community Member Profile',
                profile: profile,
            });
        });
    }
}
exports.default = new CommunityMemberProfilesController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbXVuaXR5TWVtYmVyUHJvZmlsZXMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tdW5pdHlNZW1iZXJQcm9maWxlcy9jb250cm9sbGVycy9jb21tdW5pdHlNZW1iZXJQcm9maWxlcy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esa0hBQXlGO0FBQ3pGLGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUMzRCxNQUFNLGlDQUFpQztJQUNyQyxnQkFBZSxDQUFDO0lBRVYsS0FBSyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ3JELE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUVuQyxNQUFNLGNBQWMsR0FBRyxNQUFNLHlDQUE4QixDQUFDLFNBQVMsQ0FDbkUsT0FBTyxFQUNQLEdBQUcsQ0FBQyxJQUFJLENBQ1QsQ0FBQztZQUVGLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQzFCLE9BQU8sRUFBRSxrQ0FBa0M7Z0JBQzNDLE9BQU8sRUFBRSxjQUFjO2FBQ3hCLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTtJQUVLLHFCQUFxQixDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ3JFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUVuQyxNQUFNLE9BQU8sR0FBRyxNQUFNLHlDQUE4QixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUV2RSxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMxQixPQUFPLEVBQUUsMEJBQTBCO2dCQUNuQyxPQUFPLEVBQUUsT0FBTzthQUNqQixDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7Q0FDRjtBQUVELGtCQUFlLElBQUksaUNBQWlDLEVBQUUsQ0FBQyJ9