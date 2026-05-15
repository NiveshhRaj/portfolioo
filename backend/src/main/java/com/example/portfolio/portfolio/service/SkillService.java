package com.example.portfolio.portfolio.service;

import com.example.portfolio.portfolio.entity.Skill;
import com.example.portfolio.portfolio.repository.SkillRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class SkillService {
    private final SkillRepository skillRepository;

    public Skill addSkill(Skill skill) {
        return skillRepository.save(skill);
    }

    public List<Skill> getSkills(){
        return skillRepository.findAll();
    }

    public String deleteSkill(Long id){
        skillRepository.deleteById(id);
        return "Skill deleted successfully";
    }

    public Skill updateSkill(Long id, Skill updatedSkill) {
        Skill skill =
                skillRepository.findById(id)
                        .orElseThrow();

        skill.setName(
                updatedSkill.getName()
        );

        skill.setPercentage(
                updatedSkill.getPercentage()
        );
        return skillRepository.save(skill);
    }
}
