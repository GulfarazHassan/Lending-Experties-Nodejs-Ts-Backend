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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbXVuaXR5TWVtYmVyUHJvZmlsZXMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbW11bml0eU1lbWJlclByb2ZpbGVzL2NvbnRyb2xsZXJzL2NvbW11bml0eU1lbWJlclByb2ZpbGVzLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxrSEFBeUY7QUFDekYsa0RBQTBCO0FBRTFCLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQzNELE1BQU0saUNBQWlDO0lBQ3JDLGdCQUFlLENBQUM7SUFFVixLQUFLLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDckQsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBRW5DLE1BQU0sY0FBYyxHQUFHLE1BQU0seUNBQThCLENBQUMsU0FBUyxDQUNuRSxPQUFPLEVBQ1AsR0FBRyxDQUFDLElBQUksQ0FDVCxDQUFDO1lBRUYsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDMUIsT0FBTyxFQUFFLGtDQUFrQztnQkFDM0MsT0FBTyxFQUFFLGNBQWM7YUFDeEIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUFBO0lBRUsscUJBQXFCLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDckUsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBRW5DLE1BQU0sT0FBTyxHQUFHLE1BQU0seUNBQThCLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRXZFLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQzFCLE9BQU8sRUFBRSwwQkFBMEI7Z0JBQ25DLE9BQU8sRUFBRSxPQUFPO2FBQ2pCLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTtDQUNGO0FBRUQsa0JBQWUsSUFBSSxpQ0FBaUMsRUFBRSxDQUFDIn0=