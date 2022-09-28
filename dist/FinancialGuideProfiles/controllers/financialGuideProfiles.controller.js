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
const log = debug_1.default('app:users-controller');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluYW5jaWFsR3VpZGVQcm9maWxlcy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0ZpbmFuY2lhbEd1aWRlUHJvZmlsZXMvY29udHJvbGxlcnMvZmluYW5jaWFsR3VpZGVQcm9maWxlcy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsZ0hBQXVGO0FBQ3ZGLGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsZUFBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDM0QsTUFBTSxnQ0FBZ0M7SUFDcEMsZ0JBQWUsQ0FBQztJQUVWLEtBQUssQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUNyRCxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFFbkMsTUFBTSxjQUFjLEdBQUcsTUFBTSx3Q0FBNkIsQ0FBQyxTQUFTLENBQ2xFLE9BQU8sRUFDUCxHQUFHLENBQUMsSUFBSSxDQUNULENBQUM7WUFFRixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMxQixPQUFPLEVBQUUsaUNBQWlDO2dCQUMxQyxPQUFPLEVBQUUsY0FBYzthQUN4QixDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7SUFFSyxxQkFBcUIsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUNyRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFFbkMsTUFBTSxPQUFPLEdBQUcsTUFBTSx3Q0FBNkIsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFdEUsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDMUIsT0FBTyxFQUFFLHlCQUF5QjtnQkFDbEMsT0FBTyxFQUFFLE9BQU87YUFDakIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUFBO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLGdDQUFnQyxFQUFFLENBQUMifQ==