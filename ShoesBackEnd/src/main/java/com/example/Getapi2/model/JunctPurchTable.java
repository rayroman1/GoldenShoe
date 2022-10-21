package com.example.Getapi2.model;


import javax.persistence.*;

@Entity
@Table(name = "join_table")
public class JunctPurchTable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int transtblid =0;
    int orderidid =0;
    int itemid =0;
    int custid =0;

    JunctPurchTable()
    {

    }

    public JunctPurchTable(int orderidid, int itemid, int custid) {
        super();
        this.orderidid = orderidid;
        this.itemid = itemid;
        this.custid = custid;
    }

    public int getTranstblid() {
        return transtblid;
    }

    public int getOrderidid() {
        return orderidid;
    }

    public int getItemid() {
        return itemid;
    }

    public int getCustid() {
        return custid;
    }

    @Override
    public String toString() {
        return "JunctPurchTable [transtblid=" + transtblid + ", orderidid=" + orderidid + ", itemid=" + itemid
                + ", custid=" + custid + "]";
    }


}
