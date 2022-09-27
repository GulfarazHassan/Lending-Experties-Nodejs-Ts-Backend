import mongooseService from '../../common/services/mongoose.service';
import { CreateDto, UpdateDto } from '../dto/businessOwnerProfiles.dto';
import debug from 'debug';

const log: debug.IDebugger = debug('app:in-memory-dao');

class BusinessOwnerProfiles {
  Schema = mongooseService.getMongoose().Schema;
  CommunityMemberProfileSchema = new this.Schema({
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
    business_name: { type: String, default: '' },
    business_address: { type: String, default: '' },
    business_ein: { type: String, default: '' },
    anual_revenue: { type: String, default: '' },
    business_owned: { type: String, default: '' },
    are_you_bilingual: { type: Boolean, default: false },
    other_languages: { type: [{ type: String }], default: [] },
    phone_number: { type: String, default: '' },
    is_phone_number_confirmed: { type: Boolean, default: false },
  });

  CommunityMemberProfile = mongooseService
    .getMongoose()
    .model('BusinessOwnerProfiles', this.CommunityMemberProfileSchema);

  constructor() {
    log('create new instance in communityMemberProfile');
  }

  async addProfile(communityMemberProfilesFields: CreateDto) {
    const communityMemberProfile = new this.CommunityMemberProfile({
      ...communityMemberProfilesFields,
    });
    await communityMemberProfile.save();
    return communityMemberProfile;
  }

  async updateCommunityMemberProfileById(
    userId: string,
    communityMemberProfilesFields: UpdateDto
  ) {
    const existingUser = await this.CommunityMemberProfile.findOneAndUpdate(
      { user_id: userId },
      { $set: communityMemberProfilesFields },
      { new: true }
    ).exec();

    return existingUser;
  }

  async getByProfileId(userId: string) {
    const existingUser = await this.CommunityMemberProfile.findOne({
      user_id: userId,
    }).exec();

    return existingUser;
  }

  async removeProfileById(userId: string) {
    return this.CommunityMemberProfile.deleteOne({ _id: userId }).exec();
  }

  async getProfiles(limit = 25, page = 0) {
    return this.CommunityMemberProfile.find()
      .limit(limit)
      .skip(limit * page)
      .exec();
  }
}

export default new BusinessOwnerProfiles();