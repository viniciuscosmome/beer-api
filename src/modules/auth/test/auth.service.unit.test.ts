import { assertType, describe, expect, it } from 'vitest';
import { authService } from '../auth.service';
import { tokenPayload } from './auth.stubs';

describe('Authentication Services', () => {
  describe('Happy', () => {
    it('Create session tokens', async () => {
      const { accessToken, refreshToken } =
        await authService.createTokens(tokenPayload);

      expect(accessToken).toString();
      expect(refreshToken).toString();

      const accessPayloadFromToken = accessToken.split('.')[1];
      const accessPayload = JSON.parse(atob(accessPayloadFromToken));

      assertType<object>(accessPayload);
      expect(accessPayload.id).toString();
      expect(accessPayload.roleLevel).toString();
      expect(accessPayload.sub).toStrictEqual('ACCESS');

      const refreshPayloadFromToken = refreshToken.split('.')[1];
      const refreshPayload = JSON.parse(atob(refreshPayloadFromToken));

      assertType<object>(refreshPayload);
      expect(refreshPayload.id).toString();
      expect(refreshPayload.roleLevel).toString();
      expect(refreshPayload.sub).toStrictEqual('REFRESH');
    });
  });
});
