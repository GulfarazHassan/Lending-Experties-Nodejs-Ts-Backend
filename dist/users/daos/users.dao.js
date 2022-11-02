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
class UsersDao {
    constructor() {
        this.Schema = mongoose_service_1.default.getMongoose().Schema;
        this.userSchema = new this.Schema({
            email: { type: String },
            password: { type: String, select: false },
            user_type: { type: String },
            user_id: { type: this.Schema.Types.ObjectId, ref: 'Users' },
            profile_image: { type: String },
            cover_image: { type: String },
            first_name: { type: String },
            last_name: { type: String },
            gender: { type: String },
            birthday: { type: String },
            city: { type: String },
            State: { type: String },
            zipCode: { type: String },
            business_name: { type: String },
            business_address: { type: String },
            business_ein: { type: String },
            anual_revenue: { type: String },
            business_owned: { type: String },
            are_you_bilingual: { type: Boolean },
            other_languages: { type: [{ type: String }] },
            phone_number: { type: String },
            is_phone_number_confirmed: { type: Boolean, default: false },
            income_range: { type: String },
            cra_qualified_badge: { type: String, default: '' },
            income_range_min: { type: Number },
            income_range_max: { type: Number },
            household_size: { type: Number },
            referred_by_nonprofit_church_community: { type: Boolean },
            nonprofit_name: { type: String },
            organization_ein: { type: String },
            your_title: { type: String },
            is_services_to_51_or_more_lmi_families: { type: Boolean },
            is_work_for_some_financial_institute: { type: Boolean },
            employer_name: { type: String, default: '' },
            otp_code: { type: Number },
            areas_of_financial_knowledge: { type: [{ type: String }] },
            nonprofit_boards_services: {
                type: [
                    {
                        type: {
                            nonprofit_name: { type: String },
                            board_title: { type: String },
                            address: { type: String },
                            city: { type: String },
                            state: { type: String },
                            zipCode: { type: String },
                            is_services_to_51_or_more_lmi_families: {
                                type: Boolean,
                            },
                            is_board_service_to_church: { type: Boolean },
                            is_your_personal_family_church: { type: Boolean },
                            is_board_service_to_school: { type: Boolean },
                            is_your_children_family_attend_this_school: {
                                type: Boolean,
                            },
                        },
                    },
                ],
            },
        });
        this.User = mongoose_service_1.default.getMongoose().models.Users ||
            mongoose_service_1.default.getMongoose().model('Users', this.userSchema);
        log('create new instance in user');
    }
    addUser(userFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = new this.User(Object.assign({}, userFields));
            yield user.save();
            return user;
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.User.findOne({ email: email }).exec();
        });
    }
    getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.User.findOne({ _id: userId }).exec();
        });
    }
    getUsers(limit = 25, page = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.User.find()
                .limit(limit)
                .skip(limit * page)
                .exec();
        });
    }
    getFinancialGuidesWithType(areas_of_financial_knowledge) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.User.find({
                user_type: 'financial_guide',
                areas_of_financial_knowledge: {
                    $elemMatch: { $eq: areas_of_financial_knowledge },
                },
            }).exec();
        });
    }
    updateUserById(userId, userFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingUser = yield this.User.findOneAndUpdate({ _id: userId }, { $set: userFields }, { new: true }).exec();
            return existingUser;
        });
    }
    removeUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.User.deleteOne({ _id: userId }).exec();
        });
    }
    getUserByEmailWithPassword(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.User.findOne({ email: email })
                .select('_id email permissionFlags +password user_type')
                .exec();
        });
    }
}
exports.default = new UsersDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3VzZXJzL2Rhb3MvdXNlcnMuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBR0EsOEZBQXFFO0FBQ3JFLGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUV4RCxNQUFNLFFBQVE7SUFtRVo7UUFsRUEsV0FBTSxHQUFHLDBCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQzlDLGVBQVUsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDM0IsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtZQUN2QixRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7WUFDekMsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtZQUMzQixPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUU7WUFDM0QsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtZQUMvQixXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO1lBQzdCLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7WUFDNUIsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtZQUMzQixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO1lBQ3hCLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7WUFDMUIsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtZQUN0QixLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO1lBQ3ZC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