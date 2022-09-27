import express from 'express';
import FinancialGuideProfilesService from '../services/financialGuideProfiles.service';
import debug from 'debug';

const log: debug.IDebugger = debug('app:users-controller');
class FinancialGuideProfilesController {
  constructor() {}

  async patch(req: express.Request, res: express.Response) {
    const { user_id } = res.locals.jwt;

    const updatedProfile = await FinancialGuideProfilesService.patchById(
      user_id,
      req.body
    );

    return res.status(200).json({
      message: 'Financial Guide Profile Updated',
      profile: updatedProfile,
    });
  }

  async getMyProfileFromToken(req: express.Request, res: express.Response) {
    const { user_id } = res.locals.jwt;

    const profile = await FinancialGuideProfilesService.readById(user_id);

    return res.status(200).json({
      message: 'Financial Guide Profile',
      profile: profile,
    });
  }
}

export default new FinancialGuideProfilesController();
