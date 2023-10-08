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

declare type iFindCredentialByEmailOutput = {
  id: string;
  password: string;
  role: {
    level: string;
  };
  profile: {
    firstName: string;
  };
} | null;

declare type iCleanCledentials = Pick<
  iFindCredentialByEmailOutput,
  'id' | 'profile' | 'role'
>;

declare type iRoleLevels = 'USER' | 'ADMIN';
