declare namespace Express {
  export interface Request {
    verifiedCredentials?: {
      id: string;
      roleLevel: string;
    };
  }
}
