package com.example.Getapi2.repo;

import com.example.Getapi2.model.ProductsDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


public interface ProductsDTORep extends JpaRepository<ProductsDTO,Integer>,ProductsDTORepCustom {

}
