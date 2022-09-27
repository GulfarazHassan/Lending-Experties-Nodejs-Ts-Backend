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
const financialGuideProfiles_service_1 = __importDefault(require("../services/financialGuideProfiles.service"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:users-controller');
class FinancialGuideProfilesController {
    constructor() { }
    patch(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user_id } = res.locals.jwt;
            const updatedProfile = yield financialGuideProfiles_service_1.default.patchById(user_id, req.body);
            return res.status(200).json({
                message: 'Financial Guide Profile Updated',
                profile: updatedProfile,
            });
        });
    }
    getMyProfileFromToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user_id } = res.locals.jwt;
            const profile = yield financialGuideProfiles_service_1.default.readById(user_id);
            return res.status(200).json({
                message: 'Financial Guide Profile',
                profile: profile,
            });
        });
    }
}
exports.default = new FinancialGuideProfilesController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluYW5jaWFsR3VpZGVQcm9maWxlcy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vRmluYW5jaWFsR3VpZGVQcm9maWxlcy9jb250cm9sbGVycy9maW5hbmNpYWxHdWlkZVByb2ZpbGVzLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxnSEFBdUY7QUFDdkYsa0RBQTBCO0FBRTFCLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQzNELE1BQU0sZ0NBQWdDO0lBQ3BDLGdCQUFlLENBQUM7SUFFVixLQUFLLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDckQsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBRW5DLE1BQU0sY0FBYyxHQUFHLE1BQU0sd0NBQTZCLENBQUMsU0FBUyxDQUNsRSxPQUFPLEVBQ1AsR0FBRyxDQUFDLElBQUksQ0FDVCxDQUFDO1lBRUYsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDMUIsT0FBTyxFQUFFLGlDQUFpQztnQkFDMUMsT0FBTyxFQUFFLGNBQWM7YUFDeEIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUFBO0lBRUsscUJBQXFCLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDckUsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBRW5DLE1BQU0sT0FBTyxHQUFHLE1BQU0sd0NBQTZCLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRXRFLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQzFCLE9BQU8sRUFBRSx5QkFBeUI7Z0JBQ2xDLE9BQU8sRUFBRSxPQUFPO2FBQ2pCLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTtDQUNGO0FBRUQsa0JBQWUsSUFBSSxnQ0FBZ0MsRUFBRSxDQUFDIn0=