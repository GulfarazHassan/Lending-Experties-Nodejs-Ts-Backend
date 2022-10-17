import { CommonRoutesConfig } from '../common/common.routes.config';
import MeetingController from './controllers/meeting.controller';
import express from 'express';
import BodyValidationMiddleware from '../common/middleware/body.validation.middleware';
import { body } from 'express-validator';
import jwtMiddleware from '../auth/middleware/jwt.middleware';

export class MeetingRequestRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'MeetingRequestRoutes');
  }

  configureRoutes() {
    this.app.post(`/meeting_request/create`, [
      jwtMiddleware.validJWTNeeded,
      body('type_to_discuss').isString(),
      body('description').isString(),
      BodyValidationMiddleware.verifyBodyFieldsErrors,
      MeetingController.createMeeting,
    ]);

    this.app.post(`/meeting_request/accept`, [
      jwtMiddleware.validJWTNeeded,
      body('meeting_id').isNumeric(),
      body('financial_guide_id').isString(),
      BodyValidationMiddleware.verifyBodyFieldsErrors,
      MeetingController.acceptMeetingRequest,
    ]);

    this.app.get(`/meeting_request/user_id/:user_id`, [
      MeetingController.getUserMeeting,
    ]);

    this.app.get(`/meeting_request/financial_guide_id/:financial_guide_id`, [
      MeetingController.getFinancialGuideMeeting,
    ]);

    this.app.get(`/meeting_request/get_by_id/:meeting_request_id`, [
      MeetingController.getByIdMeetingRequest,
    ]);

    this.app.get(`/meeting_request/all`, [
      MeetingController.getAllMeetingRequest,
    ]);
    return this.app;
  }
}
