package com.example.Getapi2.model;

import javax.persistence.*;

@Entity
@Table(name = "mensshoes")
public class MShoes1 {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int itemid;
    String shoename;
    String shoesize;
    String shoetype;
    double shoecost;
    String shoeimage;
    int quantity;

    MShoes1()
    {

    }

    public MShoes1(String shoename, String shoesize, String shoetype, double shoecost, String shoeimage, int quantity) {
        super();
        this.shoename = shoename;
        this.shoesize = shoesize;
        this.shoetype = shoetype;
        this.shoecost = shoecost;
        this.shoeimage = shoeimage;
        this.quantity = quantity;
    }

    public String getShoename() {
        return shoename;
    }

    public void setShoename(String shoename) {
        this.shoename = shoename;
    }

    public String getShoesize() {
        return shoesize;
    }

    public void setShoesize(String shoesize) {
        this.shoesize = shoesize;
    }

    public String getShoetype() {
        return shoetype;
    }

    public void setShoetype(String shoetype) {
        this.shoetype = shoetype;
    }

    public double getShoecost() {
        return shoecost;
    }

    public void setShoecost(double shoecost) {
        this.shoecost = shoecost;
    }

    public String getShoeimage() {
        return shoeimage;
    }

    public void setShoeimage(String shoeimage) {
        this.shoeimage = shoeimage;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getItemid() {
        return itemid;
    }

    @Override
    public String toString() {
        return "MShoes1 [itemid=" + itemid + ", shoename=" + shoename + ", shoesize=" + shoesize + ", shoetype="
                + shoetype + ", shoecost=" + shoecost + ", shoeimage=" + shoeimage + ", quantity=" + quantity + "]";
    }



}

