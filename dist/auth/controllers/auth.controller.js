"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
const log = debug_1.default('app:auth-controller');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2F1dGgvY29udHJvbGxlcnMvYXV0aC5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUEwQjtBQUMxQixnRUFBK0I7QUFDL0Isb0RBQTRCO0FBQzVCLCtDQUFpQztBQUNqQyx1RkFBOEQ7QUFDOUQsNklBQW9IO0FBQ3BILGlGQUFzRTtBQUN0RSxxSkFBNEg7QUFDNUgsK0pBQXNJO0FBQ3RJLDBJQUFpSDtBQUVqSCxNQUFNLEdBQUcsR0FBb0IsZUFBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFFMUQsbUJBQW1CO0FBQ25CLE1BQU0sU0FBUyxHQUFXLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO0FBRWpELE1BQU0sY0FBYztJQUNaLFNBQVMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUN6RCxJQUFJO2dCQUNGLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztnQkFDOUMsTUFBTSxJQUFJLEdBQUcsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDNUQsTUFBTSxJQUFJLEdBQUcsZ0JBQU07cUJBQ2hCLFVBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDO3FCQUMxQixNQUFNLENBQUMsU0FBUyxDQUFDO3FCQUNqQixNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3BCLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDcEMsTUFBTSxLQUFLLEdBQUcsc0JBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JB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