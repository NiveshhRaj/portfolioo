package com.example.portfolio.portfolio.controller;

import com.example.portfolio.portfolio.entity.Skill;
import com.example.portfolio.portfolio.service.SkillService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/skills")
@RequiredArgsConstructor
@CrossOrigin("*")
public class SkillController {
    @Autowired
    private SkillService skillService;

    @PostMapping
    public Skill addSkill(@RequestBody Skill skill){
        return skillService.addSkill(skill);
    }
    @GetMapping
    public List<Skill> getSkills(){
        return skillService.getSkills();
    }
    @DeleteMapping("/{id}")
    public String deleteSkill(@PathVariable Long id){
        return skillService.deleteSkill(id);
    }
}
