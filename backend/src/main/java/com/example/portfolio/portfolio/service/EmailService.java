package com.example.portfolio.portfolio.service;

import lombok.RequiredArgsConstructor;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender mailSender;

    public void sendEmail(
            String senderName,
            String senderEmail,
            String senderMessage
    ) {

        try {

            SimpleMailMessage message =
                    new SimpleMailMessage();

            message.setTo("niveshhraj212004@gmail.com");

            message.setSubject(
                    "New Portfolio Contact Message"
            );

            message.setText(

                    "Name: " + senderName +

                            "\n\nEmail: " + senderEmail +

                            "\n\nMessage:\n" + senderMessage
            );

            mailSender.send(message);

            System.out.println(
                    "EMAIL SENT SUCCESSFULLY"
            );

        }

        catch (Exception e) {

            System.out.println(
                    "EMAIL FAILED"
            );

            e.printStackTrace();
        }
    }
}