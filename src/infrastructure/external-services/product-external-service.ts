export interface ExternalProduct {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface ProductExternalService {
  fetchProductById(id: string): Promise<ExternalProduct | null>;
  storeProduct(product: ExternalProduct): Promise<void>;
}

export class ProductExternalServiceImpl implements ProductExternalService {
  private products: ExternalProduct[] = [
    { id: '101', name: 'external_product_1', price: 99.99, description: 'External product 1' },
    { id: '102', name: 'external_product_2', price: 49.99, description: 'External product 2' },
  ];

  async fetchProductById(id: string): Promise<ExternalProduct | null> {
    // Simulate fetching product data from an in-memory database
    return this.products.find((product) => product.id === id) || null;
  }

  async storeProduct(product: ExternalProduct): Promise<void> {
    // Simulate storing product data in an in-memory database
    this.products.push(product);
  }
}
