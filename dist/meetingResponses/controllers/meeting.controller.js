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
const debug_1 = __importDefault(require("debug"));
const meeting_service_1 = __importDefault(require("../services/meeting.service"));
const log = (0, debug_1.default)('app:users-controller');
class MeetingController {
    createMeeting(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { user_id, finance_user_id, meeting_request_id, date_and_time, description, title, } = req.body;
                const meeting = yield meeting_service_1.default.create({
                    user_id,
                    finance_user_id,
                    meeting_request_id,
                    description,
                    date_and_time,
                    status: 'pending',
                    title,
                });
                yield meeting.save();
                return res.json({ success: true, data: meeting });
            }
            catch (e) {
                console.log('error :: ', e);
                return res.status(500).json({ success: false, message: 'Error occured' });
            }
        });
    }
    getUserMeeting(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { user_id } = req.params;
                const meetingReuests = yield meeting_service_1.default.getByUserId(user_id);
                return res.status(200).json({ success: true, data: meetingReuests });
            }
            catch (e) {
                return res.status(500).json({ success: false, message: 'Error occured' });
            }
        });
    }
    getFinancialGuideMeeting(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { financial_guide_id } = req.params;
                const meetingReuests = yield meeting_service_1.default.getFinancicalGuideId(financial_guide_id);
                return res.status(200).json({ success: true, data: meetingReuests });
            }
            catch (e) {
                return res.status(500).json({ success: false, message: 'Error occured' });
            }
        });
    }
    getByIdMeetingRequest(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('sds');
            try {
                const { meeting_request_response_id } = req.params;
                const meetingReuests = yield meeting_service_1.default.getByIdMeetingRequest(meeting_request_response_id);
                return res.status(200).json({ success: true, data: meetingReuests });
            }
            catch (e) {
                return res.status(500).json({ success: false, message: 'Error occured' });
            }
        });
    }
    updateMeetingRequest(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { meeting_resquest_response_id, meeting_resquest_id } = req.body;
                const meetingReuests = yield meeting_service_1.default.update(meeting_resquest_id, meeting_resquest_response_id);
                return res.status(200).json({ success: true, data: meetingReuests });
            }
            catch (e) {
                return res.status(500).json({ success: false, message: 'Error occured' });
            }
        });
    }
    getAllMeetingRequest(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const meetingReuests = yield meeting_service_1.default.getAllMeetingRequest();
                return res.status(200).json({ success: true, data: meetingReuests });
            }
            catch (e) {
                return res.status(500).json({ success: false, message: 'Error occured' });
            }
        });
    }
}
exports.default = new MeetingController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVldGluZy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21lZXRpbmdSZXNwb25zZXMvY29udHJvbGxlcnMvbWVldGluZy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esa0RBQTBCO0FBQzFCLGtGQUF5RDtBQUV6RCxNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUUzRCxNQUFNLGlCQUFpQjtJQUNmLGFBQWEsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUM3RCxJQUFJO2dCQUNGLE1BQU0sRUFDSixPQUFPLEVBQ1AsZUFBZSxFQUNmLGtCQUFrQixFQUNsQixhQUFhLEVBQ2IsV0FBVyxFQUNYLEtBQUssR0FDTixHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2IsTUFBTSxPQUFPLEdBQUcsTUFBTSx5QkFBYyxDQUFDLE1BQU0sQ0FBQztvQkFDMUMsT0FBTztvQkFDUCxlQUFlO29CQUNmLGtCQUFrQjtvQkFDbEIsV0FBVztvQkFDWCxhQUFhO29CQUNiLE1BQU0sRUFBRSxTQUFTO29CQUNqQixLQUFLO2lCQUNOLENBQUMsQ0FBQztnQkFDSCxNQUFNLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFFckIsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQzthQUNuRDtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQzthQUMzRTtRQUNILENB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