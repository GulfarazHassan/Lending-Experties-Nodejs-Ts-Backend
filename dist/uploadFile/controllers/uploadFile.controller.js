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
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const bucketName = 'lending-experties';
const region = 'us-east-1';
const accessKeyId = process.env.AWS_ACCESS_ID;
const secretAccessKey = process.env.AWS_SECRET_ID;
const s3 = new aws_sdk_1.default.S3({
    region,
    accessKeyId,
    secretAccessKey,
});
class UploadFileController {
    uploadFile(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const file = (_a = req.files) === null || _a === void 0 ? void 0 : _a.file;
                if (file) {
                    const number = Math.floor(Math.random() * 899999 + 100000);
                    const uploadParams = {
                        Bucket: bucketName,
                        Key: `${number}_${file.name}`,
                        Body: Buffer.from(file.data),
                        ACL: 'public-read',
                    };
                    s3.upload(uploadParams, (error, data) => {
                        if (error) {
                            console.log('Files upload error:: ', error);
                            return res.status(500).json({ message: `error`, success: false });
                        }
                        else {
                            console.log('Files uploaded:: ', data);
                            return res
                                .status(200)
                                .json({
                                message: `File Uploaddes`,
                                data: { file_location: data.Location },
                                success: true,
                            });
                        }
                    });
                }
                else {
                    res.status(500).json({ message: 'Plz attach file', success: false });
                }
            }
            catch (err) {
                return res
                    .status(500)
                    .json({ message: 'Error uploading file', success: false });
            }
        });
    }
}
exports.default = new UploadFileController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkRmlsZS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3VwbG9hZEZpbGUvY29udHJvbGxlcnMvdXBsb2FkRmlsZS5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esc0RBQTBCO0FBRTFCLE1BQU0sVUFBVSxHQUFHLG1CQUFtQixDQUFDO0FBQ3ZDLE1BQU0sTUFBTSxHQUFHLFdBQVcsQ0FBQztBQUMzQixNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztBQUM5QyxNQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztBQUVsRCxNQUFNLEVBQUUsR0FBRyxJQUFJLGlCQUFHLENBQUMsRUFBRSxDQUFDO0lBQ3BCLE1BQU07SUFDTixXQUFXO0lBQ1gsZUFBZTtDQUNoQixDQUFDLENBQUM7QUFFSCxNQUFNLG9CQUFvQjtJQUNsQixVQUFVLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7O1lBQzFELElBQUk7Z0JBQ0YsTUFBTSxJQUFJLEdBQVEsTUFBQSxHQUFHLENBQUMsS0FBSywwQ0FBRSxJQUFJLENBQUM7Z0JBQ2xDLElBQUksSUFBSSxFQUFFO29CQUNSLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQztvQkFDM0QsTUFBTSxZQUFZLEdBQUc7d0JBQ25CLE1BQU0sRUFBRSxVQUFVO3dCQUNsQixHQUFHLEVBQUUsR0FBRyxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTt3QkFDN0IsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzt3QkFDNUIsR0FBRyxFQUFFLGFBQWE7cUJBQ25CLENBQUM7b0JBQ0YsRUFBRSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFVLEVBQUUsSUFBUyxFQUFFLEVBQUU7d0JBQ2hELElBQUksS0FBSyxFQUFFOzRCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLENBQUM7NEJBQzVDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO3lCQUNuRTs2QkFBTTs0QkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxDQUFDOzRCQUN2QyxPQUFPLEdBQUc7aUNBQ1AsTUFBTSxDQUFDLEdBQUcsQ0FBQztpQ0FDWCxJQUFJLENBQUM7Z0NBQ0osT0FBTyxFQUFFLGdCQUFnQjtnQ0FDekIsSUFBSSxFQUFFLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0NBQ3RDLE9BQU8sRUFBRSxJQUFJOzZCQUNkLENBQUMsQ0FBQzt5QkFDTjtvQkFDSCxDQUFDLENBQUMsQ0FBQztpQkFDSjtxQkFBTTtvQkFDTCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztpQkFDdEU7YUFDRjtZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNaLE9BQU8sR0FBRztxQkFDUCxNQUFNLENBQUMsR0FBRyxDQUFDO3FCQUNYLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQzthQUM5RDs7S0FDRjtDQUNGO0FBRUQsa0JBQWUsSUFBSSxvQkFBb0IsRUFBRSxDQUFDIn0=