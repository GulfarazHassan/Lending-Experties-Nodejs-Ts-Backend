import express from 'express';
import NonProfitOrganisationProfilesService from '../services/nonProfitOrganisationProfiles.service';
import debug from 'debug';

const log: debug.IDebugger = debug('app:users-controller');
class NonProfitOrganisationProfilesController {
  constructor() {}

  async patch(req: express.Request, res: express.Response) {
    const { user_id } = res.locals.jwt;

    const updatedProfile = await NonProfitOrganisationProfilesService.patchById(
      user_id,
      req.body
    );

    return res.status(200).json({
      message: 'Non Profit Organisation Profile Updated',
      profile: updatedProfile,
    });
  }

  async getMyProfileFromToken(req: express.Request, res: express.Response) {
    const { user_id } = res.locals.jwt;

    const profile = await NonProfitOrganisationProfilesService.readById(
      user_id
    );

    return res.status(200).json({
      message: 'Non Profit Organisation Profile',
      profile: profile,
    });
  }
}

export default new NonProfitOrganisationProfilesController();
