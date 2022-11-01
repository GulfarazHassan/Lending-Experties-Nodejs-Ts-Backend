import express from 'express';
import usersService from '../services/users.service';
import argon2 from 'argon2';
import debug from 'debug';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const log: debug.IDebugger = debug('app:users-controller');
class UsersController {
  async listUsers(req: express.Request, res: express.Response) {
    try {
      const users = await usersService.list(100, 0);
      return res.status(200).send(users);
    } catch (e) {
      return res.status(500).json({ success: false, message: 'Error occured' });
    }
  }

  async getUserById(req: express.Request, res: express.Response) {
    try {
      const { user_id } = res.locals.jwt;
      const user = await usersService.readById(user_id);
      return res.status(200).json({ data: user });
    } catch (e) {
      return res.status(500).json({ success: false, message: 'Error occured' });
    }
  }

  async createUser(req: express.Request, res: express.Response) {
    try {
      req.body.password = await argon2.hash(req.body.password);
      const userId = await usersService.create(req.body);
      return res.status(201).send({ id: userId });
    } catch (e) {
      return res.status(500).json({ success: false, message: 'Error occured' });
    }
  }

  async put(req: express.Request, res: express.Response) {
    try {
      req.body.password = await argon2.hash(req.body.password);
      log(await usersService.putById(req.body.id, req.body));
      return res.status(204).send();
    } catch (e) {
      return res.status(500).json({ success: false, message: 'Error occured' });
    }
  }

  async patchBusinessOwner(req: express.Request, res: express.Response) {
    try {
      const { user_id } = res.locals.jwt;
      if (req.body.password) {
        req.body.password = await argon2.hash(req.body.password);
      }
      const updatedProfile = await usersService.patchById(user_id, req.body);

      return res.status(200).json({
        message: 'Business Owner Profile Updated',
        profile: updatedProfile,
      });
    } catch (e) {
      return res.status(500).json({ success: false, message: 'Error occured' });
    }
  }

  async patchCommunityMember(req: express.Request, res: express.Response) {
    try {
      const { user_id } = res.locals.jwt;
      const { income_range_min, income_range_max, household_size } = req.body;
      if (req.body.password) {
        req.body.password = await argon2.hash(req.body.password);
      }

      if (income_range_max <= 35000) {
        req.body.cra_qualified_badge = 'CRA Qualified';
      } else if (
        income_range_min > 35000 &&
        income_range_max <= 50000 &&
        household_size >= 2
      ) {
        req.body.cra_qualified_badge = 'CRA Qualified';
      } else if (
        income_range_min > 50000 &&
        income_range_max <= 80000 &&
        household_size >= 3
      ) {
        req.body.cra_qualified_badge = 'CRA Qualified';
      } else if (
        income_range_min > 80000 &&
        income_range_max <= 100000 &&
        household_size >= 4
      ) {
        req.body.cra_qualified_badge = 'CRA Qualified';
      } else {
        req.body.cra_qualified_badge = '';
      }

      const updatedProfile = await usersService.patchCommunityMemberById(
        user_id,
        req.body
      );

      return res.status(200).json({
        message: 'Community Member Profile Updated',
        profile: updatedProfile,
      });
    } catch (e) {
      console.log('Errro :: ', e);
      return res.status(500).json({ success: false, message: 'Error occured' });
    }
  }

  async patchNonProfitOrganization(
    req: express.Request,
    res: express.Response
  ) {
    try {
      const { user_id } = res.locals.jwt;
      if (req.body.password) {
        req.body.password = await argon2.hash(req.body.password);
      }
      const updatedProfile = await usersService.patchNonProfitOrganizationById(
        user_id,
        req.body
      );

      return res.status(200).json({
        message: 'Non Profit Organization Profile Updated',
        profile: updatedProfile,
      });
    } catch (e) {
      return res.status(500).json({ success: false, message: 'Error occured' });
    }
  }

  async patchFinancialGuide(req: express.Request, res: express.Response) {
    try {
      const { user_id } = res.locals.jwt;
      if (req.body.password) {
        req.body.password = await argon2.hash(req.body.password);
      }
      const updatedProfile = await usersService.patchFinancialGuideById(
        user_id,
        req.body
      );

      return res.status(200).json({
        message: 'Financial guide Profile Updated',
        profile: updatedProfile,
      });
    } catch (e) {
      return res.status(500).json({ success: false, message: 'Error occured' });
    }
  }

  async removeUser(req: express.Request, res: express.Response) {
    try {
      log(await usersService.deleteById(req.body.id));
      return res.status(204).send();
    } catch (e) {
      return res.status(500).json({ success: false, message: 'Error occured' });
    }
  }

  async sendOtpCode(req: express.Request, res: express.Response) {
    try {
      const number = Math.floor(Math.random() * 899999 + 100000);
      const { phone_number } = req.body;
      const { user_id } = res.locals.jwt;
      const user = await usersService.readById(user_id);
      if (user) {
        user.otp_code = number;
        user.phone_number = phone_number;
        await user.save();
        client.messages
          .create({
            body: `Your otp code is ${number}`,
            from: '+15618162499',
            to: phone_number,
          })
          .then((message: any) =>
            res.status(200).json({ message: `OTP sent to ${phone_number}` })
          )
          .catch((e: any) => {
            console.log('eeror :: ', e);
            res
              .status(400)
              .json({ message: `Please register your number in twilio first` });
          });
      } else {
        res.status(400).json({ message: `Invalid token` });
      }
    } catch (e) {
      return res.status(500).json({ success: false, message: 'Error occured' });
    }
  }

  async verifyOtp(req: express.Request, res: express.Response) {
    try {
      const { otp_code } = req.body;
      const { user_id } = res.locals.jwt;
      const user = await usersService.readById(user_id);
      if (user) {
        if (user.otp_code && user.otp_code == otp_code) {
          user.otp_code = null;
          user.is_phone_number_confirmed = true;
          await user.save();
          res.status(200).json({ message: `Phone number varified` });
        } else {
          res.status(400).json({ message: `Wrong verification code` });
        }
      } else {
        return res.status(400).json({ message: `Invalid token` });
      }
    } catch (e) {
      return res.status(500).json({ success: false, message: 'Error occured' });
    }
  }
}

export default new UsersController();
