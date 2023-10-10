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
  remember: boolean;
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
  jti?: string;
  jwtid?: string;
};
