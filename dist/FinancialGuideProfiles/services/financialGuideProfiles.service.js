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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluYW5jaWFsR3VpZGVQcm9maWxlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0ZpbmFuY2lhbEd1aWRlUHJvZmlsZXMvc2VydmljZXMvZmluYW5jaWFsR3VpZGVQcm9maWxlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0dBQXdFO0FBR3hFLE1BQU0sNkJBQTZCO0lBQzNCLE1BQU0sQ0FBQyxRQUFtQjs7WUFDOUIsT0FBTyxvQ0FBc0IsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckQsQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLEVBQVU7O1lBQ3pCLE9BQU8sb0NBQXNCLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEQsQ0FBQztLQUFBO0lBRUssSUFBSSxDQUFDLEtBQWEsRUFBRSxJQUFZOztZQUNwQyxPQUFPLG9DQUFzQixDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekQsQ0FBQztLQUFBO0lBRUssU0FBUyxDQUFDLEVBQVUsRUFBRSxRQUFtQjs7WUFDN0MsTUFBTSxRQUFRLEdBQ1osTUFBTSxvQ0FBc0IsQ0FBQyxnQ0FBZ0MsQ0FDM0QsRUFBRSxFQUNGLFFBQVEsQ0FDVCxDQUFDO1lBQ0osT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQztLQUFBO0lBRUssUUFBUSxDQUFDLEVBQVU7O1lBQ3ZCLE9BQU8sb0NBQXNCLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELENBQUM7S0FBQTtDQUNGO0FBRUQsa0JBQWUsSUFBSSw2QkFBNkIsRUFBRSxDQUFDIn0=