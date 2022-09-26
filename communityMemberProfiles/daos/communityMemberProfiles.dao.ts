import mongooseService from '../../common/services/mongoose.service';
import { CreateDto, UpdateDto } from '../dto/communityMemberProfiles.dto';
import debug from 'debug';

const log: debug.IDebugger = debug('app:in-memory-dao');

class CommunityMemberProfilesDao {
  Schema = mongooseService.getMongoose().Schema;
  CommunityMemberProfileSchema = new this.Schema({
    email: { type: String, default: '' },

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

  CommunityMemberProfile = mongooseService
    .getMongoose()
    .model('CommunityMemberProfiles', this.CommunityMemberProfileSchema);

  constructor() {
    log('create new instance in communityMemberProfile');
  }

  async addCommunityMemberProfile(communityMemberProfilesFields: CreateDto) {
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
}

export default new CommunityMemberProfilesDao();
