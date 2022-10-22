"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeetingRequestResponseRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const meeting_controller_1 = __importDefault(require("./controllers/meeting.controller"));
const body_validation_middleware_1 = __importDefault(require("../common/middleware/body.validation.middleware"));
const express_validator_1 = require("express-validator");
const jwt_middleware_1 = __importDefault(require("../auth/middleware/jwt.middleware"));
class MeetingRequestResponseRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'MeetingRequestResponseRoutes');
    }
    configureRoutes() {
        this.app.post(`/response_meeting_request/create`, [
            jwt_middleware_1.default.validJWTNeeded,
            (0, express_validator_1.body)('user_id').isString(),
            (0, express_validator_1.body)('finance_user_id').isString(),
            (0, express_validator_1.body)('meeting_request_id').isString(),
            (0, express_validator_1.body)('date_and_time').isString(),
            (0, express_validator_1.body)('description').isString(),
            (0, express_validator_1.body)('title').isString(),
            body_validation_middleware_1.default.verifyBodyFieldsErrors,
            meeting_controller_1.default.createMeeting,
        ]);
        this.app.post(`/response_meeting_request/accept`, [
            jwt_middleware_1.default.validJWTNeeded,
            (0, express_validator_1.body)('meeting_resquest_response_id').isString(),
            (0, express_validator_1.body)('meeting_resquest_id').isString(),
            body_validation_middleware_1.default.verifyBodyFieldsErrors,
            meeting_controller_1.default.updateMeetingRequest,
        ]);
        this.app.get(`/response_meeting_request/user_id/:user_id`, [
            meeting_controller_1.default.getUserMeeting,
        ]);
        this.app.get(`/response_meeting_request/financial_guide_id/:financial_guide_id`, [meeting_controller_1.default.getFinancialGuideMeeting]);
        this.app.get(`/response_meeting_request/get_by_id/:meeting_request_response_id`, [meeting_controller_1.default.getByIdMeetingRequest]);
        this.app.get(`/response_meeting_request/all`, [
            meeting_controller_1.default.getAllMeetingRequest,
        ]);
        return this.app;
    }
}
exports.MeetingRequestResponseRoutes = MeetingRequestResponseRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVldGluZy5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21lZXRpbmdSZXNwb25zZXMvbWVldGluZy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHlFQUFvRTtBQUNwRSwwRkFBaUU7QUFFakUsaUhBQXVGO0FBQ3ZGLHlEQUF5QztBQUN6Qyx1RkFBOEQ7QUFFOUQsTUFBYSw0QkFBNkIsU0FBUSx5Q0FBa0I7SUFDbEUsWUFBWSxHQUF3QjtRQUNsQyxLQUFLLENBQUMsR0FBRyxFQUFFLDhCQUE4QixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxrQ0FBa0MsRUFBRTtZQUNoRCx3QkFBYSxDQUFDLGNBQWM7WUFDNUIsSUFBQSx3QkFBSSxFQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUMxQixJQUFBLHdCQUFJLEVBQUMsaUJBQWlCLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDbEMsSUFBQSx3QkFBSSxFQUFDLG9CQUFvQixDQUFDLENBQUMsUUFBUSxFQUFFO1lBQ3JDLElBQUEsd0JBQUksRUFBQyxlQUFlLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDaEMsSUFBQSx3QkFBSSxFQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUM5QixJQUFBLHdCQUFJLEVBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQ3hCLG9DQUF3QixDQUFDLHNCQUFzQjtZQUMvQyw0QkFBaUIsQ0FBQyxhQUFhO1NBQ2hDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxFQUFFO1lBQ2hELHdCQUFhLENBQUMsY0FBYztZQUM1QixJQUFBLHdCQUFJLEVBQUMsOEJBQThCLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDL0MsSUFBQSx3QkFBSSxFQUFDLHFCQUFxQixDQUFDLENBQUMsUUFBUSxFQUFFO1lBQ3RDLG9DQUF3QixDQUFDLHNCQUFzQjtZQUMvQyw0QkFBaUIsQ0FBQyxvQkFBb0I7U0FDdkMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsNENBQTRDLEVBQUU7WUFDekQsNEJBQWlCLENBQUMsY0FBYztTQUNqQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FDVixrRUFBa0UsRUFDbEUsQ0FBQyw0QkFBaUIsQ0FBQyx3QkFBd0IsQ0FBQyxDQUM3QyxDQUFDO1FBRUYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQ1Ysa0VBQWtFLEVBQ2xFLENBQUMsNEJBQWlCLENBQUMscUJBQXFCLENBQUMsQ0FDMUMsQ0FBQztRQUVGLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLCtCQUErQixFQUFFO1lBQzVDLDRCQUFpQixDQUFDLG9CQUFvQjtTQUN2QyxDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBN0NELG9FQTZDQyJ9