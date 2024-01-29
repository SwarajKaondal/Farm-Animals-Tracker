package com.rabapp.farm.Entity;

import lombok.RequiredArgsConstructor;

import java.io.Serializable;
import java.sql.Date;

@RequiredArgsConstructor
public class MovementId implements Serializable {
    private String origin_farm_id;

    private String dest_farm_id;

    private String species;

    private Date movementDate;
}
