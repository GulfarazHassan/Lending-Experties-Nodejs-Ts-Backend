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
const financialGuideProfiles_dao_1 = __importDefault(require("../daos/financialGuideProfiles.dao"));
class FinancialGuideProfilesService {
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return financialGuideProfiles_dao_1.default.addProfile(resource);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return financialGuideProfiles_dao_1.default.removeProfileById(id);
        });
    }
    list(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return financialGuideProfiles_dao_1.default.getProfiles(limit, page);
        });
    }
    patchById(id, resource) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield financialGuideProfiles_dao_1.default.updateCommunityMemberProfileById(id, resource);
            return response;
        });
    }
    readById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return financialGuideProfiles_dao_1.default.getByProfileId(id);
        });
    }
}
exports.default = new FinancialGuideProfilesService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluYW5jaWFsR3VpZGVQcm9maWxlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vRmluYW5jaWFsR3VpZGVQcm9maWxlcy9zZXJ2aWNlcy9maW5hbmNpYWxHdWlkZVByb2ZpbGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvR0FBd0U7QUFHeEUsTUFBTSw2QkFBNkI7SUFDM0IsTUFBTSxDQUFDLFFBQW1COztZQUM5QixPQUFPLG9DQUFzQixDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyRCxDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsRUFBVTs7WUFDekIsT0FBTyxvQ0FBc0IsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0RCxDQUFDO0tBQUE7SUFFSyxJQUFJLENBQUMsS0FBYSxFQUFFLElBQVk7O1lBQ3BDLE9BQU8sb0NBQXNCLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6RCxDQUFDO0tBQUE7SUFFSyxTQUFTLENBQUMsRUFBVSxFQUFFLFFBQW1COztZQUM3QyxNQUFNLFFBQVEsR0FDWixNQUFNLG9DQUFzQixDQUFDLGdDQUFnQyxDQUMzRCxFQUFFLEVBQ0YsUUFBUSxDQUNULENBQUM7WUFDSixPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDO0tBQUE7SUFFSyxRQUFRLENBQUMsRUFBVTs7WUFDdkIsT0FBTyxvQ0FBc0IsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkQsQ0FBQztLQUFBO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLDZCQUE2QixFQUFFLENBQUMifQ==