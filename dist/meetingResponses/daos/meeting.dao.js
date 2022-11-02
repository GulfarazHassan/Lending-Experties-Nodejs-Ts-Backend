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
const moment_1 = __importDefault(require("moment"));
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
                .populate('user_id', 'profile_image user_type first_name last_name city state cra_qualified_badge')
                .populate('finance_user_id', 'profile_image user_type first_name last_name city state cra_qualified_badge')
                .exec();
        });
    }
    getMeetingsByUserIdAndToday(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let todayDate = (0, moment_1.default)()
                .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
                .format();
            let todayDate2 = (0, moment_1.default)()
                .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
                .add('days', 1)
                .format();
            console.log('todayDate :: ', todayDate);
            return this.Meeting.find({
                user_id: id,
                date_and_time: { $gte: todayDate, $lt: todayDate2 },
            })
                .populate('user_id', 'profile_image user_type first_name last_name city state cra_qualified_badge')
                .populate('finance_user_id', 'profile_image user_type first_name last_name city state cra_qualified_badge')
                .exec();
        });
    }
    getMeetingsByUserIdAndUpcomming(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let todayDate = (0, moment_1.default)()
                .add('days', 1)
                .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
                .format();
            return this.Meeting.find({
                user_id: id,
                date_and_time: { $gte: todayDate },
            })
                .populate('user_id', 'profile_image user_type first_name last_name city state cra_qualified_badge')
                .populate('finance_user_id', 'profile_image user_type first_name last_name city state cra_qualified_badge')
                .exec();
        });
    }
    getMeetingsFinanceUserId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Meeting.find({ finance_user_id: id })
                .populate('user_id', 'profile_image user_type first_name last_name city state cra_qualified_badge')
                .populate('finance_user_id', 'profile_image user_type first_name last_name city state cra_qualified_badge')
                .exec();
        });
    }
    getMeetingsFinanceUserIdAndToday(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let todayDate = (0, moment_1.default)()
                .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
                .format();
            let todayDate2 = (0, moment_1.default)()
                .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
                .add('days', 1)
                .format();
            return this.Meeting.find({
                finance_user_id: id,
                date_and_time: { $gte: todayDate, $lt: todayDate2 },
            })
                .populate('user_id', 'profile_image user_type first_name last_name city state cra_qualified_badge')
                .populate('finance_user_id', 'profile_image user_type first_name last_name city state cra_qualified_badge')
                .exec();
        });
    }
    getMeetingsFinanceUserIdAndUpComming(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let todayDate = (0, moment_1.default)()
                .add('days', 1)
                .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
                .format();
            return this.Meeting.find({
                finance_user_id: id,
                date_and_time: { $gte: todayDate },
            })
                .populate('user_id', 'profile_image user_type first_name last_name city state cra_qualified_badge')
                .populate('finance_user_id', 'profile_image user_type first_name last_name city state cra_qualified_badge')
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
                .populate('finance_user_id', 'profile_image user_type first_name last_name cra_qualified_badge')
                .populate('user_id', 'profile_image user_type first_name last_name cra_qualified_badge')
                .exec();
        });
    }
}
exports.default = new MeetingDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVldGluZy5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWVldGluZ1Jlc3BvbnNlcy9kYW9zL21lZXRpbmcuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsOEZBQXFFO0FBQ3JFLG9EQUE0QjtBQUM1QixrREFBMEI7QUFFMUIsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLG1CQUFtQixDQUFDLENBQUM7QUFFeEQsTUFBTSxVQUFVO0lBb0JkO1FBbkJBLFdBQU0sR0FBRywwQkFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUM5QyxrQkFBYSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FDN0I7WUFDRSxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUU7WUFDM0QsZUFBZSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFO1lBQ25FLGtCQUFrQixFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFO1lBQ3pFLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUM1QyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDMUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ3BDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRTtTQUM3QyxFQUNEO1lBQ0UsVUFB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