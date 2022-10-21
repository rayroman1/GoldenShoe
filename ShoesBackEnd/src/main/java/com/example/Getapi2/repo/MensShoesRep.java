package com.example.Getapi2.repo;

import com.example.Getapi2.model.MShoes1;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MensShoesRep extends JpaRepository<MShoes1,Integer> {

   /* public List<MShoes1> getallshoes();*/
   /* public MShoes1 findshoebyid(int k);*/


}
