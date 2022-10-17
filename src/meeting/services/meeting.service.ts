import MeetingDao from '../daos/meeting.dao';
import { CreateMeetingDto } from '../dto/meeting.dto';

class MeetingService {
  async create(resource: CreateMeetingDto) {
    return MeetingDao.addMeeting(resource);
  }

  async getByUserId(id: string) {
    return MeetingDao.getMeetingsByUserId(id);
  }

  async getFinancicalGuideId(id: string) {
    return MeetingDao.getMeetingsFinanceUserId(id);
  }

  async acceptMeetingRequest(meetingId: number, finalcialGuideId: string) {
    return MeetingDao.meetingRequestAccept(meetingId, finalcialGuideId);
  }

  async getAllMeetingRequest() {
    return MeetingDao.getAllMeetings();
  }

  async getByIdMeetingRequest(id: string) {
    return MeetingDao.getMeetingById(id);
  }
}

export default new MeetingService();
