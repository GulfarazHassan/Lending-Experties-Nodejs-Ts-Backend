import express from 'express';
import debug from 'debug';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import * as argon2 from 'argon2';
import usersService from '../../Users/services/users.service';
import CommunityMemberProfilesService from '../../communityMemberProfiles/services/communityMemberProfiles.service';
import { UserTypeEnum } from '../../common/enum/common.userType.enum';
import businessOwnerProfilesServiceService from '../../BusinessOwnerProfiles/services/businessOwnerProfilesService.service';
import nonProfitOrganisationProfilesService from '../../NonProfitOrganisationProfiles/services/nonProfitOrganisationProfiles.service';
import financialGuideProfilesService from '../../FinancialGuideProfiles/services/financialGuideProfiles.service';

const log: debug.IDebugger = debug('app:auth-controller');

// @ts-expect-error
const jwtSecret: string = process.env.JWT_SECRET;

class AuthController {
  async createJWT(req: express.Request, res: express.Response) {
    try {
      const refreshId = req.body.userId + jwtSecret;
      const salt = crypto.createSecretKey(crypto.randomBytes(16));
      const hash = crypto
        .createHmac('sha512', salt)
        .update(refreshId)
        .digest('base64');
      req.body.refreshKey = salt.export();
      const token = jwt.sign(req.body.user, jwtSecret);

      return res.status(201).json({ accessToken: token, user: req.body.user });
    } catch (err) {
      log('createJWT error: %O', err);
      return res.status(500).send();
    }
  }

  async signupUser(req: express.Request, res: express.Response) {
    let { email, password, user_type } = req.body;
    const isUserTypeValid = Object.values(UserTypeEnum)?.includes(user_type);
    if (!isUserTypeValid) {
      return res.status(400).json({
        error:
          "user_type must be in ['community_member', 'business_owners', 'non_profit_organisation, 'financial_guide'']",
      });
    }
    password = await argon2.hash(password);
    const user = await usersService.create({ email, password, user_type });
    const userJwt = {
      user_id: user._id || '',
      email: email,
      user_type: user.user_type,
    };
    const token = jwt.sign(userJwt, jwtSecret);
    if (user.user_type === 'community_member') {
      const community_member_profile =
        await CommunityMemberProfilesService.create(userJwt);
      await usersService.patchById(userJwt.user_id.toString(), {
        community_member_profile_id: community_member_profile._id.toString(),
      });
    }

    if (user.user_type === 'business_owners') {
      const business_owner_profile =
        await businessOwnerProfilesServiceService.create(userJwt);
      await usersService.patchById(userJwt.user_id.toString(), {
        business_owner_profile_id: business_owner_profile._id.toString(),
      });
    }

    if (user.user_type === 'non_profit_organisation') {
      const non_profit_organisation_profile =
        await nonProfitOrganisationProfilesService.create(userJwt);
      await usersService.patchById(userJwt.user_id.toString(), {
        non_profit_organisation_profile_id:
          non_profit_organisation_profile._id.toString(),
      });
    }

    if (user.user_type === 'financial_guide') {
      const financial_guide_profile =
        await financialGuideProfilesService.create(userJwt);
      await usersService.patchById(userJwt.user_id.toString(), {
        financial_guide_profile_id: financial_guide_profile._id.toString(),
      });
    }

    return res.status(201).json({ accessToken: token, user: userJwt });
  }
}

export default new AuthController();
