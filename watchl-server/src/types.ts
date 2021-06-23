import { Request, Response } from 'express';
import { SessionData, Session } from "express-session";
import { Redis } from "ioredis";
import { createDisAgreeLoader } from './utils/createDisAgreeLoader';
import { createUserLoader } from './utils/createUserLoader';

export type MainContext = {
  req: Request & { session: Session & Partial<SessionData> & { userId?: number } };
  redis: Redis;
  res: Response;
  userLoader: ReturnType<typeof createUserLoader>;
  disAgreeLoader: ReturnType<typeof createDisAgreeLoader>;
};
