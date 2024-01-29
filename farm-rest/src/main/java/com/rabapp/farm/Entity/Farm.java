package com.rabapp.farm.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;

@Getter
@Entity
public class Farm {

    @Id
    private String id;

    @Column
    private String address;

    @Column
    private String city;

    @Column
    private String name;

    @Column
    private Integer postalCode;

    @Column
    private String state;

    @Column
    private Double latitude;

    @Column
    private Double longitude;

    @Column
    private Integer totalAnimal;

}