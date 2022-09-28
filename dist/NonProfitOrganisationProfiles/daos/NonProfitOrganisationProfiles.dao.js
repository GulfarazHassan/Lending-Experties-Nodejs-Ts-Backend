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
class NonProfitOrganisationProfiles {
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
            nonprofit_name: { type: String, default: '' },
            organization_ein: { type: String, default: '' },
            your_title: { type: String, default: '' },
            is_services_to_51_or_more_lmi_families: { type: Boolean, default: false },
            phone_number: { type: String, default: '' },
            is_phone_number_confirmed: { type: Boolean, default: false },
        });
        this.CommunityMemberProfile = mongoose_service_1.default.getMongoose().models.NonProfitOrganisationProfiles ||
            mongoose_service_1.default
                .getMongoose()
                .model('NonProfitOrganisationProfiles', this.CommunityMemberProfileSchema);
        log('create new instance Profile');
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
exports.default = new NonProfitOrganisationProfiles();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm9uUHJvZml0T3JnYW5pc2F0aW9uUHJvZmlsZXMuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL05vblByb2ZpdE9yZ2FuaXNhdGlvblByb2ZpbGVzL2Rhb3MvTm9uUHJvZml0T3JnYW5pc2F0aW9uUHJvZmlsZXMuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEZBQXFFO0FBRXJFLGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsZUFBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFFeEQsTUFBTSw2QkFBNkI7SUE4QmpDO1FBN0JBLFdBQU0sR0FBRywwQkFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUM5QyxpQ0FBNEIsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDN0MsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ3BDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRTtZQUMzRCxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDNUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ3pDLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUN4QyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDckMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ3ZDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVB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