import { assertType, describe, expect, test } from 'vitest';
import { authService } from '../auth.service';
import { signInSuccessInputStub } from './auth.stubs';
import { BaseException } from '../../../globals/exceptions';

describe('Authentication Services', () => {
  describe('Validates acess data', () => {
    describe('Happy', () => {
      test('Correct email and password are passed. Must return user data:', async () => {
        await authService.validatesAccessData(signInSuccessInputStub).then((actual) => {
          assertType<object>(actual);

          assertType<number>(actual.id);
          expect(actual.id).greaterThanOrEqual(1);

          assertType<string>(actual.name);
          expect(actual.name.length).greaterThanOrEqual(3);
        });
      });
    });

    describe('Unhappy', () => {
      const emailErrStub = {
        ...signInSuccessInputStub,
        email: 'random@example.com',
      };

      const passwordErrStub = {
        ...signInSuccessInputStub,
        password: 'random',
      };

      test('An unregistered email is sent. It should return an error (401):', async () => {
        await authService.validatesAccessData(emailErrStub).catch((actual) => {
          expect(actual).toBeInstanceOf(BaseException);
          expect(actual.code).toBe(401);
        });
      });

      test('Provides the correct email, but a wrong password. Should return an error (401):', async () => {
        await authService.validatesAccessData(passwordErrStub).catch((actual) => {
          expect(actual).toBeInstanceOf(BaseException);
          expect(actual.code).toBe(401);
        });
      });
    });
  });
});
