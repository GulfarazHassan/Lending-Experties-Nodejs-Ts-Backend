import FinancialGuideProfiles from '../daos/financialGuideProfiles.dao';
import { CreateDto, UpdateDto } from '../dto/financialGuideProfiles.dto';

class FinancialGuideProfilesService {
  async create(resource: CreateDto) {
    return FinancialGuideProfiles.addProfile(resource);
  }

  async deleteById(id: string) {
    return FinancialGuideProfiles.removeProfileById(id);
  }

  async list(limit: number, page: number) {
    return FinancialGuideProfiles.getProfiles(limit, page);
  }

  async patchById(id: string, resource: UpdateDto) {
    const response =
      await FinancialGuideProfiles.updateCommunityMemberProfileById(
        id,
        resource
      );
    return response;
  }

  async readById(id: string) {
    return FinancialGuideProfiles.getByProfileId(id);
  }
}

export default new FinancialGuideProfilesService();
