package com.rabapp.farm.repository;

import com.rabapp.farm.Entity.Movement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovementRepository extends JpaRepository<Movement, Long> {
}