package com.example.portfolio.portfolio.service;

import com.example.portfolio.portfolio.entity.Contact;

import com.example.portfolio.portfolio.repository.ContactRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ContactService {

    private final ContactRepository contactRepository;

    private final EmailService emailService;

    public Contact saveMessage(Contact contact) {

        Contact savedContact =
                contactRepository.save(contact);

        emailService.sendEmail(

                contact.getName(),

                contact.getEmail(),

                contact.getMessage()
        );

        return savedContact;
    }

    public List<Contact> getMessages() {

        return contactRepository.findAll();
    }

    public String deleteMessage(Long id) {

        contactRepository.deleteById(Math.toIntExact(id));

        return "Message Deleted";
    }
}