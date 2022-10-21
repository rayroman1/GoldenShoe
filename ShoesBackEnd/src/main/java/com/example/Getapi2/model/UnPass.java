package com.example.Getapi2.model;


import javax.persistence.*;

@Entity
@Table(name = "unpassword")
public class UnPass {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int idunpas=0;
    String usern="";
    String passw="";
    int idcust=0;

    UnPass()
    {

    }

    public UnPass(int idunpas, String usern, String passw, int idcust) {
        this.idunpas = idunpas;
        this.usern = usern;
        this.passw = passw;
        this.idcust = idcust;
    }

    public int getIdunpas() {
        return idunpas;
    }

    public String getUsern() {
        return usern;
    }

    public void setUsern(String usern) {
        this.usern = usern;
    }

    public String getPassw() {
        return passw;
    }

    public void setPassw(String passw) {
        this.passw = passw;
    }

    public int getIdcust() {
        return idcust;
    }

    public void setIdcust(int idcust) {
        this.idcust = idcust;
    }

    @Override
    public String toString() {
        return "UnPassw{" +
                "idunpas=" + idunpas +
                ", usern='" + usern + '\'' +
                ", passw='" + passw + '\'' +
                ", idcust=" + idcust +
                '}';
    }
}
