package com.example.Getapi2.controller;

import com.example.Getapi2.model.*;
import com.example.Getapi2.repo.ProductsDTORep;
import com.example.Getapi2.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class StoreApi {


    @Autowired
    public CustRepImpl a;
    @Autowired
    public JuncPurchRepImpl b;
    @Autowired
    public MShoeRepImpl c;
    @Autowired
    public PurchRepImpl d;
    @Autowired
    public WShoeRepImpl1 e;
    @Autowired
    public UnPassRepImpl k;
    @Autowired
    public ProductsRepImpl p;

    @Autowired
public ProductsDTORep g;


    @GetMapping("/")
    public String hello() {
        return new String("Hello Users");
    }

    @PostMapping("/cust1")
    public String addcust(@RequestBody Customers1 t) {
        a.addCust(t);
        return "Added customer";
    }

    @GetMapping("/cust2/{f}")
    public Optional<Customers1> getcustbyid(@PathVariable int f) {
        return a.getCustById(f);
    }

    @GetMapping("/cust3")
    public List<Customers1> getallcust(){

        return a.getAllCust();
    }

    @PostMapping("/jpurc")
    public String insertjpurch(@RequestBody JunctPurchTable j) {
        b.insertjunctpurch(j);
        return "Record Added";

    }

    @GetMapping("/shoes1")
    public List<MShoes1> getallshoes() {
        return c.getallshoes();
    }

    @RequestMapping(value = "/shoes2/{k}", method = RequestMethod.GET)
    public Optional<MShoes1> findshoebyid(@PathVariable int k) {
        return c.findshoebyid(Integer.valueOf(k));
    }

    @PostMapping("/insord1")
    public String insertord(@RequestBody Purchase f) {
        d.insertwpurch(f);

        return "Saved";

    }

    @GetMapping("/wshoes")
    public List<WShoes1> getallwshoes() {
        return e.getWomensShoes();
    }

    @GetMapping("/wshoes/{k}")
    public Optional<WShoes1> findwshoebyid(@PathVariable int k) {
        return e.findShoeById(Integer.valueOf(k));
    }


    @GetMapping("/unpas/{id}")
    public Optional<UnPass> findUnPasById(@PathVariable int id) {
        return k.getUserById(Integer.valueOf(id));
    }

    @GetMapping("/unpasall")
    public List<UnPass> allUnPas() {
        return k.getAllUn();
    }


    @GetMapping("/products1")
    public List<Products> allproducts() {
        return p.getproducts();
    }


    @GetMapping("product/{product}")
    public List<ProductsDTO> findByProductAndColor(@PathVariable String product, @RequestParam String color) {
        return g.findByProductAndColor(product, color);
    }

    @GetMapping("products3/{product}")
    public List<String> findDistinctByProduct(@PathVariable String product)
    {
        return p.findDistinctByProduct(product);
    }
}