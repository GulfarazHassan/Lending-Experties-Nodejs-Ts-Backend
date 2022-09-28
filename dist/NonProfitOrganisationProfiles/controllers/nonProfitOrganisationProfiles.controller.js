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
const nonProfitOrganisationProfiles_service_1 = __importDefault(require("../services/nonProfitOrganisationProfiles.service"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:users-controller');
class NonProfitOrganisationProfilesController {
    constructor() { }
    patch(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user_id } = res.locals.jwt;
            const updatedProfile = yield nonProfitOrganisationProfiles_service_1.default.patchById(user_id, req.body);
            return res.status(200).json({
                message: 'Non Profit Organisation Profile Updated',
                profile: updatedProfile,
            });
        });
    }
    getMyProfileFromToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user_id } = res.locals.jwt;
            const profile = yield nonProfitOrganisationProfiles_service_1.default.readById(user_id);
            return res.status(200).json({
                message: 'Non Profit Organisation Profile',
                profile: profile,
            });
        });
    }
}
exports.default = new NonProfitOrganisationProfilesController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9uUHJvZml0T3JnYW5pc2F0aW9uUHJvZmlsZXMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Ob25Qcm9maXRPcmdhbmlzYXRpb25Qcm9maWxlcy9jb250cm9sbGVycy9ub25Qcm9maXRPcmdhbmlzYXRpb25Qcm9maWxlcy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsOEhBQXFHO0FBQ3JHLGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUMzRCxNQUFNLHVDQUF1QztJQUMzQyxnQkFBZSxDQUFDO0lBRVYsS0FBSyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ3JELE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUVuQyxNQUFNLGNBQWMsR0FBRyxNQUFNLCtDQUFvQyxDQUFDLFNBQVMsQ0FDekUsT0FBTyxFQUNQLEdBQUcsQ0FBQyxJQUFJLENBQ1QsQ0FBQztZQUVGLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQzFCLE9BQU8sRUFBRSx5Q0FBeUM7Z0JBQ2xELE9BQU8sRUFBRSxjQUFjO2FBQ3hCLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTtJQUVLLHFCQUFxQixDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ3JFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUVuQyxNQUFNLE9BQU8sR0FBRyxNQUFNLCtDQUFvQyxDQUFDLFFBQVEsQ0FDakUsT0FBTyxDQUNSLENBQUM7WUFFRixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMxQixPQUFPLEVBQUUsaUNBQWlDO2dCQUMxQyxPQUFPLEVBQUUsT0FBTzthQUNqQixDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7Q0FDRjtBQUVELGtCQUFlLElBQUksdUNBQXVDLEVBQUUsQ0FBQyJ9