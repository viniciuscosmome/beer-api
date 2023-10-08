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
  email: string;
  password: string;
  accounts: {
    firstName: string;
  } | null;
} | null;

declare type iValidatesAccessDataOutput = {
  id: number;
  name: string;
};
