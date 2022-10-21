package com.example.Getapi2.repo;

import com.example.Getapi2.model.Purchase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PurchRep extends JpaRepository<Purchase,Integer> {

   /* public String insertwpurch( Purchase f);*/

}
