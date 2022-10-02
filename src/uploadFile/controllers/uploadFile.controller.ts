import express from 'express';
import AWS from 'aws-sdk';

const bucketName = 'lending-experties';
const region = 'us-east-1';
const accessKeyId = process.env.AWS_ACCESS_ID;
const secretAccessKey = process.env.AWS_SECRET_ID;

const s3 = new AWS.S3({
  region,
  accessKeyId,
  secretAccessKey,
});

class UploadFileController {
  async uploadFile(req: express.Request, res: express.Response) {
    try {
      const file: any = req.files?.file;
      if (file) {
        const number = Math.floor(Math.random() * 899999 + 100000);
        const uploadParams = {
          Bucket: bucketName,
          Key: `${number}_${file.name}`,
          Body: Buffer.from(file.data),
          ACL: 'public-read',
        };
        s3.upload(uploadParams, (error: any, data: any) => {
          if (error) {
            console.log('Files upload error:: ', error);
            return res.status(500).json({ message: `error`, success: false });
          } else {
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
      } else {
        res.status(500).json({ message: 'Plz attach file', success: false });
      }
    } catch (err) {
      return res
        .status(500)
        .json({ message: 'Error uploading file', success: false });
    }
  }
}

export default new UploadFileController();
