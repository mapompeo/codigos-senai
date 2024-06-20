package com.devSystem.um_pra_muitos.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
@CrossOrigin("*")
public class Home {

    @GetMapping
    public String home () {
        return "Servidor Rodando! o/";
    }
}
