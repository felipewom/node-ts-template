import { Product } from '@/domain/product/product';

export interface ProductUseCase {
  getProductById(id: string): Promise<Product | null>;
}

