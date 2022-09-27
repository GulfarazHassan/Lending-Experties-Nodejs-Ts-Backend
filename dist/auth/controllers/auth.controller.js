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
// @ts-expect-error
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vQXV0aC9jb250cm9sbGVycy9hdXRoLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUEwQjtBQUMxQixnRUFBK0I7QUFDL0Isb0RBQTRCO0FBQzVCLCtDQUFpQztBQUNqQyx1RkFBOEQ7QUFDOUQsNklBQW9IO0FBQ3BILGlGQUFzRTtBQUN0RSxxSkFBNEg7QUFDNUgsK0pBQXNJO0FBQ3RJLDBJQUFpSDtBQUVqSCxNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMscUJBQXFCLENBQUMsQ0FBQztBQUUxRCxtQkFBbUI7QUFDbkIsTUFBTSxTQUFTLEdBQVcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7QUFFakQsTUFBTSxjQUFjO0lBQ1osU0FBUyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ3pELElBQUk7Z0JBQ0YsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO2dCQUM5QyxNQUFNLElBQUksR0FBRyxnQkFBTSxDQUFDLGVBQWUsQ0FBQyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM1RCxNQUFNLElBQUksR0FBRyxnQkFBTTtxQkFDaEIsVUFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7cUJBQzFCLE1BQU0sQ0FBQyxTQUFTLENBQUM7cUJBQ2pCLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDcEIsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNwQyxNQUFNLEtBQUssR0FBRyxzQkFBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FB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