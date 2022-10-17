import express from 'express';
import debug from 'debug';
import MeetingService from '../services/meeting.service';
import UserDao from '../../users/daos/users.dao';
import { MEETING_TYPES_ENUM } from '../meeting.enum';

const log: debug.IDebugger = debug('app:users-controller');

class MeetingController {
  async createMeeting(req: express.Request, res: express.Response) {
    try {
      const { type_to_discuss, description, upload_documents } = req.body;
      const { user_id } = res.locals.jwt;

      const isMeetingTypeValid =
        Object.values(MEETING_TYPES_ENUM)?.includes(type_to_discuss);
      if (!isMeetingTypeValid) {
        return res.status(400).json({
          error:
            "user_type must be in ['budgeting', 'checking_and_saving', 'debt_management, 'managing_credit_cards''investing', 'managing_student_loans', 'credit_unions', 'first_time_home_buyer', 'starting_small_business', 'create_passive_income', 'credit_reports_and_tips', 'preparing_for_retirement', 'trust_and_estate_services', 'escroe_services', 'online_and_mobile_banking', 'money_market_accounts', 'certificate_of_deposits', 'home_equity_loans', 'auto_loans', 'personal_loans']",
        });
      }
      const users = await UserDao.getFinancialGuidesWithType(type_to_discuss);
      if (users) {
        const number = Math.floor(Math.random() * 899999 + 100000);
        users.map(async (data) => {
          const meeting = await MeetingService.create({
            type_to_discuss,
            user_id,
            finance_user_id: data._id,
            description,
            upload_documents,
            meeting_status: 'pending',
            meeting_id: number,
          });
          await meeting.save();
        });

        return res
          .status(200)
          .json({ success: true, message: 'Meeting Reauest sent' });
      } else {
        return res.status(200).json({
          success: true,
          message: `Financial Guide with tyle ${type_to_discuss} not present`,
        });
      }
    } catch (e) {
      console.log('error :: ', e);
      return res.status(500).json({ success: false, message: 'Error occured' });
    }
  }

  async getUserMeeting(req: express.Request, res: express.Response) {
    try {
      const { user_id } = req.params;

      const meetingReuests = await MeetingService.getByUserId(user_id);

      return res.status(200).json({ success: true, data: meetingReuests });
    } catch (e) {
      return res.status(500).json({ success: false, message: 'Error occured' });
    }
  }

  async getFinancialGuideMeeting(req: express.Request, res: express.Response) {
    try {
      const { financial_guide_id } = req.params;

      const meetingReuests = await MeetingService.getFinancicalGuideId(
        financial_guide_id
      );

      return res.status(200).json({ success: true, data: meetingReuests });
    } catch (e) {
      return res.status(500).json({ success: false, message: 'Error occured' });
    }
  }

  async acceptMeetingRequest(req: express.Request, res: express.Response) {
    try {
      const { meeting_id, financial_guide_id } = req.body;

      const meetingReuests = await MeetingService.acceptMeetingRequest(
        meeting_id,
        financial_guide_id
      );

      return res.status(200).json({ success: true, data: meetingReuests });
    } catch (e) {
      return res.status(500).json({ success: false, message: 'Error occured' });
    }
  }

  async getByIdMeetingRequest(req: express.Request, res: express.Response) {
    try {
      const { meeting_request_id } = req.params;

      const meetingReuests = await MeetingService.getByIdMeetingRequest(
        meeting_request_id
      );

      return res.status(200).json({ success: true, data: meetingReuests });
    } catch (e) {
      return res.status(500).json({ success: false, message: 'Error occured' });
    }
  }

  async getAllMeetingRequest(req: express.Request, res: express.Response) {
    try {
      const meetingReuests = await MeetingService.getAllMeetingRequest();

      return res.status(200).json({ success: true, data: meetingReuests });
    } catch (e) {
      return res.status(500).json({ success: false, message: 'Error occured' });
    }
  }
}

export default new MeetingController();
