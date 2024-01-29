package com.rabapp.farm.service.serviceImpl;

import com.rabapp.farm.service.LoginService;
import com.rabapp.farm.util.EncryptionUtil;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Objects;

@Service
public class LoginServiceImpl implements LoginService {

    @RequiredArgsConstructor
    private class User {
        private final String email;
        private final String name;
        private final String password;

    }

    private HashMap<String, User> userResgistry = new HashMap<>();

    @Override
    public HashMap<String, Object> validateUserLogin(String email, String password) throws Exception {
        HashMap<String, Object> response = new HashMap<>();

        if(userResgistry.containsKey(email) && Objects.equals(userResgistry.get(email).password, EncryptionUtil.encrypt(password))){
            response.put("isValid", true);
            response.put("name", userResgistry.get(email).name);
            response.put("error", "");
        } else {
            response.put("isValid", false);
            response.put("error", "Invalid email or password!");
        }

        return response;
    }

    @Override
    public HashMap<String, Object> signupUser(String name, String email, String password) throws Exception {
        HashMap<String, Object > response = new HashMap<>();

        if(userResgistry.containsKey(email)){
            response.put("isValid", false);
            response.put("error", "Email already in use.");
        }else {
            User user = new User(email, name, EncryptionUtil.encrypt(password));
            userResgistry.put(email, user);
            response.put("isValid", true);
            response.put("error", "");
        }
        return response;
    }
}
