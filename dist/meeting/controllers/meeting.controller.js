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
const users_dao_1 = __importDefault(require("../../users/daos/users.dao"));
const meeting_enum_1 = require("../meeting.enum");
const log = (0, debug_1.default)('app:users-controller');
class MeetingController {
    createMeeting(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { type_to_discuss, description, upload_documents } = req.body;
                const { user_id } = res.locals.jwt;
                const isMeetingTypeValid = (_a = Object.values(meeting_enum_1.MEETING_TYPES_ENUM)) === null || _a === void 0 ? void 0 : _a.includes(type_to_discuss);
                if (!isMeetingTypeValid) {
                    return res.status(400).json({
                        error: "user_type must be in ['budgeting', 'checking_and_saving', 'debt_management, 'managing_credit_cards''investing', 'managing_student_loans', 'credit_unions', 'first_time_home_buyer', 'starting_small_business', 'create_passive_income', 'credit_reports_and_tips', 'preparing_for_retirement', 'trust_and_estate_services', 'escroe_services', 'online_and_mobile_banking', 'money_market_accounts', 'certificate_of_deposits', 'home_equity_loans', 'auto_loans', 'personal_loans']",
                    });
                }
                const users = yield users_dao_1.default.getFinancialGuidesWithType(type_to_discuss);
                if (users) {
                    const number = Math.floor(Math.random() * 899999 + 100000);
                    users.map((data) => __awaiter(this, void 0, void 0, function* () {
                        const meeting = yield meeting_service_1.default.create({
                            type_to_discuss,
                            user_id,
                            finance_user_id: data._id,
                            description,
                            upload_documents,
                            meeting_status: 'pending',
                            meeting_id: number,
                        });
                        yield meeting.save();
                    }));
                    return res
                        .status(200)
                        .json({ success: true, message: 'Meeting Reauest sent' });
                }
                else {
                    return res.status(200).json({
                        success: true,
                        message: `Financial Guide with tyle ${type_to_discuss} not present`,
                    });
                }
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
    acceptMeetingRequest(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { meeting_id, financial_guide_id } = req.body;
                const meetingReuests = yield meeting_service_1.default.acceptMeetingRequest(meeting_id, financial_guide_id);
                return res.status(200).json({ success: true, data: meetingReuests });
            }
            catch (e) {
                return res.status(500).json({ success: false, message: 'Error occured' });
            }
        });
    }
    getByIdMeetingRequest(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { meeting_request_id } = req.params;
                const meetingReuests = yield meeting_service_1.default.getByIdMeetingRequest(meeting_request_id);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVldGluZy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21lZXRpbmcvY29udHJvbGxlcnMvbWVldGluZy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esa0RBQTBCO0FBQzFCLGtGQUF5RDtBQUN6RCwyRUFBaUQ7QUFDakQsa0RBQXFEO0FBRXJELE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBRTNELE1BQU0saUJBQWlCO0lBQ2YsYUFBYSxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7OztZQUM3RCxJQUFJO2dCQUNGLE1BQU0sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDcEUsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUVuQyxNQUFNLGtCQUFrQixHQUN0QixNQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsaUNBQWtCLENBQUMsMENBQUUsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUMvRCxJQUFJLENBQUMsa0JBQWtCLEVBQUU7b0JBQ3ZCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7d0JBQzFCLEtBQUssRUFDSCxzZEFBc2Q7cUJBQ3pkLENBQUMsQ0FBQztpQkFDSjtnQkFDRCxNQUFNLEtBQUssR0FBRyxNQUFNLG1CQUFPLENBQUMsMEJBQTBCLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQ3hFLElBQUksS0FBSyxFQUFFO29CQUNULE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQztvQkFDM0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxD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