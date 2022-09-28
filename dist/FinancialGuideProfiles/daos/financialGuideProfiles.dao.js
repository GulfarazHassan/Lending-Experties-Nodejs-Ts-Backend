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
class FinancialGuideProfiles {
    constructor() {
        this.Schema = mongoose_service_1.default.getMongoose().Schema;
        this.CommunityMemberProfileSchema = new this.Schema({
            email: { type: String, default: '' },
            user_id: { type: this.Schema.Types.ObjectId, ref: 'Users' },
            profile_image: { type: String, default: '' },
            first_name: { type: String, default: '' },
            last_name: { type: String, default: '' },
            gender: { type: String, default: '' },
            birthday: { type: String, default: '' },
            city: { type: String, default: '' },
            State: { type: String, default: '' },
            zipCode: { type: String, default: '' },
            is_work_for_some_financial_institute: { type: Boolean, default: false },
            employer_name: { type: String, default: '' },
            are_you_bilingual: { type: Boolean, default: false },
            areas_of_financial_knowledge: { type: [{ type: String }], default: [] },
            phone_number: { type: String, default: '' },
            is_phone_number_confirmed: { type: Boolean, default: false },
            nonprofit_boards_services: {
                type: [
                    {
                        type: {
                            nonprofit_name: { type: String, default: '' },
                            board_title: { type: String, default: '' },
                            address: { type: String, default: '' },
                            city: { type: String, default: '' },
                            state: { type: String, default: '' },
                            zipCode: { type: String, default: '' },
                            is_services_to_51_or_more_lmi_families: {
                                type: Boolean,
                                default: false,
                            },
                            is_board_service_to_church: { type: Boolean, default: false },
                            is_your_personal_family_church: { type: Boolean, default: false },
                            is_board_service_to_school: { type: Boolean, default: false },
                            is_your_children_family_attend_this_school: {
                                type: Boolean,
                                default: false,
                            },
                        },
                    },
                ],
                default: [],
            },
        });
        this.FinancialGuideProfile = mongoose_service_1.default.getMongoose().models.FinancialGuideProfiles ||
            mongoose_service_1.default
                .getMongoose()
                .model('FinancialGuideProfiles', this.CommunityMemberProfileSchema);
        log('create new instance in Profile');
    }
    addProfile(communityMemberProfilesFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const communityMemberProfile = new this.FinancialGuideProfile(Object.assign({}, communityMemberProfilesFields));
            yield communityMemberProfile.save();
            return communityMemberProfile;
        });
    }
    updateCommunityMemberProfileById(userId, communityMemberProfilesFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingUser = yield this.FinancialGuideProfile.findOneAndUpdate({ user_id: userId }, { $set: communityMemberProfilesFields }, { new: true }).exec();
            return existingUser;
        });
    }
    getByProfileId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingUser = yield this.FinancialGuideProfile.findOne({
                user_id: userId,
            }).exec();
            return existingUser;
        });
    }
    removeProfileById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.FinancialGuideProfile.deleteOne({ _id: userId }).exec();
        });
    }
    getProfiles(limit = 25, page = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.FinancialGuideProfile.find()
                .limit(limit)
                .skip(limit * page)
                .exec();
        });
    }
}
exports.default = new FinancialGuideProfiles();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluYW5jaWFsR3VpZGVQcm9maWxlcy5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvRmluYW5jaWFsR3VpZGVQcm9maWxlcy9kYW9zL2ZpbmFuY2lhbEd1aWRlUHJvZmlsZXMuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEZBQXFFO0FBRXJFLGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUV4RCxNQUFNLHNCQUFzQjtJQXFEMUI7UUFwREEsV0FBTSxHQUFHLDBCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQzlDLGlDQUE0QixHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUM3QyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDcEMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFO1lBQzNELGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUM1QyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDekMsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ3hDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNyQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDdkMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFB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