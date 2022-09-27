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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9uUHJvZml0T3JnYW5pc2F0aW9uUHJvZmlsZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Ob25Qcm9maXRPcmdhbmlzYXRpb25Qcm9maWxlcy9zZXJ2aWNlcy9ub25Qcm9maXRPcmdhbmlzYXRpb25Qcm9maWxlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0hBQXNGO0FBR3RGLE1BQU0sb0NBQW9DO0lBQ2xDLE1BQU0sQ0FBQyxRQUFtQjs7WUFDOUIsT0FBTywyQ0FBNkIsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUQsQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLEVBQVU7O1lBQ3pCLE9BQU8sMkNBQTZCLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDN0QsQ0FBQztLQUFBO0lBRUssSUFBSSxDQUFDLEtBQWEsRUFBRSxJQUFZOztZQUNwQyxPQUFPLDJDQUE2QixDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEUsQ0FBQztLQUFBO0lBRUssU0FBUyxDQUFDLEVBQVUsRUFBRSxRQUFtQjs7WUFDN0MsTUFBTSxRQUFRLEdBQ1osTUFBTSwyQ0FBNkIsQ0FBQyxnQ0FBZ0MsQ0FDbEUsRUFBRSxFQUNGLFFBQVEsQ0FDVCxDQUFDO1lBQ0osT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQztLQUFBO0lBRUssUUFBUSxDQUFDLEVBQVU7O1lBQ3ZCLE9BQU8sMkNBQTZCLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFELENBQUM7S0FBQTtDQUNGO0FBRUQsa0JBQWUsSUFBSSxvQ0FBb0MsRUFBRSxDQUFDIn0=