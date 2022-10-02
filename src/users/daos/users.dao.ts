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
    household_size: { type: String },
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

  User =
    mongooseService.getMongoose().models.Users ||
    mongooseService.getMongoose().model('Users', this.userSchema);
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
