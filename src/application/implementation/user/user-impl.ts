import { UserExternalService } from '@/infrastructure/external-services/user-external-service';
import { User, UserSchema } from '@/domain/user/user';
import { UserUseCase } from '@/application/usecase/user/user-usecase'

export class UserUseCaseImplementation implements UserUseCase {
  constructor(private readonly userExternalService: UserExternalService) {}

  async getUserById(id: string): Promise<User | null> {
    // Check if the user is already available in the internal data store
    const internalUser = this.userExternalService.fetchUserById(id);
    if (internalUser) {
      return internalUser;
    }

    // If not found, fetch from the external service
    const externalUser = await this.userExternalService.fetchUserById(id);
    if (externalUser) {
      await this.userExternalService.storeUser(externalUser); // Store the fetched user in the data store
    }

    return externalUser ? UserSchema.parse(externalUser) : null;
  }
}
