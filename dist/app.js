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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const dotenvResult = dotenv_1.default.config();
if (dotenvResult.error) {
    throw dotenvResult.error;
}
const express_1 = __importDefault(require("express"));
const http = __importStar(require("http"));
const winston = __importStar(require("winston"));
const expressWinston = __importStar(require("express-winston"));
const cors_1 = __importDefault(require("cors"));
const users_routes_config_1 = require("./users/users.routes.config");
const auth_routes_config_1 = require("./auth/auth.routes.config");
const posts_routes_config_1 = require("./posts/posts.routes.config");
const meeting_routes_config_1 = require("./meeting/meeting.routes.config");
const uploadFile_routes_1 = require("./uploadFile/uploadFile.routes");
const meeting_routes_config_2 = require("./meetingResponses/meeting.routes.config");
const debug_1 = __importDefault(require("debug"));
const app = (0, express_1.default)();
app.use(require('express-fileupload')());
const server = http.createServer(app);
const port = process.env.PORT;
const routes = [];
const debugLog = (0, debug_1.default)('app');
// here we are adding middleware to parse all incoming requests as JSON
app.use(express_1.default.json());
// here we are adding middleware to allow cross-origin requests
app.use((0, cors_1.default)());
// here we are preparing the expressWinston logging middleware configuration,
// which will automatically log all HTTP requests handled by Express.js
const loggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.json(), winston.format.prettyPrint(), winston.format.colorize({ all: true })),
};
// if (!process.env.DEBUG) {
//   loggerOptions.meta = false; // when not debugging, log requests as one-liners
// }
loggerOptions.meta = false;
// initialize the logger with the above configuration
app.use(expressWinston.logger(loggerOptions));
// here we are adding the UserRoutes to our array,
// after sending the Express.js application object to have the routes added to our app!
routes.push(new users_routes_config_1.UsersRoutes(app));
routes.push(new auth_routes_config_1.AuthRoutes(app));
routes.push(new uploadFile_routes_1.UploadFileRoutes(app));
routes.push(new posts_routes_config_1.PostRoutes(app));
routes.push(new meeting_routes_config_1.MeetingRequestRoutes(app));
routes.push(new meeting_routes_config_2.MeetingRequestResponseRoutes(app));
// this is a simple route to make sure everything is working properly
const runningMessage = `Server running at http://localhost:${port}`;
app.get('/', (req, res) => {
    res.status(200).send(runningMessage);
});
// const io = new Server(server, {
//   cors: {
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST'],
//   },
// });
// io.on('connection', (socket) => {
//   console.log(`User Connected: ${socket.id}`);
//   socket.on('join_room', (data) => {
//     socket.join(data);
//     console.log(`User with ID: ${socket.id} joined room: ${data}`);
//   });
//   socket.on('send_message', (data) => {
//     socket.to(data.room).emit('receive_message', data);
//   });
//   socket.on('disconnect', () => {
//     console.log('User Disconnected', socket.id);
//   });
// });
server.listen(port, () => {
    routes.forEach((route) => {
        debugLog(`Routes configured for ${route.getName()}`);
    });
    // our only exception to avoiding console.log(), because we
    // always want to know when the server is done starting up
    console.log(runningMessage);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQTRCO0FBQzVCLE1BQU0sWUFBWSxHQUFHLGdCQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDckMsSUFBSSxZQUFZLENBQUMsS0FBSyxFQUFFO0lBQ3RCLE1BQU0sWUFBWSxDQUFDLEtBQUssQ0FBQztDQUMxQjtBQUNELHNEQUE4QjtBQUM5QiwyQ0FBNkI7QUFFN0IsaURBQW1DO0FBQ25DLGdFQUFrRDtBQUNsRCxnREFBd0I7QUFHeEIscUVBQTBEO0FBQzFELGtFQUF1RDtBQUN2RCxxRUFBeUQ7QUFDekQsMkVBQXVFO0FBQ3ZFLHNFQUFrRTtBQUNsRSxvRkFBd0Y7QUFDeEYsa0RBQTBCO0FBRTFCLE1BQU0sR0FBRyxHQUF3QixJQUFBLGlCQUFPLEdBQUUsQ0FBQztBQUMzQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN6QyxNQUFNLE1BQU0sR0FBZ0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuRCxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztBQUM5QixNQUFNLE1BQU0sR0FBOEIsRUFBRSxDQUFDO0FBQzdDLE1BQU0sUUFBUSxHQUFvQixJQUFBLGVBQUssRUFBQyxLQUFLLENBQUMsQ0FBQztBQUUvQyx1RUFBdUU7QUFDdkUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFFeEIsK0RBQStEO0FBQy9ELEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBQSxjQUFJLEdBQUUsQ0FBQyxDQUFDO0FBRWhCLDZFQUE2RTtBQUM3RSx1RUFBdUU7QUFDdkUsTUFBTSxhQUFhLEdBQWlDO0lBQ2xELFVBQVUsRUFBRSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM5QyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQ3JCLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQ3ZDO0NBQ0YsQ0FBQztBQUVGLDRCQUE0QjtBQUM1QixrRkFBa0Y7QUFDbEYsSUFBSTtBQUNKLGFBQWEsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0FBQzNCLHFEQUFxRDtBQUNyRCxHQUFHLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztBQUU5QyxrREFBa0Q7QUFDbEQsdUZBQXVGO0FBQ3ZGLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxpQ0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLCtCQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksb0NBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN2QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksZ0NBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSw0Q0FBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxvREFBNEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBRW5ELHFFQUFxRTtBQUNyRSxNQUFNLGNBQWMsR0FBRyxzQ0FBc0MsSUFBSSxFQUFFLENBQUM7QUFDcEUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtJQUMzRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN2QyxDQUFDLENBQUMsQ0FBQztBQUVILGtDQUFrQztBQUNsQyxZQUFZO0FBQ1osdUNBQXVDO0FBQ3ZDLGdDQUFnQztBQUNoQyxPQUFPO0FBQ1AsTUFBTTtBQUVOLG9DQUFvQztBQUNwQyxpREFBaUQ7QUFFakQsdUNBQXVDO0FBQ3ZDLHlCQUF5QjtBQUN6QixzRUFBc0U7QUFDdEUsUUFBUTtBQUVSLDBDQUEwQztBQUMxQywwREFBMEQ7QUFDMUQsUUFBUTtBQUVSLG9DQUFvQztBQUNwQyxtREFBbUQ7QUFDbkQsUUFBUTtBQUNSLE1BQU07QUFFTixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDdkIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQXlCLEVBQUUsRUFBRTtRQUMzQyxRQUFRLENBQUMseUJBQXlCLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQyxDQUFDLENBQUM7SUFDSCwyREFBMkQ7SUFDM0QsMERBQTBEO0lBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDOUIsQ0FBQyxDQUFDLENBQUMifQ==