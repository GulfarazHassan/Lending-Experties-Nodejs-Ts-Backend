import { CreateMeetingDto } from '../dto/meeting.dto';
import mongooseService from '../../common/services/mongoose.service';
import debug from 'debug';

const log: debug.IDebugger = debug('app:in-memory-dao');

class MeetingDao {
  Schema = mongooseService.getMongoose().Schema;
  meetingSchema = new this.Schema(
    {
      user_id: { type: this.Schema.Types.ObjectId, ref: 'Users' },
      finance_user_id: { type: this.Schema.Types.ObjectId, ref: 'Users' },
      meeting_request_id: { type: this.Schema.Types.ObjectId, ref: 'Meetings' },
      date_and_time: { type: String, default: '' },
      description: { type: String, default: '' },
      title: { type: String, default: '' },
      status: { type: String, default: 'pending' },
    },
    {
      timestamps: true,
    }
  );

  Meeting =
    mongooseService.getMongoose().models.MeetingResponses ||
    mongooseService.getMongoose().model('MeetingResponses', this.meetingSchema);
  constructor() {
    log('create new instance in meeting');
  }

  async addMeeting(fields: CreateMeetingDto) {
    const meeting = new this.Meeting({
      ...fields,
    });
    await meeting.save();
    return meeting;
  }

  async getMeetingsByUserId(id: string) {
    return this.Meeting.find({ user_id: id })
      .populate(
        'user_id',
        'profile_image user_type first_name last_name city state'
      )
      .populate(
        'finance_user_id',
        'profile_image user_type first_name last_name city state'
      )
      .exec();
  }

  async getMeetingsFinanceUserId(id: string) {
    return this.Meeting.find({ finance_user_id: id })
      .populate(
        'user_id',
        'profile_image user_type first_name last_name city state'
      )
      .populate(
        'finance_user_id',
        'profile_image user_type first_name last_name city state'
      )
      .exec();
  }

  async getMeetingById(id: string) {
    return this.Meeting.findById(id)
      .populate('user_id', 'profile_image user_type first_name last_name')
      .populate(
        'finance_user_id',
        'profile_image user_type first_name last_name'
      )
      .exec();
  }

  async meetingRequestAccept(
    meetingRequestId: string,
    meetingRequestResponseId: string
  ) {
    const findMeetings = await this.Meeting.find({
      meeting_request_id: meetingRequestId,
    });
    if (findMeetings) {
      findMeetings.map(async (data) => {
        if (data._id == meetingRequestResponseId) {
          data.status = 'approved';
        } else {
          data.meeting_status = 'rejected';
        }

        await data.save();
      });
      return { message: 'Approved' };
    } else {
      return { message: '' };
    }
  }

  async updateMeetingById(fields: CreateMeetingDto, id: string) {
    const meeting = await this.Meeting.findOneAndUpdate(
      { _id: id },
      { $set: fields },
      { new: true }
    ).exec();

    return meeting;
  }

  async getAllMeetings() {
    return this.Meeting.find()
      .populate(
        'finance_user_id',
        'profile_image user_type first_name last_name'
      )
      .populate('user_id', 'profile_image user_type first_name last_name')
      .exec();
  }
}

export default new MeetingDao();
