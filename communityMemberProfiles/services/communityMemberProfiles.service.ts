import CommunityMemberProfileDao from '../daos/communityMemberProfiles.dao';
import { CreateDto, UpdateDto } from '../dto/communityMemberProfiles.dto';

class CommunityMemberProfilesService {
  async create(resource: CreateDto) {
    return CommunityMemberProfileDao.addCommunityMemberProfile(resource);
  }

  //   async deleteById(id: string) {
  //     return UsersDao.removeUserById(id);
  //   }

  //   async list(limit: number, page: number) {
  //     return UsersDao.getUsers(limit, page);
  //   }

  async patchById(id: string, resource: UpdateDto) {
    const response =
      await CommunityMemberProfileDao.updateCommunityMemberProfileById(
        id,
        resource
      );
    return response;
  }

  //   async readById(id: string) {
  //     return UsersDao.getUserById(id);
  //   }
}

export default new CommunityMemberProfilesService();
