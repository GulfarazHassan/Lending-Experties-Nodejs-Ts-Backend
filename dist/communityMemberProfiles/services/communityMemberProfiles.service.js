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
const communityMemberProfiles_dao_1 = __importDefault(require("../daos/communityMemberProfiles.dao"));
class CommunityMemberProfilesService {
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return communityMemberProfiles_dao_1.default.addProfile(resource);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return communityMemberProfiles_dao_1.default.removeProfileById(id);
        });
    }
    list(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return communityMemberProfiles_dao_1.default.getProfiles(limit, page);
        });
    }
    patchById(id, resource) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield communityMemberProfiles_dao_1.default.updateCommunityMemberProfileById(id, resource);
            return response;
        });
    }
    readById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return communityMemberProfiles_dao_1.default.getByProfileId(id);
        });
    }
}
exports.default = new CommunityMemberProfilesService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbXVuaXR5TWVtYmVyUHJvZmlsZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbW11bml0eU1lbWJlclByb2ZpbGVzL3NlcnZpY2VzL2NvbW11bml0eU1lbWJlclByb2ZpbGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzR0FBNEU7QUFHNUUsTUFBTSw4QkFBOEI7SUFDNUIsTUFBTSxDQUFDLFFBQW1COztZQUM5QixPQUFPLHFDQUF5QixDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4RCxDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsRUFBVTs7WUFDekIsT0FBTyxxQ0FBeUIsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6RCxDQUFDO0tBQUE7SUFFSyxJQUFJLENBQUMsS0FBYSxFQUFFLElBQVk7O1lBQ3BDLE9BQU8scUNBQXlCLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1RCxDQUFDO0tBQUE7SUFFSyxTQUFTLENBQUMsRUFBVSxFQUFFLFFBQW1COztZQUM3QyxNQUFNLFFBQVEsR0FDWixNQUFNLHFDQUF5QixDQUFDLGdDQUFnQyxDQUM5RCxFQUFFLEVBQ0YsUUFBUSxDQUNULENBQUM7WUFDSixPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDO0tBQUE7SUFFSyxRQUFRLENBQUMsRUFBVTs7WUFDdkIsT0FBTyxxQ0FBeUIsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEQsQ0FBQztLQUFBO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLDhCQUE4QixFQUFFLENBQUMifQ==