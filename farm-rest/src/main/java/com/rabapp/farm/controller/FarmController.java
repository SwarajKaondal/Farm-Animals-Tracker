package com.rabapp.farm.controller;

import com.rabapp.farm.Entity.Farm;
import com.rabapp.farm.Entity.Movement;
import com.rabapp.farm.repository.FarmRepository;
import com.rabapp.farm.repository.MovementRepository;
import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class FarmController {

    private final FarmRepository farmRepository;
    private final MovementRepository movementRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/farms")
    ResponseEntity<List<Farm>> allFarms() {
        List<Farm> farms = farmRepository.findAll();
        return new ResponseEntity<List<Farm>>(farms, HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/movements")
    ResponseEntity<List<Movement>> allMovements() {
        List<Movement> movements = movementRepository.findAll();
        return new ResponseEntity<List<Movement>>(movements, HttpStatus.OK);
    }
}
