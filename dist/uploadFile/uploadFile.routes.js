"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadFileRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const uploadFile_controller_1 = __importDefault(require("./controllers/uploadFile.controller"));
class UploadFileRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UploadFileRoutes');
    }
    configureRoutes() {
        this.app.post(`/common/upload_file`, uploadFile_controller_1.default.uploadFile);
        return this.app;
    }
}
exports.UploadFileRoutes = UploadFileRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkRmlsZS5yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXBsb2FkRmlsZS91cGxvYWRGaWxlLnJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSx5RUFBb0U7QUFDcEUsZ0dBQXVFO0FBRXZFLE1BQWEsZ0JBQWlCLFNBQVEseUNBQWtCO0lBQ3RELFlBQVksR0FBd0I7UUFDbEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsK0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFdEUsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7Q0FDRjtBQVZELDRDQVVDIn0=