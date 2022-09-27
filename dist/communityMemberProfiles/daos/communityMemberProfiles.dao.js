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
class CommunityMemberProfilesDao {
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
            income_range: { type: String, default: '' },
            household_size: { type: String, default: '' },
            referred_by_nonprofit_church_community: { type: Boolean, default: false },
            are_you_bilingual: { type: Boolean, default: false },
            phone_number: { type: String, default: '' },
            is_phone_number_confirmed: { type: Boolean, default: false },
        });
        this.CommunityMemberProfile = mongoose_service_1.default
            .getMongoose()
            .model('CommunityMemberProfiles', this.CommunityMemberProfileSchema);
        log('create new instance in Profile');
    }
    addProfile(communityMemberProfilesFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const communityMemberProfile = new this.CommunityMemberProfile(Object.assign({}, communityMemberProfilesFields));
            yield communityMemberProfile.save();
            return communityMemberProfile;
        });
    }
    updateCommunityMemberProfileById(userId, communityMemberProfilesFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingUser = yield this.CommunityMemberProfile.findOneAndUpdate({ user_id: userId }, { $set: communityMemberProfilesFields }, { new: true }).exec();
            return existingUser;
        });
    }
    getByProfileId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingUser = yield this.CommunityMemberProfile.findOne({
                user_id: userId,
            }).exec();
            return existingUser;
        });
    }
    removeProfileById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.CommunityMemberProfile.deleteOne({ _id: userId }).exec();
        });
    }
    getProfiles(limit = 25, page = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.CommunityMemberProfile.find()
                .limit(limit)
                .skip(limit * page)
                .exec();
        });
    }
}
exports.default = new CommunityMemberProfilesDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbXVuaXR5TWVtYmVyUHJvZmlsZXMuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tbXVuaXR5TWVtYmVyUHJvZmlsZXMvZGFvcy9jb21tdW5pdHlNZW1iZXJQcm9maWxlcy5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4RkFBcUU7QUFFckUsa0RBQTBCO0FBRTFCLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBRXhELE1BQU0sMEJBQTBCO0lBeUI5QjtRQXhCQSxXQUFNLEdBQUcsMEJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDOUMsaUNBQTRCLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzdDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNwQyxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUU7WUFDM0QsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQzVDLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUN6QyxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDeEMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ3JDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUN2QyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFF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