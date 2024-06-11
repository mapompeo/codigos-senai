package com.devSystem.__06_24.controller;

import java.util.List;
import java.util.Optional;

import org.apache.catalina.connector.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devSystem.__06_24.model.Doador;
import com.devSystem.__06_24.repository.DoadorRepository;

@RestController
@RequestMapping("/doador")
@CrossOrigin("*")
public class DoadorController {
    private final DoadorRepository repositorioDoador;

    public DoadorController(DoadorRepository repositorioDoador) {
        this.repositorioDoador = repositorioDoador;
    }

    @GetMapping
    public List<Doador> listarDoador() {
        List<Doador> doador = repositorioDoador.findAll();
        doador.forEach(lista -> System.out.println(lista.toString()));
        return doador;
    }

    @PostMapping
    public ResponseEntity<Doador> postDoador(@RequestBody Doador novoDoador) {
        try {
            Doador doador = repositorioDoador.save(novoDoador);
            System.out.println(doador.toString());
            return ResponseEntity.ok(doador);
        }
        catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/{codDoador}")
    public ResponseEntity<Doador> consultarDoador(@PathVariable Long codDoador) {
        try {
            Optional<Doador> doadorOptional  = repositorioDoador.findById(codDoador);
            if (doadorOptional.isPresent()) {
                Doador doador = doadorOptional.get();
                System.out.println(doador.toString());
                return ResponseEntity.ok(doador);
            }
            else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
