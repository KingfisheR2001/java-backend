package com.cloudthat.productsappv2.service;



import com.cloudthat.productsappv2.model.ProductModel;
import com.cloudthat.productsappv2.model.ProductRequest;

import java.util.List;

public interface ProductService {
    ProductModel saveProduct(ProductRequest productRequest);

    List<ProductModel> getProducts();

    ProductModel getProduct(Long productId);

    ProductModel updateProduct(Long productId, ProductRequest productRequest);

    void deleteProduct(Long productId);

    ProductModel getProductByName(String productName);
}
