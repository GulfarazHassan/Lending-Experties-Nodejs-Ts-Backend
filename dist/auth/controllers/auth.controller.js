"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const debug_1 = __importDefault(require("debug"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const crypto_1 = __importDefault(require("crypto"));
const argon2 = __importStar(require("argon2"));
const users_service_1 = __importDefault(require("../../Users/services/users.service"));
const communityMemberProfiles_service_1 = __importDefault(require("../../communityMemberProfiles/services/communityMemberProfiles.service"));
const common_userType_enum_1 = require("../../common/enum/common.userType.enum");
const businessOwnerProfilesService_service_1 = __importDefault(require("../../BusinessOwnerProfiles/services/businessOwnerProfilesService.service"));
const nonProfitOrganisationProfiles_service_1 = __importDefault(require("../../NonProfitOrganisationProfiles/services/nonProfitOrganisationProfiles.service"));
const financialGuideProfiles_service_1 = __importDefault(require("../../FinancialGuideProfiles/services/financialGuideProfiles.service"));
const log = (0, debug_1.default)('app:auth-controller');
const jwtSecret = process.env.JWT_SECRET;
class AuthController {
    createJWT(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const refreshId = req.body.userId + jwtSecret;
                const salt = crypto_1.default.createSecretKey(crypto_1.default.randomBytes(16));
                const hash = crypto_1.default
                    .createHmac('sha512', salt)
                    .update(refreshId)
                    .digest('base64');
                req.body.refreshKey = salt.export();
                const token = jsonwebtoken_1.default.sign(req.body.user, jwtSecret);
                return res.status(201).json({ accessToken: token, user: req.body.user });
            }
            catch (err) {
                log('createJWT error: %O', err);
                return res.status(500).send();
            }
        });
    }
    signupUser(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let { email, password, user_type } = req.body;
            const isUserTypeValid = (_a = Object.values(common_userType_enum_1.UserTypeEnum)) === null || _a === void 0 ? void 0 : _a.includes(user_type);
            if (!isUserTypeValid) {
                return res.status(400).json({
                    error: "user_type must be in ['community_member', 'business_owners', 'non_profit_organisation, 'financial_guide'']",
                });
            }
            password = yield argon2.hash(password);
            const user = yield users_service_1.default.create({ email, password, user_type });
            const userJwt = {
                user_id: user._id || '',
                email: email,
                user_type: user.user_type,
            };
            const token = jsonwebtoken_1.default.sign(userJwt, jwtSecret);
            if (user.user_type === 'community_member') {
                const community_member_profile = yield communityMemberProfiles_service_1.default.create(userJwt);
                yield users_service_1.default.patchById(userJwt.user_id.toString(), {
                    community_member_profile_id: community_member_profile._id.toString(),
                });
            }
            if (user.user_type === 'business_owners') {
                const business_owner_profile = yield businessOwnerProfilesService_service_1.default.create(userJwt);
                yield users_service_1.default.patchById(userJwt.user_id.toString(), {
                    business_owner_profile_id: business_owner_profile._id.toString(),
                });
            }
            if (user.user_type === 'non_profit_organisation') {
                const non_profit_organisation_profile = yield nonProfitOrganisationProfiles_service_1.default.create(userJwt);
                yield users_service_1.default.patchById(userJwt.user_id.toString(), {
                    non_profit_organisation_profile_id: non_profit_organisation_profile._id.toString(),
                });
            }
            if (user.user_type === 'financial_guide') {
                const financial_guide_profile = yield financialGuideProfiles_service_1.default.create(userJwt);
                yield users_service_1.default.patchById(userJwt.user_id.toString(), {
                    financial_guide_profile_id: financial_guide_profile._id.toString(),
                });
            }
            return res.status(201).json({ accessToken: token, user: userJwt });
        });
    }
}
exports.default = new AuthController();
//# sourceMappingURL=auth.controller.js.map