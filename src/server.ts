import express from 'express';
import ChannelRouter from './routes';
import { randomBytes } from 'crypto';
import bodyParser from 'body-parser';

export const frontId = '3139298cca9bb76d'; // The App UID of your Front app
export const frontSecret = '23a25a0df75364d4574467e35b2a035b';
export const frontUrl = 'https://api2.frontapp.com'; // This URL subdomain might be different for your company
export const callbackHostname = 'https://partner-channel-template-production-7318.up.railway.app';
export const serverPort = '3000';

export function randomString(length: number): string {
  return randomBytes(Math.floor(length / 2)).toString('hex');
}

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(ChannelRouter);

app.listen(serverPort, () => {
  console.log(`Express server listening on port ${serverPort}`);
});
