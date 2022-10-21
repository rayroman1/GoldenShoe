package com.example.Getapi2.repo;

import com.example.Getapi2.model.Customers1;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustRep extends JpaRepository<Customers1,Integer>
{

    /*String addCust( Customers1 f);*/

    Customers1 getCustById(int g);

}
