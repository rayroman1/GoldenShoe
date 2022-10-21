package com.example.Getapi2.repo;

import com.example.Getapi2.model.Purchase;
import com.example.Getapi2.model.UnPass;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UnPassRep extends JpaRepository<UnPass,Integer> {

   /* UnPass findUnPass(int id);*/
}
