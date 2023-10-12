import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { createTransport } from 'nodemailer';
import {
  IS_PRODUCTION_ENV,
  MAIL_FROM,
  MAIL_HOST,
  MAIL_PASS,
  MAIL_PORT,
  MAIL_USER,
} from '../../globals/constants';
import { handleErrors } from '../../globals/errors';
import { recoveryPasswordHtml, recoveryPasswordText } from './templates.html';

const config: SMTPTransport.Options = {
  host: MAIL_HOST,
  port: MAIL_PORT,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASS,
  },
  secure: IS_PRODUCTION_ENV,
  connectionTimeout: 3000,
};

const defaults: SMTPTransport.Options = {
  from: `Beer API <${MAIL_FROM}>`,
};

const Transporter = createTransport(config, defaults);

export const MailService = {
  async recoveryPassword(to: string, token: string) {
    await Transporter.sendMail({
      to: to,
      subject: 'Pedido para alteração de senha na sua conta Beer API.',
      text: recoveryPasswordText(token),
      html: recoveryPasswordHtml(token),
    }).catch((error) => handleErrors(error));
  },
};
