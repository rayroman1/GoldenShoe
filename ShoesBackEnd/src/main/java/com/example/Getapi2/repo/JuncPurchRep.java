package com.example.Getapi2.repo;

import com.example.Getapi2.model.JunctPurchTable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JuncPurchRep extends JpaRepository<JunctPurchTable,Integer> {

   /* public String insertjunctpurch(JunctPurchTable j);*/

}
