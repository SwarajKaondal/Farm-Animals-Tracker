package com.rabapp.farm.Entity;

import jakarta.persistence.*;
import lombok.Getter;

import java.sql.Date;

@Getter
@Entity
@IdClass(MovementId.class)
public class Movement {

    @Column
    private String company;

    @Column
    private String reason;

    @Id
    private String origin_farm_id;

    @OneToOne
    @JoinColumn(name = "origin_farm_id", referencedColumnName = "id")
    private Farm originFarm;

    @Id
    private String dest_farm_id;

    @OneToOne
    @JoinColumn(name = "dest_farm_id", referencedColumnName = "id")
    private Farm destFarm;

    @Id
    private String species;

    @Column
    private Integer itemsMoved;

    @Id
    private Date movementDate;
}
