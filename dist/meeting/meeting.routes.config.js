"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeetingRequestRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const meeting_controller_1 = __importDefault(require("./controllers/meeting.controller"));
const body_validation_middleware_1 = __importDefault(require("../common/middleware/body.validation.middleware"));
const express_validator_1 = require("express-validator");
const jwt_middleware_1 = __importDefault(require("../auth/middleware/jwt.middleware"));
class MeetingRequestRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'MeetingRequestRoutes');
    }
    configureRoutes() {
        this.app.post(`/meeting_request/create`, [
            jwt_middleware_1.default.validJWTNeeded,
            (0, express_validator_1.body)('type_to_discuss').isString(),
            (0, express_validator_1.body)('description').isString(),
            body_validation_middleware_1.default.verifyBodyFieldsErrors,
            meeting_controller_1.default.createMeeting,
        ]);
        this.app.post(`/meeting_request/accept`, [
            jwt_middleware_1.default.validJWTNeeded,
            (0, express_validator_1.body)('meeting_id').isNumeric(),
            (0, express_validator_1.body)('financial_guide_id').isString(),
            body_validation_middleware_1.default.verifyBodyFieldsErrors,
            meeting_controller_1.default.acceptMeetingRequest,
        ]);
        this.app.get(`/meeting_request/user_id/:user_id`, [
            meeting_controller_1.default.getUserMeeting,
        ]);
        this.app.get(`/meeting_request/financial_guide_id/:financial_guide_id`, [
            meeting_controller_1.default.getFinancialGuideMeeting,
        ]);
        this.app.get(`/meeting_request/get_by_id/:meeting_request_id`, [
            meeting_controller_1.default.getByIdMeetingRequest,
        ]);
        this.app.get(`/meeting_request/all`, [
            meeting_controller_1.default.getAllMeetingRequest,
        ]);
        return this.app;
    }
}
exports.MeetingRequestRoutes = MeetingRequestRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVldGluZy5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21lZXRpbmcvbWVldGluZy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHlFQUFvRTtBQUNwRSwwRkFBaUU7QUFFakUsaUhBQXVGO0FBQ3ZGLHlEQUF5QztBQUN6Qyx1RkFBOEQ7QUFFOUQsTUFBYSxvQkFBcUIsU0FBUSx5Q0FBa0I7SUFDMUQsWUFBWSxHQUF3QjtRQUNsQyxLQUFLLENBQUMsR0FBRyxFQUFFLHNCQUFzQixDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsRUFBRTtZQUN2Qyx3QkFBYSxDQUFDLGNBQWM7WUFDNUIsSUFBQSx3QkFBSSxFQUFDLGlCQUFpQixDQUFDLENBQUMsUUFBUSxFQUFFO1lBQ2xDLElBQUEsd0JBQUksRUFBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDOUIsb0NBQXdCLENBQUMsc0JBQXNCO1lBQy9DLDRCQUFpQixDQUFDLGFBQWE7U0FDaEMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUU7WUFDdkMsd0JBQWEsQ0FBQyxjQUFjO1lBQzVCLElBQUEsd0JBQUksRUFBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLEVBQUU7WUFDOUIsSUFBQSx3QkFBSSxFQUFDLG9CQUFvQixDQUFDLENBQUMsUUFBUSxFQUFFO1lBQ3JDLG9DQUF3QixDQUFDLHNCQUFzQjtZQUMvQyw0QkFBaUIsQ0FBQyxvQkFBb0I7U0FDdkMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsbUNBQW1DLEVBQUU7WUFDaEQsNEJBQWlCLENBQUMsY0FBYztTQUNqQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyx5REFBeUQsRUFBRTtZQUN0RSw0QkFBaUIsQ0FBQyx3QkFBd0I7U0FDM0MsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0RBQWdELEVBQUU7WUFDN0QsNEJBQWlCLENBQUMscUJBQXFCO1NBQ3hDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFO1lBQ25DLDRCQUFpQixDQUFDLG9CQUFvQjtTQUN2QyxDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBdkNELG9EQXVDQyJ9