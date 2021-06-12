import { Request, Response } from 'express';
import { SessionData, Session } from "express-session";
import { Redis } from "ioredis";

export type MainContext = {
  req: Request & { session: Session & Partial<SessionData> & { userId?: number } };
  redis: Redis;
  res: Response;
};
