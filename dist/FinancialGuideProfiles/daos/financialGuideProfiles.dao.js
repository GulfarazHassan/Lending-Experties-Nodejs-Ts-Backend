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
        this.FinancialGuideProfile = mongoose_service_1.default
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluYW5jaWFsR3VpZGVQcm9maWxlcy5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9GaW5hbmNpYWxHdWlkZVByb2ZpbGVzL2Rhb3MvZmluYW5jaWFsR3VpZGVQcm9maWxlcy5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4RkFBcUU7QUFFckUsa0RBQTBCO0FBRTFCLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBRXhELE1BQU0sc0JBQXNCO0lBbUQxQjtRQWxEQSxXQUFNLEdBQUcsMEJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDOUMsaUNBQTRCLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzdDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNwQyxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUU7WUFDM0QsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQzVDLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUN6QyxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDeEMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ3JDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUN2QyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVB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