package com.example.Getapi2.repo;

import com.example.Getapi2.model.ProductsDTO;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface ProductsDTORepCustom  {

    public List<ProductsDTO> findByProductAndColor(String product, String color);

    //public List<String> findDistinctByProduct(String product);
}
