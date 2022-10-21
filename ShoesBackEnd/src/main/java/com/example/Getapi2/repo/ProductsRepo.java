package com.example.Getapi2.repo;


import com.example.Getapi2.model.MShoes1;
import com.example.Getapi2.model.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductsRepo extends JpaRepository<Products,Integer> {
   /* List<Products> getproducts();*/

    @Query("SELECT Distinct color FROM Products as em WHERE em.product=:product")
    public List<String> findDistinctByProduct(@Param("product")String product);

}
