package com.example.Getapi2.model;


import javax.persistence.*;

@Entity
@Table(name = "products")
public class Products {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int id =0;
    String product="";
    String color="";
    int size=0;
    int quantity=0;
    String img_url="";
    float price=0;

    Products()
    {

    }

    public Products(String product, String color, int size, int quantity, String img_url, float price) {
        this.product = product;
        this.color = color;
        this.size = size;
        this.quantity = quantity;
        this.img_url = img_url;
        this.price = price;
    }

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

    @Override
    public String toString() {
        return "Products{" +
                "id=" + id +
                ", product='" + product + '\'' +
                ", color='" + color + '\'' +
                ", size=" + size +
                ", quantity=" + quantity +
                ", img_url='" + img_url + '\'' +
                ", price=" + price +
                '}';
    }
}
