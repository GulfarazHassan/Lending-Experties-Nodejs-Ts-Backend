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
            return communityMemberProfiles_dao_1.default.addCommunityMemberProfile(resource);
        });
    }
    //   async deleteById(id: string) {
    //     return UsersDao.removeUserById(id);
    //   }
    //   async list(limit: number, page: number) {
    //     return UsersDao.getUsers(limit, page);
    //   }
    patchById(id, resource) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield communityMemberProfiles_dao_1.default.updateCommunityMemberProfileById(id, resource);
            return response;
        });
    }
}
exports.default = new CommunityMemberProfilesService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbXVuaXR5TWVtYmVyUHJvZmlsZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbW11bml0eU1lbWJlclByb2ZpbGVzL3NlcnZpY2VzL2NvbW11bml0eU1lbWJlclByb2ZpbGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzR0FBNEU7QUFJNUUsTUFBTSw4QkFBOEI7SUFDNUIsTUFBTSxDQUFDLFFBQW1COztZQUM5QixPQUFPLHFDQUF5QixDQUFDLHlCQUF5QixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZFLENBQUM7S0FBQTtJQUVELG1DQUFtQztJQUNuQywwQ0FBMEM7SUFDMUMsTUFBTTtJQUVOLDhDQUE4QztJQUM5Qyw2Q0FBNkM7SUFDN0MsTUFBTTtJQUVBLFNBQVMsQ0FBQyxFQUFVLEVBQUUsUUFBbUI7O1lBQzdDLE1BQU0sUUFBUSxHQUNaLE1BQU0scUNBQXlCLENBQUMsZ0NBQWdDLENBQzlELEVBQUUsRUFDRixRQUFRLENBQ1QsQ0FBQztZQUNKLE9BQU8sUUFBUSxDQUFDO1FBQ2xCLENBQUM7S0FBQTtDQUtGO0FBRUQsa0JBQWUsSUFBSSw4QkFBOEIsRUFBRSxDQUFDIn0=