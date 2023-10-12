export const recoveryPasswordHtml = (token: string) => `
  <strong>Copie o código abaixo e use-o como token de autenticação:</strong>
  <br/><br/>
  <u style="line-break: anywhere;">${token}<u>
`;

export const recoveryPasswordText = (token: string) => `
Copie o código abaixo e use-o como token de autenticação:

${token}
`;
