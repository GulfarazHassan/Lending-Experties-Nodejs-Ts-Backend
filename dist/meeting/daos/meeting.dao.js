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
            type_to_discuss: { type: String, default: '' },
            description: { type: String, default: '' },
            upload_documents: { type: [{ type: String }], default: [] },
            meeting_status: { type: String, default: '' },
            meeting_id: { type: Number, default: 0 },
        }, {
            timestamps: true,
        });
        this.Meeting = mongoose_service_1.default.getMongoose().models.Meetings ||
            mongoose_service_1.default.getMongoose().model('Meetings', this.meetingSchema);
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
                .populate('user_id', 'profile_image user_type first_name last_name cra_qualified_badge')
                .populate('finance_user_id', 'profile_image user_type first_name last_name cra_qualified_badge')
                .exec();
        });
    }
    meetingRequestAccept(meetingId, finalcialGuideId) {
        return __awaiter(this, void 0, void 0, function* () {
            const findMeetings = yield this.Meeting.find({ meeting_id: meetingId });
            if (findMeetings) {
                findMeetings.map((data) => __awaiter(this, void 0, void 0, function* () {
                    if (data.finance_user_id == finalcialGuideId) {
                        data.meeting_status = 'approved';
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
    getMeetingsFinanceUserId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Meeting.find({ finance_user_id: id })
                .populate('user_id', 'profile_image user_type first_name last_name cra_qualified_badge')
                .populate('finance_user_id', 'profile_image user_type first_name last_name cra_qualified_badge')
                .exec();
        });
    }
    getMeetingById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Meeting.findById(id)
                .populate('user_id', 'profile_image user_type first_name last_name cra_qualified_badge')
                .populate('finance_user_id', 'profile_image user_type first_name last_name cra_qualified_badge')
                .exec();
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
                .populate('finance_user_id', 'profile_image user_type first_name last_name cra_qualified_badge')
                .populate('user_id', 'profile_image user_type first_name last_name cra_qualified_badge')
                .exec();
        });
    }
}
exports.default = new MeetingDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVldGluZy5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWVldGluZy9kYW9zL21lZXRpbmcuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsOEZBQXFFO0FBQ3JFLGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUV4RCxNQUFNLFVBQVU7SUFvQmQ7UUFuQkEsV0FBTSxHQUFHLDBCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQzlDLGtCQUFhLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUM3QjtZQUNFLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRTtZQUMzRCxlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUU7WUFDbkUsZUFBZSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQzlDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUMxQyxnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUMzRCxjQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDN0MsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFO1NBQ3pDLEVBQ0Q7WUFDRSxVQUFVLEVBQUUsSUFBSTtTQUNqQixDQUNG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