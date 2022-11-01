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
                const { income_range_min, income_range_max, household_size } = req.body;
                if (req.body.password) {
                    req.body.password = yield argon2_1.default.hash(req.body.password);
                }
                if (income_range_max <= 35000) {
                    req.body.cra_qualified_badge = 'CRA Qualified';
                }
                else if (income_range_min > 35000 &&
                    income_range_max <= 50000 &&
                    household_size >= 2) {
                    req.body.cra_qualified_badge = 'CRA Qualified';
                }
                else if (income_range_min > 50000 &&
                    income_range_max <= 80000 &&
                    household_size >= 3) {
                    req.body.cra_qualified_badge = 'CRA Qualified';
                }
                else if (income_range_min > 80000 &&
                    income_range_max <= 100000 &&
                    household_size >= 4) {
                    req.body.cra_qualified_badge = 'CRA Qualified';
                }
                else {
                    req.body.cra_qualified_badge = '';
                }
                const updatedProfile = yield users_service_1.default.patchCommunityMemberById(user_id, req.body);
                return res.status(200).json({
                    message: 'Community Member Profile Updated',
                    profile: updatedProfile,
                });
            }
            catch (e) {
                console.log('Errro :: ', e);
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