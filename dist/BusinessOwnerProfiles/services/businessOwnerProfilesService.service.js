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
const businessOwnerProfiles_dao_1 = __importDefault(require("../daos/businessOwnerProfiles.dao"));
class BusinessOwnerProfilesService {
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return businessOwnerProfiles_dao_1.default.addProfile(resource);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return businessOwnerProfiles_dao_1.default.removeProfileById(id);
        });
    }
    list(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return businessOwnerProfiles_dao_1.default.getProfiles(limit, page);
        });
    }
    patchById(id, resource) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield businessOwnerProfiles_dao_1.default.updateCommunityMemberProfileById(id, resource);
            return response;
        });
    }
    readById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return businessOwnerProfiles_dao_1.default.getByProfileId(id);
        });
    }
}
exports.default = new BusinessOwnerProfilesService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzaW5lc3NPd25lclByb2ZpbGVzU2VydmljZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vQnVzaW5lc3NPd25lclByb2ZpbGVzL3NlcnZpY2VzL2J1c2luZXNzT3duZXJQcm9maWxlc1NlcnZpY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGtHQUFzRTtBQUd0RSxNQUFNLDRCQUE0QjtJQUMxQixNQUFNLENBQUMsUUFBbUI7O1lBQzlCLE9BQU8sbUNBQXFCLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxFQUFVOztZQUN6QixPQUFPLG1DQUFxQixDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JELENBQUM7S0FBQTtJQUVLLElBQUksQ0FBQyxLQUFhLEVBQUUsSUFBWTs7WUFDcEMsT0FBTyxtQ0FBcUIsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hELENBQUM7S0FBQTtJQUVLLFNBQVMsQ0FBQyxFQUFVLEVBQUUsUUFBbUI7O1lBQzdDLE1BQU0sUUFBUSxHQUNaLE1BQU0sbUNBQXFCLENBQUMsZ0NBQWdDLENBQzFELEVBQUUsRUFDRixRQUFRLENBQ1QsQ0FBQztZQUNKLE9BQU8sUUFBUSxDQUFDO1FBQ2xCLENBQUM7S0FBQTtJQUVLLFFBQVEsQ0FBQyxFQUFVOztZQUN2QixPQUFPLG1DQUFxQixDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsRCxDQUFDO0tBQUE7Q0FDRjtBQUVELGtCQUFlLElBQUksNEJBQTRCLEVBQUUsQ0FBQyJ9