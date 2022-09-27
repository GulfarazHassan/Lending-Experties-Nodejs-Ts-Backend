import express from 'express';
import BusinessOwnerProfilesServiceService from '../services/businessOwnerProfilesService.service';
import debug from 'debug';

const log: debug.IDebugger = debug('app:users-controller');
class BusinessOwnerProfilesController {
  constructor() {}

  async patch(req: express.Request, res: express.Response) {
    const { user_id } = res.locals.jwt;

    const updatedProfile = await BusinessOwnerProfilesServiceService.patchById(
      user_id,
      req.body
    );

    return res.status(200).json({
      message: 'Business Owner Profile Updated',
      profile: updatedProfile,
    });
  }

  async getMyProfileFromToken(req: express.Request, res: express.Response) {
    const { user_id } = res.locals.jwt;

    const profile = await BusinessOwnerProfilesServiceService.readById(user_id);

    return res.status(200).json({
      message: 'Business Owner Profile',
      profile: profile,
    });
  }
}

export default new BusinessOwnerProfilesController();
