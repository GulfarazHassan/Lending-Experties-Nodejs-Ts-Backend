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
const NonProfitOrganisationProfiles_dao_1 = __importDefault(require("../daos/NonProfitOrganisationProfiles.dao"));
class NonProfitOrganisationProfilesService {
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return NonProfitOrganisationProfiles_dao_1.default.addProfile(resource);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return NonProfitOrganisationProfiles_dao_1.default.removeProfileById(id);
        });
    }
    list(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return NonProfitOrganisationProfiles_dao_1.default.getProfiles(limit, page);
        });
    }
    patchById(id, resource) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield NonProfitOrganisationProfiles_dao_1.default.updateCommunityMemberProfileById(id, resource);
            return response;
        });
    }
    readById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return NonProfitOrganisationProfiles_dao_1.default.getByProfileId(id);
        });
    }
}
exports.default = new NonProfitOrganisationProfilesService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9uUHJvZml0T3JnYW5pc2F0aW9uUHJvZmlsZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL05vblByb2ZpdE9yZ2FuaXNhdGlvblByb2ZpbGVzL3NlcnZpY2VzL25vblByb2ZpdE9yZ2FuaXNhdGlvblByb2ZpbGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrSEFBc0Y7QUFHdEYsTUFBTSxvQ0FBb0M7SUFDbEMsTUFBTSxDQUFDLFFBQW1COztZQUM5QixPQUFPLDJDQUE2QixDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1RCxDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsRUFBVTs7WUFDekIsT0FBTywyQ0FBNkIsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3RCxDQUFDO0tBQUE7SUFFSyxJQUFJLENBQUMsS0FBYSxFQUFFLElBQVk7O1lBQ3BDLE9BQU8sMkNBQTZCLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRSxDQUFDO0tBQUE7SUFFSyxTQUFTLENBQUMsRUFBVSxFQUFFLFFBQW1COztZQUM3QyxNQUFNLFFBQVEsR0FDWixNQUFNLDJDQUE2QixDQUFDLGdDQUFnQyxDQUNsRSxFQUFFLEVBQ0YsUUFBUSxDQUNULENBQUM7WUFDSixPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDO0tBQUE7SUFFSyxRQUFRLENBQUMsRUFBVTs7WUFDdkIsT0FBTywyQ0FBNkIsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUQsQ0FBQztLQUFBO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLG9DQUFvQyxFQUFFLENBQUMifQ==