package com.example.Getapi2.repo;

import com.example.Getapi2.model.WShoes1;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WomensShoesRep extends JpaRepository<WShoes1,Integer> {

   /* List<WShoes1> getWomensShoes();*/
    WShoes1 findShoeById(int k);


}
