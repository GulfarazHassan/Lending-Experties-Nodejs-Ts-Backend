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
const log = debug_1.default('app:in-memory-dao');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluYW5jaWFsR3VpZGVQcm9maWxlcy5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvRmluYW5jaWFsR3VpZGVQcm9maWxlcy9kYW9zL2ZpbmFuY2lhbEd1aWRlUHJvZmlsZXMuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEZBQXFFO0FBRXJFLGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsZUFBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFFeEQsTUFBTSxzQkFBc0I7SUFxRDFCO1FBcERBLFdBQU0sR0FBRywwQkFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUM5QyxpQ0FBNEIsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDN0MsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ3BDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRTtZQUMzRCxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDNUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ3pDLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUN4QyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDckMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ3ZDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFB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