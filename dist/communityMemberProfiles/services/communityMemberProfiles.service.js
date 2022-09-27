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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbXVuaXR5TWVtYmVyUHJvZmlsZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tdW5pdHlNZW1iZXJQcm9maWxlcy9zZXJ2aWNlcy9jb21tdW5pdHlNZW1iZXJQcm9maWxlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0dBQTRFO0FBRzVFLE1BQU0sOEJBQThCO0lBQzVCLE1BQU0sQ0FBQyxRQUFtQjs7WUFDOUIsT0FBTyxxQ0FBeUIsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEQsQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLEVBQVU7O1lBQ3pCLE9BQU8scUNBQXlCLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekQsQ0FBQztLQUFBO0lBRUssSUFBSSxDQUFDLEtBQWEsRUFBRSxJQUFZOztZQUNwQyxPQUFPLHFDQUF5QixDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUQsQ0FBQztLQUFBO0lBRUssU0FBUyxDQUFDLEVBQVUsRUFBRSxRQUFtQjs7WUFDN0MsTUFBTSxRQUFRLEdBQ1osTUFBTSxxQ0FBeUIsQ0FBQyxnQ0FBZ0MsQ0FDOUQsRUFBRSxFQUNGLFFBQVEsQ0FDVCxDQUFDO1lBQ0osT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQztLQUFBO0lBRUssUUFBUSxDQUFDLEVBQVU7O1lBQ3ZCLE9BQU8scUNBQXlCLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELENBQUM7S0FBQTtDQUNGO0FBRUQsa0JBQWUsSUFBSSw4QkFBOEIsRUFBRSxDQUFDIn0=