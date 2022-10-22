import { CommonRoutesConfig } from '../common/common.routes.config';
import MeetingController from './controllers/meeting.controller';
import express from 'express';
import BodyValidationMiddleware from '../common/middleware/body.validation.middleware';
import { body } from 'express-validator';
import jwtMiddleware from '../auth/middleware/jwt.middleware';

export class MeetingRequestResponseRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'MeetingRequestResponseRoutes');
  }

  configureRoutes() {
    this.app.post(`/response_meeting_request/create`, [
      jwtMiddleware.validJWTNeeded,
      body('user_id').isString(),
      body('finance_user_id').isString(),
      body('meeting_request_id').isString(),
      body('date_and_time').isString(),
      body('description').isString(),
      body('title').isString(),
      BodyValidationMiddleware.verifyBodyFieldsErrors,
      MeetingController.createMeeting,
    ]);

    this.app.post(`/response_meeting_request/accept`, [
      jwtMiddleware.validJWTNeeded,
      body('meeting_resquest_response_id').isString(),
      body('meeting_resquest_id').isString(),
      BodyValidationMiddleware.verifyBodyFieldsErrors,
      MeetingController.updateMeetingRequest,
    ]);

    this.app.get(`/response_meeting_request/user_id/:user_id`, [
      MeetingController.getUserMeeting,
    ]);

    this.app.get(
      `/response_meeting_request/financial_guide_id/:financial_guide_id`,
      [MeetingController.getFinancialGuideMeeting]
    );

    this.app.get(
      `/response_meeting_request/get_by_id/:meeting_request_response_id`,
      [MeetingController.getByIdMeetingRequest]
    );

    this.app.get(`/response_meeting_request/all`, [
      MeetingController.getAllMeetingRequest,
    ]);
    return this.app;
  }
}
