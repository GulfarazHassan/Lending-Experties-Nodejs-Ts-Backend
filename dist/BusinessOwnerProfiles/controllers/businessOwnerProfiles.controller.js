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
const log = (0, debug_1.default)('app:users-controller');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzaW5lc3NPd25lclByb2ZpbGVzLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9CdXNpbmVzc093bmVyUHJvZmlsZXMvY29udHJvbGxlcnMvYnVzaW5lc3NPd25lclByb2ZpbGVzLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSw0SEFBbUc7QUFDbkcsa0RBQTBCO0FBRTFCLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQzNELE1BQU0sK0JBQStCO0lBQ25DLGdCQUFlLENBQUM7SUFFVixLQUFLLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDckQsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBRW5DLE1BQU0sY0FBYyxHQUFHLE1BQU0sOENBQW1DLENBQUMsU0FBUyxDQUN4RSxPQUFPLEVBQ1AsR0FBRyxDQUFDLElBQUksQ0FDVCxDQUFDO1lBRUYsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDMUIsT0FBTyxFQUFFLGdDQUFnQztnQkFDekMsT0FBTyxFQUFFLGNBQWM7YUFDeEIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUFBO0lBRUsscUJBQXFCLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDckUsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBRW5DLE1BQU0sT0FBTyxHQUFHLE1BQU0sOENBQW1DLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRTVFLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQzFCLE9BQU8sRUFBRSx3QkFBd0I7Z0JBQ2pDLE9BQU8sRUFBRSxPQUFPO2FBQ2pCLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTtDQUNGO0FBRUQsa0JBQWUsSUFBSSwrQkFBK0IsRUFBRSxDQUFDIn0=