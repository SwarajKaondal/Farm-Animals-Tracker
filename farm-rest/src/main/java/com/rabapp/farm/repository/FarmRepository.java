package com.rabapp.farm.repository;

import com.rabapp.farm.Entity.Farm;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FarmRepository extends JpaRepository<Farm, Long> {
}
