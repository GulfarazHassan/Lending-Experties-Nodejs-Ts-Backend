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
const meeting_dao_1 = __importDefault(require("../daos/meeting.dao"));
class MeetingService {
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return meeting_dao_1.default.addMeeting(resource);
        });
    }
    update(id1, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return meeting_dao_1.default.meetingRequestAccept(id1, id);
        });
    }
    getByUserId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return meeting_dao_1.default.getMeetingsByUserId(id);
        });
    }
    getFinancicalGuideId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return meeting_dao_1.default.getMeetingsFinanceUserId(id);
        });
    }
    getAllMeetingRequest() {
        return __awaiter(this, void 0, void 0, function* () {
            return meeting_dao_1.default.getAllMeetings();
        });
    }
    getByIdMeetingRequest(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return meeting_dao_1.default.getMeetingById(id);
        });
    }
}
exports.default = new MeetingService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVldGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21lZXRpbmdSZXNwb25zZXMvc2VydmljZXMvbWVldGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0VBQTZDO0FBRzdDLE1BQU0sY0FBYztJQUNaLE1BQU0sQ0FBQyxRQUEwQjs7WUFDckMsT0FBTyxxQkFBVSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QyxDQUFDO0tBQUE7SUFFSyxNQUFNLENBQUMsR0FBVyxFQUFFLEVBQVU7O1lBQ2xDLE9BQU8scUJBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbEQsQ0FBQztLQUFBO0lBRUssV0FBVyxDQUFDLEVBQVU7O1lBQzFCLE9BQU8scUJBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1QyxDQUFDO0tBQUE7SUFFSyxvQkFBb0IsQ0FBQyxFQUFVOztZQUNuQyxPQUFPLHFCQUFVLENBQUMsd0JBQXdCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakQsQ0FBQztLQUFBO0lBRUssb0JBQW9COztZQUN4QixPQUFPLHFCQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDckMsQ0FBQztLQUFBO0lBRUsscUJBQXFCLENBQUMsRUFBVTs7WUFDcEMsT0FBTyxxQkFBVSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2QyxDQUFDO0tBQUE7Q0FDRjtBQUVELGtCQUFlLElBQUksY0FBYyxFQUFFLENBQUMifQ==