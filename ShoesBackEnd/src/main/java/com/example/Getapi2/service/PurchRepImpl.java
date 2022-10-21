package com.example.Getapi2.service;

import com.example.Getapi2.model.Purchase;
import com.example.Getapi2.model.UnPass;
import com.example.Getapi2.repo.PurchRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public  class PurchRepImpl  {


    @Autowired
    PurchRep w;


    public String insertwpurch( Purchase f)
    {
        w.save(f);

        return "Saved";

    }


}
