package com.example.Getapi2.service;


import com.example.Getapi2.model.UnPass;
import com.example.Getapi2.repo.UnPassRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UnPassRepImpl {

    @Autowired
    UnPassRep h;

    public Optional<UnPass> getUserById(int id)
    {
        return h.findById(id);
    }

    public List<UnPass> getAllUn()
    {
        return h.findAll();
    }
}
