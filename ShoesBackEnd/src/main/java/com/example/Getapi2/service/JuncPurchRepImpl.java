package com.example.Getapi2.service;

import com.example.Getapi2.model.JunctPurchTable;
import com.example.Getapi2.repo.JuncPurchRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public  class JuncPurchRepImpl  {

    @Autowired
    JuncPurchRep w;


    public String  insertjunctpurch(JunctPurchTable j)
    {
        w.save(j);
        return "Record Added";

    }

}
