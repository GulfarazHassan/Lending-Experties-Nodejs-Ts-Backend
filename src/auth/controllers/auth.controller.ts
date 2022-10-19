import express from 'express';
import debug from 'debug';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import * as argon2 from 'argon2';
import usersService from '../../users/services/users.service';
import { UserTypeEnum } from '../../common/enum/common.userType.enum';

const log: debug.IDebugger = debug('app:auth-controller');

// @ts-expect-error
const jwtSecret: string = process.env.JWT_SECRET;

class AuthController {
  async createJWT(req: express.Request, res: express.Response) {
    try {
      console.log('req.body.userId :: ', req.body.user.user_id);
      const refreshId = req.body.user.user_id + jwtSecret;
      const salt = crypto.createSecretKey(crypto.randomBytes(16));
      const hash = crypto
        .createHmac('sha512', salt)
        .update(refreshId)
        .digest('base64');
      req.body.refreshKey = salt.export();
      const token = jwt.sign(req.body.user, jwtSecret);
      console.log('req.body.user :: ', req.body.user);
      return res.status(201).json({ accessToken: token, user: req.body.user });
    } catch (err) {
      return res.status(500).json({ message: 'Error occured', success: false });
    }
  }

  async signupUser(req: express.Request, res: express.Response) {
    try {
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

      return res.status(201).json({ accessToken: token, user: userJwt });
    } catch (e) {
      return res.status(500).json({ success: false, message: 'Error occured' });
    }
  }

  async resetPassword(req: express.Request, res: express.Response) {
    try {
      const { current_password, new_password } = req.body;
      const { email } = res.locals.jwt;

      const user: any = await usersService.getUserByEmailWithPassword(email);
      if (await argon2.verify(user.password, current_password)) {
        user.password = await argon2.hash(new_password);
        await user.save();
        return res.status(400).json({ message: 'Password Updated' });
      } else {
        return res.status(400).json({ message: 'Incorrect current password' });
      }
    } catch (e) {
      return res.status(500).json({ success: false, message: 'Error occured' });
    }
  }
}

export default new AuthController();
