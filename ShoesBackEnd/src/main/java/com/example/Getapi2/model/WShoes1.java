package com.example.Getapi2.model;


import javax.persistence.*;

@Entity
@Table(name = "womensshoes")
public class WShoes1 {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int id;
    String shoename;
    String shoesize;
    String shoetype;
    double shoecost;
    String shoeimage;
    int quantity;



    public WShoes1() {
        super();
    }



    public WShoes1(String shoename, String shoesize, String shoetype, double shoecost, String shoeimage, int quantity) {
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
        return id;
    }
    @Override
    public String toString() {
        return "WShoes1 [itemid=" + id + ", shoename=" + shoename + ", shoesize=" + shoesize + ", shoetype="
                + shoetype + ", shoecost=" + shoecost + ", shoeimage=" + shoeimage + ", quantity=" + quantity + "]";
    }



}
