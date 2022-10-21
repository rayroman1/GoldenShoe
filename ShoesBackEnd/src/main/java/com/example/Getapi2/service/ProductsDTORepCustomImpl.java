package com.example.Getapi2.service;


import com.example.Getapi2.model.ProductsDTO;
import com.example.Getapi2.repo.ProductsDTORepCustom;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import java.util.List;

@Repository
@Transactional(readOnly = true)

public  class ProductsDTORepCustomImpl implements ProductsDTORepCustom {
    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<ProductsDTO> findByProductAndColor(String product, String color) {
        Query query = entityManager.createNativeQuery("SELECT * FROM spring_data_jpa_example.products as em WHERE em.product=product and em.color=color ", ProductsDTO.class);
        query.setParameter("product", product); //+ "%");
        query.setParameter("color", color);// + "%");
       // query.setParameter("size", size);// + "%");

        return query.getResultList();

    }

    public List<String> findDistinctByProduct(String product){
        Query query = entityManager.createNativeQuery("SELECT Distinct color FROM spring_data_jpa_example.products as em WHERE em.product=product ", ProductsDTO.class);
        query.setParameter("product", product); //+ "%");
        //query.setParameter("color", color);// + "%");

        return query.getResultList();
    }

}