package com.devSystem.back_end.controller;

import com.devSystem.back_end.model.Doador;
import com.devSystem.back_end.repository.DoadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/doador")
@CrossOrigin("*")
public class DoadorController {
    @Autowired
    private final DoadorRepository repositorioDoador;

    public DoadorController(DoadorRepository repositorioDoador) {
        this.repositorioDoador = repositorioDoador;
    }

    @PostMapping
    public String cadastrarDoador(@RequestBody Doador doadorGravar) {

     return "";
    }
}