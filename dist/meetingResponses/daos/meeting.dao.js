"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_service_1 = __importDefault(require("../../common/services/mongoose.service"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:in-memory-dao');
class MeetingDao {
    constructor() {
        this.Schema = mongoose_service_1.default.getMongoose().Schema;
        this.meetingSchema = new this.Schema({
            user_id: { type: this.Schema.Types.ObjectId, ref: 'Users' },
            finance_user_id: { type: this.Schema.Types.ObjectId, ref: 'Users' },
            meeting_request_id: { type: this.Schema.Types.ObjectId, ref: 'Meetings' },
            date_and_time: { type: String, default: '' },
            description: { type: String, default: '' },
            title: { type: String, default: '' },
            status: { type: String, default: 'pending' },
        }, {
            timestamps: true,
        });
        this.Meeting = mongoose_service_1.default.getMongoose().models.MeetingResponses ||
            mongoose_service_1.default.getMongoose().model('MeetingResponses', this.meetingSchema);
        log('create new instance in meeting');
    }
    addMeeting(fields) {
        return __awaiter(this, void 0, void 0, function* () {
            const meeting = new this.Meeting(Object.assign({}, fields));
            yield meeting.save();
            return meeting;
        });
    }
    getMeetingsByUserId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Meeting.find({ user_id: id })
                .populate('user_id', 'profile_image user_type first_name last_name city state')
                .populate('finance_user_id', 'profile_image user_type first_name last_name city state')
                .exec();
        });
    }
    getMeetingsFinanceUserId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Meeting.find({ finance_user_id: id })
                .populate('user_id', 'profile_image user_type first_name last_name city state')
                .populate('finance_user_id', 'profile_image user_type first_name last_name city state')
                .exec();
        });
    }
    getMeetingById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Meeting.findById(id)
                .populate('user_id', 'profile_image user_type first_name last_name')
                .populate('finance_user_id', 'profile_image user_type first_name last_name')
                .exec();
        });
    }
    meetingRequestAccept(meetingRequestId, meetingRequestResponseId) {
        return __awaiter(this, void 0, void 0, function* () {
            const findMeetings = yield this.Meeting.find({
                meeting_request_id: meetingRequestId,
            });
            if (findMeetings) {
                findMeetings.map((data) => __awaiter(this, void 0, void 0, function* () {
                    if (data._id == meetingRequestResponseId) {
                        data.status = 'approved';
                    }
                    else {
                        data.meeting_status = 'rejected';
                    }
                    yield data.save();
                }));
                return { message: 'Approved' };
            }
            else {
                return { message: '' };
            }
        });
    }
    updateMeetingById(fields, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const meeting = yield this.Meeting.findOneAndUpdate({ _id: id }, { $set: fields }, { new: true }).exec();
            return meeting;
        });
    }
    getAllMeetings() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Meeting.find()
                .populate('finance_user_id', 'profile_image user_type first_name last_name')
                .populate('user_id', 'profile_image user_type first_name last_name')
                .exec();
        });
    }
}
exports.default = new MeetingDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVldGluZy5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWVldGluZ1Jlc3BvbnNlcy9kYW9zL21lZXRpbmcuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsOEZBQXFFO0FBQ3JFLGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUV4RCxNQUFNLFVBQVU7SUFvQmQ7UUFuQkEsV0FBTSxHQUFHLDBCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQzlDLGtCQUFhLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUM3QjtZQUNFLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRTtZQUMzRCxlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUU7WUFDbkUsa0JBQWtCLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUU7WUFDekUsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQzVDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUMxQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDcEMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFO1NBQzdDLEVBQ0Q7WUFDRSxVQUFVLEVBQUUsSUFBSTtT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