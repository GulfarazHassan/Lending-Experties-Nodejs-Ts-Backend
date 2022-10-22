import express from 'express';
import debug from 'debug';
import MeetingService from '../services/meeting.service';

const log: debug.IDebugger = debug('app:users-controller');

class MeetingController {
  async createMeeting(req: express.Request, res: express.Response) {
    try {
      const {
        user_id,
        finance_user_id,
        meeting_request_id,
        date_and_time,
        description,
        title,
      } = req.body;
      const meeting = await MeetingService.create({
        user_id,
        finance_user_id,
        meeting_request_id,
        description,
        date_and_time,
        status: 'pending',
        title,
      });
      await meeting.save();

      return res.json({ success: true, data: meeting });
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

  async getByIdMeetingRequest(req: express.Request, res: express.Response) {
    console.log('sds');
    try {
      const { meeting_request_response_id } = req.params;

      const meetingReuests = await MeetingService.getByIdMeetingRequest(
        meeting_request_response_id
      );

      return res.status(200).json({ success: true, data: meetingReuests });
    } catch (e) {
      return res.status(500).json({ success: false, message: 'Error occured' });
    }
  }

  async updateMeetingRequest(req: express.Request, res: express.Response) {
    try {
      const { meeting_resquest_response_id, meeting_resquest_id } = req.body;

      const meetingReuests = await MeetingService.update(
        meeting_resquest_id,
        meeting_resquest_response_id
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
