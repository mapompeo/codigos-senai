package com.devSystem.um_pra_muitos.controller;

import com.devSystem.um_pra_muitos.model.Fabricante;
import com.devSystem.um_pra_muitos.repository.IFabricanteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/fabricante")
@CrossOrigin("*")
public class FabricanteController {

    private final IFabricanteRepository repositorioFabricante;

    @Autowired
    public FabricanteController(IFabricanteRepository repositorioFabricante) {
        this.repositorioFabricante = repositorioFabricante;
    }

    @PostMapping
    public ResponseEntity<?> gravarFabricante(@RequestBody Fabricante novoFabricante){
        try {
            Fabricante fabricante = repositorioFabricante.save(novoFabricante);
            System.out.println(fabricante.toString());
            return ResponseEntity.ok(fabricante);
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping
    public ResponseEntity<?> listarFabricante(){
        try{
            List<Fabricante> fabricantes = repositorioFabricante.findAll();
            fabricantes.forEach(fabricante -> System.out.println(fabricante.toString()));
            return ResponseEntity.ok(fabricantes);
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/{codFab}")
    public ResponseEntity<?> buscarFabricante(@PathVariable Long codFab){
        try{
            Optional<Fabricante> fabricanteOptional = repositorioFabricante.findById(codFab);
            if (fabricanteOptional.isPresent()){
                Fabricante fabricante = fabricanteOptional.get();
                System.out.println(fabricante.toString());
                return ResponseEntity.ok("Fabricante com sucesso");
            }else {
                return ResponseEntity.notFound().build();
            }
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
