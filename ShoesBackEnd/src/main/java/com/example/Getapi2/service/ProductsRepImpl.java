package com.example.Getapi2.service;



import com.example.Getapi2.model.Products;
import com.example.Getapi2.repo.ProductsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductsRepImpl {

    @Autowired
    ProductsRepo s;

   public  List<Products> getproducts()
    {
       return s.findAll();
    }

    public List<String> findDistinctByProduct(String prodct){return s.findDistinctByProduct(prodct);}

}
