import NonProfitOrganisationProfiles from '../daos/NonProfitOrganisationProfiles.dao';
import { CreateDto, UpdateDto } from '../dto/nonProfitOrganisationProfiles.dto';

class NonProfitOrganisationProfilesService {
  async create(resource: CreateDto) {
    return NonProfitOrganisationProfiles.addProfile(resource);
  }

  async deleteById(id: string) {
    return NonProfitOrganisationProfiles.removeProfileById(id);
  }

  async list(limit: number, page: number) {
    return NonProfitOrganisationProfiles.getProfiles(limit, page);
  }

  async patchById(id: string, resource: UpdateDto) {
    const response =
      await NonProfitOrganisationProfiles.updateCommunityMemberProfileById(
        id,
        resource
      );
    return response;
  }

  async readById(id: string) {
    return NonProfitOrganisationProfiles.getByProfileId(id);
  }
}

export default new NonProfitOrganisationProfilesService();
