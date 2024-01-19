import { ProductExternalServiceImpl } from '@/infrastructure/external-services/product-external-service'
import { ProductUseCaseImplementation } from '@/application/implementation/product/product-impl'

describe('ProductUseCaseImplementation', () => {
  it('should fetch product by ID from external service', async () => {
    const externalService = new ProductExternalServiceImpl();
    const useCase = new ProductUseCaseImplementation(externalService);

    const productId = '101';
    const result = await useCase.getProductById(productId);

    expect(result).not.toBeNull();
    expect(result?.id).toEqual(productId);
  });

  it('should return null for non-existing product ID', async () => {
    const externalService = new ProductExternalServiceImpl();
    const useCase = new ProductUseCaseImplementation(externalService);

    const nonExistingProductId = 'non-existing-id';
    const result = await useCase.getProductById(nonExistingProductId);

    expect(result).toBeNull();
  });
});
