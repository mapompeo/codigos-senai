package com.devSystem.um_pra_muitos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devSystem.um_pra_muitos.model.Fabricante;
import com.devSystem.um_pra_muitos.repository.IFabricanteRepository;

@RestController
@RequestMapping("/fabricante")
@CrossOrigin("*")
public class fabricanteController {
    private final IFabricanteRepository repositorioFabricante;

    @Autowired
    public fabricanteController(IFabricanteRepository repositorioFabricante) {
        this.repositorioFabricante = repositorioFabricante;
    }

    @PostMapping
    public ResponseEntity<?> gravarFabricante(@RequestBody Fabricante novoFabricante){
        try {
            Fabricante fabricante = repositorioFabricante.save(novoFabricante);
            System.out.println(fabricante.toString());
            return ResponseEntity.ok("Fabricante gravado com sucesso!");
        }catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping
    public ResponseEntity<?> listarFabricante(){
        try {
            List<Fabricante> fabricantes = repositorioFabricante.findAll();
            fabricantes.forEach(fabricante -> System.out.println(fabricantes.toString()));
            return ResponseEntity.ok(fabricantes);
        }catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    
}
