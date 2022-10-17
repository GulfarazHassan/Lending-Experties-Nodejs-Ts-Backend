"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_service_1 = __importDefault(require("../services/users.service"));
const argon2_1 = __importDefault(require("argon2"));
const debug_1 = __importDefault(require("debug"));
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const log = (0, debug_1.default)('app:users-controller');
class UsersController {
    listUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield users_service_1.default.list(100, 0);
                return res.status(200).send(users);
            }
            catch (e) {
                return res.status(500).json({ success: false, message: 'Error occured' });
            }
        });
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { user_id } = res.locals.jwt;
                const user = yield users_service_1.default.readById(user_id);
                return res.status(200).json({ data: user });
            }
            catch (e) {
                return res.status(500).json({ success: false, message: 'Error occured' });
            }
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                req.body.password = yield argon2_1.default.hash(req.body.password);
                const userId = yield users_service_1.default.create(req.body);
                return res.status(201).send({ id: userId });
            }
            catch (e) {
                return res.status(500).json({ success: false, message: 'Error occured' });
            }
        });
    }
    put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                req.body.password = yield argon2_1.default.hash(req.body.password);
                log(yield users_service_1.default.putById(req.body.id, req.body));
                return res.status(204).send();
            }
            catch (e) {
                return res.status(500).json({ success: false, message: 'Error occured' });
            }
        });
    }
    patchBusinessOwner(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { user_id } = res.locals.jwt;
                if (req.body.password) {
                    req.body.password = yield argon2_1.default.hash(req.body.password);
                }
                const updatedProfile = yield users_service_1.default.patchById(user_id, req.body);
                return res.status(200).json({
                    message: 'Business Owner Profile Updated',
                    profile: updatedProfile,
                });
            }
            catch (e) {
                return res.status(500).json({ success: false, message: 'Error occured' });
            }
        });
    }
    patchCommunityMember(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { user_id } = res.locals.jwt;
                if (req.body.password) {
                    req.body.password = yield argon2_1.default.hash(req.body.password);
                }
                const updatedProfile = yield users_service_1.default.patchCommunityMemberById(user_id, req.body);
                return res.status(200).json({
                    message: 'Community Member Profile Updated',
                    profile: updatedProfile,
                });
            }
            catch (e) {
                return res.status(500).json({ success: false, message: 'Error occured' });
            }
        });
    }
    patchNonProfitOrganization(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { user_id } = res.locals.jwt;
                if (req.body.password) {
                    req.body.password = yield argon2_1.default.hash(req.body.password);
                }
                const updatedProfile = yield users_service_1.default.patchNonProfitOrganizationById(user_id, req.body);
                return res.status(200).json({
                    message: 'Non Profit Organization Profile Updated',
                    profile: updatedProfile,
                });
            }
            catch (e) {
                return res.status(500).json({ success: false, message: 'Error occured' });
            }
        });
    }
    patchFinancialGuide(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { user_id } = res.locals.jwt;
                if (req.body.password) {
                    req.body.password = yield argon2_1.default.hash(req.body.password);
                }
                const updatedProfile = yield users_service_1.default.patchFinancialGuideById(user_id, req.body);
                return res.status(200).json({
                    message: 'Financial guide Profile Updated',
                    profile: updatedProfile,
                });
            }
            catch (e) {
                return res.status(500).json({ success: false, message: 'Error occured' });
            }
        });
    }
    removeUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                log(yield users_service_1.default.deleteById(req.body.id));
                return res.status(204).send();
            }
            catch (e) {
                return res.status(500).json({ success: false, message: 'Error occured' });
            }
        });
    }
    sendOtpCode(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const number = Math.floor(Math.random() * 899999 + 100000);
                const { phone_number } = req.body;
                const { user_id } = res.locals.jwt;
                const user = yield users_service_1.default.readById(user_id);
                if (user) {
                    user.otp_code = number;
                    user.phone_number = phone_number;
                    yield user.save();
                    client.messages
                        .create({
                        body: `Your otp code is ${number}`,
                        from: '+15618162499',
                        to: phone_number,
                    })
                        .then((message) => res.status(200).json({ message: `OTP sent to ${phone_number}` }))
                        .catch((e) => {
                        console.log('eeror :: ', e);
                        res
                            .status(400)
                            .json({ message: `Please register your number in twilio first` });
                    });
                }
                else {
                    res.status(400).json({ message: `Invalid token` });
                }
            }
            catch (e) {
                return res.status(500).json({ success: false, message: 'Error occured' });
            }
        });
    }
    verifyOtp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { otp_code } = req.body;
                const { user_id } = res.locals.jwt;
                const user = yield users_service_1.default.readById(user_id);
                if (user) {
                    if (user.otp_code && user.otp_code == otp_code) {
                        user.otp_code = null;
                        user.is_phone_number_confirmed = true;
                        yield user.save();
                        res.status(200).json({ message: `Phone number varified` });
                    }
                    else {
                        res.status(400).json({ message: `Wrong verification code` });
                    }
                }
                else {
                    return res.status(400).json({ message: `Invalid token` });
                }
            }
            catch (e) {
                return res.status(500).json({ success: false, message: 'Error occured' });
            }
        });
    }
}
exports.default = new UsersController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91c2Vycy9jb250cm9sbGVycy91c2Vycy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsOEVBQXFEO0FBQ3JELG9EQUE0QjtBQUM1QixrREFBMEI7QUFFMUIsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztBQUNsRCxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0FBQ2hELE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFFeEQsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDM0QsTUFBTSxlQUFlO0lBQ2IsU0FBUyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ3pELElBQUk7Z0JBQ0YsTUFBTSxLQUFLLEdBQUcsTUFBTSx1QkFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDcEM7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQzthQUMzRTtRQUNILENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUMzRCxJQUFJO2dCQUNGLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFD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