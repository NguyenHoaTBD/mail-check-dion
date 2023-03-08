import type { MxRecord } from "dns";

export type SyntaxResult = {
  valid: boolean;
  username?: string;
  domain?: string;
};

export type MxResult = {
  valid: boolean;
  mxRecords?: MxRecord[];
  err: boolean;
};

export type SMTPResult = {
  valid: boolean;
  err?: unknown;
};

export type Result = {
  email: string;
  reachable: boolean;
  syntax: SyntaxResult;
  mx: MxResult;
  smtp: SMTPResult;
};
