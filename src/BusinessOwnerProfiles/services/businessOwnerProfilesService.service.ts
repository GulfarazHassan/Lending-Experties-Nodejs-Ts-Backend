import BusinessOwnerProfiles from '../daos/businessOwnerProfiles.dao';
import { CreateDto, UpdateDto } from '../dto/businessOwnerProfiles.dto';

class BusinessOwnerProfilesService {
  async create(resource: CreateDto) {
    return BusinessOwnerProfiles.addProfile(resource);
  }

  async deleteById(id: string) {
    return BusinessOwnerProfiles.removeProfileById(id);
  }

  async list(limit: number, page: number) {
    return BusinessOwnerProfiles.getProfiles(limit, page);
  }

  async patchById(id: string, resource: UpdateDto) {
    const response =
      await BusinessOwnerProfiles.updateCommunityMemberProfileById(
        id,
        resource
      );
    return response;
  }

  async readById(id: string) {
    return BusinessOwnerProfiles.getByProfileId(id);
  }
}

export default new BusinessOwnerProfilesService();
