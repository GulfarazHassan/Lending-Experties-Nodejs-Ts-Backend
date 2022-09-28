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
const businessOwnerProfilesService_service_1 = __importDefault(require("../services/businessOwnerProfilesService.service"));
const debug_1 = __importDefault(require("debug"));
const log = debug_1.default('app:users-controller');
class BusinessOwnerProfilesController {
    constructor() { }
    patch(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user_id } = res.locals.jwt;
            const updatedProfile = yield businessOwnerProfilesService_service_1.default.patchById(user_id, req.body);
            return res.status(200).json({
                message: 'Business Owner Profile Updated',
                profile: updatedProfile,
            });
        });
    }
    getMyProfileFromToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user_id } = res.locals.jwt;
            const profile = yield businessOwnerProfilesService_service_1.default.readById(user_id);
            return res.status(200).json({
                message: 'Business Owner Profile',
                profile: profile,
            });
        });
    }
}
exports.default = new BusinessOwnerProfilesController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzaW5lc3NPd25lclByb2ZpbGVzLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQnVzaW5lc3NPd25lclByb2ZpbGVzL2NvbnRyb2xsZXJzL2J1c2luZXNzT3duZXJQcm9maWxlcy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNEhBQW1HO0FBQ25HLGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsZUFBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDM0QsTUFBTSwrQkFBK0I7SUFDbkMsZ0JBQWUsQ0FBQztJQUVWLEtBQUssQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUNyRCxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFFbkMsTUFBTSxjQUFjLEdBQUcsTUFBTSw4Q0FBbUMsQ0FBQyxTQUFTLENBQ3hFLE9BQU8sRUFDUCxHQUFHLENBQUMsSUFBSSxDQUNULENBQUM7WUFFRixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMxQixPQUFPLEVBQUUsZ0NBQWdDO2dCQUN6QyxPQUFPLEVBQUUsY0FBYzthQUN4QixDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7SUFFSyxxQkFBcUIsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUNyRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFFbkMsTUFBTSxPQUFPLEdBQUcsTUFBTSw4Q0FBbUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFNUUsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDMUIsT0FBTyxFQUFFLHdCQUF3QjtnQkFDakMsT0FBTyxFQUFFLE9BQU87YUFDakIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUFBO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLCtCQUErQixFQUFFLENBQUMifQ==