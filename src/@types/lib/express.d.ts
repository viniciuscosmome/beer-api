declare namespace Express {
  export interface Request {
    verifiedCredentials?: {
      id: string;
      roleLevel: string;
      issuedAt?: number | undefined;
      notBefore?: number | undefined;
      jwtid?: string | undefined;
    };
  }
}
