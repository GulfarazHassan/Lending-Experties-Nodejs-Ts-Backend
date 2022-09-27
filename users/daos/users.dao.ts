import { CreateUserDto } from '../dto/create.user.dto';
import { PatchUserDto } from '../dto/patch.user.dto';
import { PutUserDto } from '../dto/put.user.dto';
import mongooseService from '../../common/services/mongoose.service';
import debug from 'debug';

const log: debug.IDebugger = debug('app:in-memory-dao');

class UsersDao {
  Schema = mongooseService.getMongoose().Schema;
  userSchema = new this.Schema({
    email: { type: String },
    password: { type: String, select: false },
    user_type: { type: String },
    community_member_profile_id: {
      type: this.Schema.Types.ObjectId,
      ref: 'CommunityMemberProfiles',
    },
    business_owner_profile_id: {
      type: this.Schema.Types.ObjectId,
      ref: 'BusinessOwnerProfiles',
    },
    non_profit_organisation_profile_id: {
      type: this.Schema.Types.ObjectId,
      ref: 'NonProfitOrganisationProfiles',
    },
    financial_guide_profile_id: {
      type: this.Schema.Types.ObjectId,
      ref: 'FinancialGuideProfiles',
    },
  });

  User = mongooseService.getMongoose().model('Users', this.userSchema);
  constructor() {
    log('create new instance in user');
  }

  async addUser(userFields: CreateUserDto) {
    const user = new this.User({
      ...userFields,
    });
    await user.save();
    return user;
  }

  async getUserByEmail(email: string) {
    return this.User.findOne({ email: email }).exec();
  }

  async getUserById(userId: string) {
    return this.User.findOne({ _id: userId }).exec();
  }

  async getUsers(limit = 25, page = 0) {
    return this.User.find()
      .limit(limit)
      .skip(limit * page)
      .exec();
  }

  async updateUserById(userId: string, userFields: PatchUserDto | PutUserDto) {
    const existingUser = await this.User.findOneAndUpdate(
      { _id: userId },
      { $set: userFields },
      { new: true }
    ).exec();

    return existingUser;
  }

  async removeUserById(userId: string) {
    return this.User.deleteOne({ _id: userId }).exec();
  }

  async getUserByEmailWithPassword(email: string) {
    return this.User.findOne({ email: email })
      .select('_id email permissionFlags +password')
      .exec();
  }
}

export default new UsersDao();
