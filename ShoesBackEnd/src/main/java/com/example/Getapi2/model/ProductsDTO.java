package com.example.Getapi2.model;


import javax.persistence.*;

@Entity
@Table(name = "products", schema="spring_data_jpa_example")
public class ProductsDTO {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    int id=0;
    @Column(name="product")
    String product ="";
    @Column(name="color")
    String color="";
    @Column(name="size")
    int size=0;
    @Column(name="quantity")
    int quantity=0;
    @Column(name="img_url")
    String img_url="";
    @Column(name="price")
    float price=0;

    public int getId() {
        return id;
    }



    public String getProduct() {
        return product;
    }

    public void setProduct(String product) {
        this.product = product;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getImg_url() {
        return img_url;
    }

    public void setImg_url(String img_url) {
        this.img_url = img_url;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }
}
