import { UserExternalServiceImpl } from '@/infrastructure/external-services/user-external-service'
import { UserUseCaseImplementation } from '@/application/implementation/user/user-impl'

describe('UserUseCaseImplementation', () => {
  it('should fetch user by ID from external service', async () => {
    const externalService = new UserExternalServiceImpl();
    const useCase = new UserUseCaseImplementation(externalService);

    const userId = '1';
    const result = await useCase.getUserById(userId);

    expect(result).not.toBeNull();
    expect(result?.id).toEqual(userId);
  });

  it('should return null for non-existing user ID', async () => {
    const externalService = new UserExternalServiceImpl();
    const useCase = new UserUseCaseImplementation(externalService);

    const nonExistingUserId = 'non-existing-id';
    const result = await useCase.getUserById(nonExistingUserId);

    expect(result).toBeNull();
  });
});
