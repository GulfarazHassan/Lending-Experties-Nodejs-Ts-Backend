import mongooseService from '../../common/services/mongoose.service';
import { CreateDto, UpdateDto } from '../dto/financialGuideProfiles.dto';
import debug from 'debug';

const log: debug.IDebugger = debug('app:in-memory-dao');

class FinancialGuideProfiles {
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

  FinancialGuideProfile = mongooseService
    .getMongoose()
    .model('FinancialGuideProfiles', this.CommunityMemberProfileSchema);

  constructor() {
    log('create new instance in Profile');
  }

  async addProfile(communityMemberProfilesFields: CreateDto) {
    const communityMemberProfile = new this.FinancialGuideProfile({
      ...communityMemberProfilesFields,
    });
    await communityMemberProfile.save();
    return communityMemberProfile;
  }

  async updateCommunityMemberProfileById(
    userId: string,
    communityMemberProfilesFields: UpdateDto
  ) {
    const existingUser = await this.FinancialGuideProfile.findOneAndUpdate(
      { user_id: userId },
      { $set: communityMemberProfilesFields },
      { new: true }
    ).exec();

    return existingUser;
  }

  async getByProfileId(userId: string) {
    const existingUser = await this.FinancialGuideProfile.findOne({
      user_id: userId,
    }).exec();

    return existingUser;
  }

  async removeProfileById(userId: string) {
    return this.FinancialGuideProfile.deleteOne({ _id: userId }).exec();
  }

  async getProfiles(limit = 25, page = 0) {
    return this.FinancialGuideProfile.find()
      .limit(limit)
      .skip(limit * page)
      .exec();
  }
}

export default new FinancialGuideProfiles();
