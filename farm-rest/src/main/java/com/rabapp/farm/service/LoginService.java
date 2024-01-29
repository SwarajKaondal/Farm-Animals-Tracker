package com.rabapp.farm.service;

import java.util.HashMap;

public interface LoginService {
    public HashMap<String,Object> validateUserLogin(String email, String password) throws Exception;

    public HashMap<String,Object> signupUser(String name, String email, String password) throws Exception;
}
