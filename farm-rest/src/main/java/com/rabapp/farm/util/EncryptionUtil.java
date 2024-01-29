package com.rabapp.farm.util;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;
import java.util.Base64;

public class EncryptionUtil {

    private static final String secret = "farm123";

    public static String encrypt(String text) throws Exception{
        String encryptedText;
        try {
            SecretKeySpec skeyspec = new SecretKeySpec(secret.getBytes(),"Blowfish");
            Cipher cipher = Cipher.getInstance("Blowfish");
            cipher.init(Cipher.ENCRYPT_MODE, skeyspec);
            byte[] encrypted = cipher.doFinal(text.getBytes());
            encryptedText = new String(Base64.getEncoder().encode(encrypted));
        } catch (Exception e) {
            e.printStackTrace();
            throw new Exception(e);
        }
        return encryptedText;
    }
}
