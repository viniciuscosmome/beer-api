export const PORT = process.env.PORT || 5500;
export const IS_PRODUCTION_ENV = process.env.NODE_ENV === 'production';
export const IS_HOMOLOGATION_ENV = process.env.NODE_ENV === 'homologation';
export const IS_DEVELOPMENT_ENV = !IS_PRODUCTION_ENV && !IS_HOMOLOGATION_ENV;

export const PASSWORD_REGEX = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W).*$/;

export const APP_TITLE = 'My API Name';
export const APP_LICENSE = 'MIT License';
export const APP_LICENSE_URL =
  'https://github.com/viniciuscosmome/modelo-express-ts/blob/main/LICENSE';
