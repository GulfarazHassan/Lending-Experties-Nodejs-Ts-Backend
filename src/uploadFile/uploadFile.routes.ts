import express from 'express';
import { CommonRoutesConfig } from '../common/common.routes.config';
import uploadFileController from './controllers/uploadFile.controller';

export class UploadFileRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'UploadFileRoutes');
  }

  configureRoutes(): express.Application {
    this.app.post(`/common/upload_file`, uploadFileController.uploadFile);

    return this.app;
  }
}
