import MeetingDao from '../daos/meeting.dao';
import { CreateMeetingDto } from '../dto/meeting.dto';

class MeetingService {
  async create(resource: CreateMeetingDto) {
    return MeetingDao.addMeeting(resource);
  }

  async update(id1: string, id: string) {
    return MeetingDao.meetingRequestAccept(id1, id);
  }

  async getByUserId(id: string) {
    return MeetingDao.getMeetingsByUserId(id);
  }

  async getFinancicalGuideId(id: string) {
    return MeetingDao.getMeetingsFinanceUserId(id);
  }

  async getAllMeetingRequest() {
    return MeetingDao.getAllMeetings();
  }

  async getByIdMeetingRequest(id: string) {
    return MeetingDao.getMeetingById(id);
  }
}

export default new MeetingService();
