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

  async getByUserIdAndToday(id: string) {
    return MeetingDao.getMeetingsByUserIdAndToday(id);
  }

  async getByUserIdAndUpcomming(id: string) {
    return MeetingDao.getMeetingsByUserIdAndUpcomming(id);
  }

  async getFinancicalGuideId(id: string) {
    return MeetingDao.getMeetingsFinanceUserId(id);
  }

  async getFinancicalGuideIdAndToday(id: string) {
    return MeetingDao.getMeetingsFinanceUserIdAndToday(id);
  }

  async getFinancicalGuideIdAndUpcomming(id: string) {
    return MeetingDao.getMeetingsFinanceUserIdAndUpComming(id);
  }

  async getAllMeetingRequest() {
    return MeetingDao.getAllMeetings();
  }

  async getByIdMeetingRequest(id: string) {
    return MeetingDao.getMeetingById(id);
  }
}

export default new MeetingService();
