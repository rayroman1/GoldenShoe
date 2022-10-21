package com.example.Getapi2.model;


import javax.persistence.*;

@Entity
@Table(name = "purchase")
public class Purchase {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int orderideid =0;
    float totalcost=0;
    String date ="";

    Purchase()
    {

    }

    public Purchase(float totalcost, String date) {
        super();
        this.totalcost = totalcost;
        this.date = date;
    }

    public float getTotalcost() {
        return totalcost;
    }

    public void setTotalcost(float totalcost) {
        this.totalcost = totalcost;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getOrderideid() {
        return orderideid;
    }

    @Override
    public String toString() {
        return "Purchase [orderideid=" + orderideid + ", totalcost=" + totalcost + ", date=" + date + "]";
    }


}
