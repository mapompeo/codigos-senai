
package com.system.devAPI.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.time.LocalTime;

@RestController
@RequestMapping("/")
@CrossOrigin("*")
public class HomeController {

    @GetMapping
    public String home() {
        LocalDate data = LocalDate.now();
        LocalTime hora = LocalTime.now();

        System.out.println("A data é: " +data);
        System.out.println("A hora é: " +hora);

        return "Servidor rodando";
    }
}
