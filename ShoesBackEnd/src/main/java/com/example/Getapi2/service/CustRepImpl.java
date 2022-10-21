package com.example.Getapi2.service;

import com.example.Getapi2.model.Customers1;
import com.example.Getapi2.repo.CustRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public   class CustRepImpl {

    @Autowired
    CustRep w;

    public String addCust( Customers1 f)
    {
        w.save(f);

        return "Customer added";
    }

    public Optional<Customers1> getCustById(int f)
    {
        return w.findById(f);
    }


    public List<Customers1> getAllCust(){ return w.findAll();};
}
