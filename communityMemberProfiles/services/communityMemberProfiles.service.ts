import CommunityMemberProfileDao from '../daos/communityMemberProfiles.dao';
import { CreateDto, UpdateDto } from '../dto/communityMemberProfiles.dto';

class CommunityMemberProfilesService {
  async create(resource: CreateDto) {
    return CommunityMemberProfileDao.addProfile(resource);
  }

  async deleteById(id: string) {
    return CommunityMemberProfileDao.removeProfileById(id);
  }

  async list(limit: number, page: number) {
    return CommunityMemberProfileDao.getProfiles(limit, page);
  }

  async patchById(id: string, resource: UpdateDto) {
    const response =
      await CommunityMemberProfileDao.updateCommunityMemberProfileById(
        id,
        resource
      );
    return response;
  }

  async readById(id: string) {
    return CommunityMemberProfileDao.getByProfileId(id);
  }
}

export default new CommunityMemberProfilesService();
