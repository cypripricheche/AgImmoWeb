 package com.llm.agimmoweb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AgImmoWebController {
    @GetMapping(value = "/")
    public String callHome() {
        return "notreEquipe";
    }

    @GetMapping(value = "/equipe")
    public String callEquipePage() {
        return "notreEquipe";
    }
    
    @GetMapping(value = "/agences")
    public String callAgencePage() {
        return "nosAgences";
    }
}
