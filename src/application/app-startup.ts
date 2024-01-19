import { UserExternalServiceImpl } from '@/infrastructure/external-services/user-external-service'
import { ProductExternalServiceImpl } from '@/infrastructure/external-services/product-external-service'
import { UserUseCaseImplementation } from '@/application/implementation/user/user-impl'
import { ProductUseCaseImplementation } from '@/application/implementation/product/product-impl'

export function startApplication() {
  // Create instances of external services
  const userExternalService = new UserExternalServiceImpl();
  const productExternalService = new ProductExternalServiceImpl();

  // Create instances of use case implementations with external services injected
  const userUseCase = new UserUseCaseImplementation(userExternalService);
  const productUseCase = new ProductUseCaseImplementation(productExternalService);

  // Example usage of use cases
  const userIdToFetch = '2';
  userUseCase.getUserById(userIdToFetch).then((fetchedUser) => {
    console.info(`User with ID ${userIdToFetch}:`, fetchedUser);
  });

  const productIdToFetch = '102';
  productUseCase.getProductById(productIdToFetch).then((fetchedProduct) => {
    console.info(`Product with ID ${productIdToFetch}:`, fetchedProduct);
  });
}
