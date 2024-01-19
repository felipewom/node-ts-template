import { ProductExternalService } from '@/infrastructure/external-services/product-external-service';
import { Product, ProductSchema } from '@/domain/product/product';
import { ProductUseCase } from '@/application/usecase/product/product-usecase'

export class ProductUseCaseImplementation implements ProductUseCase {
  constructor(private readonly productExternalService: ProductExternalService) {}

  async getProductById(id: string): Promise<Product | null> {
    // Check if the product is already available in the internal data store
    const internalProduct = this.productExternalService.fetchProductById(id);
    if (internalProduct) {
      return internalProduct;
    }

    // If not found, fetch from the external service
    const externalProduct = await this.productExternalService.fetchProductById(id);
    if (externalProduct) {
      await this.productExternalService.storeProduct(externalProduct);
    }

    return externalProduct ? ProductSchema.parse(externalProduct) : null;
  }
}
