import express from 'express';
import ChannelRouter from './routes';
import { randomBytes } from 'crypto';
import bodyParser from 'body-parser';

export const frontId = process.env.FRONT_ID as string;
export const frontSecret = process.env.FRONT_SECRET as string;
export const frontUrl = 'https://api2.frontapp.com';
export const callbackHostname = process.env.CALLBACK_HOSTNAME as string;
export const channelId = process.env.CHANNEL_ID as string;
export const serverPort = process.env.PORT || '3000';

if (!frontId || !frontSecret) {
  console.error('Missing config');
}

export function randomString(length: number): string {
  return randomBytes(Math.floor(length / 2)).toString('hex');
}

const app = express();

app.use(bodyParser.json({ limit: '15mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '15mb' }));
app.use(ChannelRouter);

app.listen(serverPort, () => {
  console.log(`Express server listening on port ${serverPort}`);
});
