package com.rabapp.farm.controller;

import com.rabapp.farm.service.LoginService;
import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RequiredArgsConstructor
@RestController
public class LoginController {

    private final LoginService loginService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/login")
    ResponseEntity<HashMap<String,Object>> login(@RequestParam String email, @RequestParam String password) throws Exception {
        return new ResponseEntity<>(loginService.validateUserLogin(email, password), HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/signup")
    ResponseEntity<HashMap<String,Object>> signup(@RequestParam String name, @RequestParam String email, @RequestParam String password) throws Exception {
        return new ResponseEntity<>(loginService.signupUser(name, email, password), HttpStatus.OK);
    }
}
