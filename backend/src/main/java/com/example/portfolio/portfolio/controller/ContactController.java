package com.example.portfolio.portfolio.controller;

import com.example.portfolio.portfolio.entity.Contact;
import com.example.portfolio.portfolio.service.ContactService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ContactController {
    private final ContactService contactService;

    @PostMapping
    public Contact addContact(@RequestBody Contact contact){
        return contactService.saveMessage(contact);
    }
    @GetMapping
    public List<Contact> getMessages(){
        return contactService.getMessages();
    }
    @DeleteMapping("/{id}")
    public String deleteContact(@PathVariable Long id){
        return contactService.deleteMessage(id);
    }
}
