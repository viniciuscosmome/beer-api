export const PORT = process.env.PORT || 8080;
export const IS_PRODUCTION_ENV = process.env.NODE_ENV === 'production';
export const IS_HOMOLOGATION_ENV = process.env.NODE_ENV === 'homologation';
export const IS_DEVELOPMENT_ENV = !IS_PRODUCTION_ENV && !IS_HOMOLOGATION_ENV;

export const PASSWORD_SALT = Number(process.env.PASSWORD_SALT);
export const SECRET_SESS = process.env.SECRET_SESS as string;

export const PASSWORD_REGEX = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W).*$/;
export const BASIC_SEARCH_REGEX = /^(random|\d+)$/;
export const TEXT_SEARCH_REGEX = /^[a-zÀ-ÿ][a-zÀ-ÿ_]+[a-zÀ-ÿ]$/i;
export const BEERS_IDS_REGEX = /^[0-9][0-9|]+[0-9]$/;
export const BEERS_BREWED_REGEX = /^[0-9]{1,2}-[0-9]{1,4}$/;

export const APP_TITLE = 'Beer API';
export const APP_LICENSE = 'MIT License';
export const APP_LICENSE_URL =
  'https://github.com/viniciuscosmome/beer-api/blob/main/LICENSE';

export const MAIL_FROM = process.env.MAIL_FROM as string;
export const MAIL_HOST = process.env.MAIL_HOST as string;
export const MAIL_PORT = Number(process.env.MAIL_PORT) as number;
export const MAIL_USER = process.env.MAIL_USER as string;
export const MAIL_PASS = process.env.MAIL_PASS as string;
