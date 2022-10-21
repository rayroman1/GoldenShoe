package com.example.Getapi2.model;

import javax.persistence.*;

@Entity
@Table(name = "customers")
public class Customers1 {


    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    int id=0;

    @Column(name = "Lastname")
    String Lastname="";

    @Column(name = "firstname")
    String firstname="";

    @Column(name = "customeraddress")
    String customeraddress ="";

    @Override
    public String toString() {
        return "Customers1{" +
                "id=" + id +
                ", Lastname='" + Lastname + '\'' +
                ", firstname='" + firstname + '\'' +
                ", customeraddress='" + customeraddress + '\'' +
                ", customeremail='" + customeremail + '\'' +
                ", customerphone='" + customerphone + '\'' +
                ", usern='" + usern + '\'' +
                ", passw='" + passw + '\'' +
                '}';
    }

    @Column(name = "customeremail")
    String customeremail ="";

    @Column(name = "customerphone")
   String customerphone="";



    @Column(name = "usern")
    String usern ="";

    @Column(name = "passw")
    String passw="";


    Customers1()
    {

    }

    public String getLastname() {
        return Lastname;
    }

    public void setLastname(String lastname) {
        this.Lastname = lastname;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getCustomeraddress() {
        return customeraddress;
    }

    public void setCustomeraddress(String customeraddress) {
        this.customeraddress = customeraddress;
    }

    public String getEmailaddress() {
        return customeremail;
    }

    public void setEmailaddress(String emailaddress) {
        this.customeremail = emailaddress;
    }

    public String getPhonenumber() {
        return customerphone;
    }

    public void setPhonenumber(String phonenumber) {
        this.customerphone = phonenumber;
    }

    public int getUid() {
        return id;
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



}
