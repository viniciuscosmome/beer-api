declare type iRoleLevels = 'USER' | 'ADMIN';
declare type iTokensSubject = 'ACCESS' | 'REFRESH' | 'FORGOT_PASSWORD';
declare type iBaseException = {
  code: number;
  error: string;
  message: string;
  details?: object;
};

declare type iSignUpInput = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  birthdate: Date;
};

declare type iSignInInput = {
  email: string;
  password: string;
};

declare type iSessionProps = {
  accessToken: string;
  refreshToken: string;
};

declare type iAccountInfo = {
  id: string;
  roleLevel: iRoleLevels | string;
};

declare type iFindCredential = iAccountInfo & {
  password: string;
};

declare type iJwtProps = iAccountInfo & {
  sub?: string | undefined;
  exp?: number | undefined;
  iat?: number | undefined;
  jti?: string | undefined;
  nbf?: number | undefined;
  jwtid?: string | undefined;
  subject?: string | undefined;
  expiresIn?: string | number | undefined;
  notBefore?: string | number | undefined;
};

declare type iUpdatePasswordProps = {
  id: string;
  password: string;
  tokenActivatedAt: Date | number;
};
