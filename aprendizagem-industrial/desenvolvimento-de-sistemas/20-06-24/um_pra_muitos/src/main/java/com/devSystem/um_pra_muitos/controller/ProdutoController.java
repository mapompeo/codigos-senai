package com.devSystem.um_pra_muitos.controller;

import com.devSystem.um_pra_muitos.model.Fabricante;
import com.devSystem.um_pra_muitos.model.Produto;
import com.devSystem.um_pra_muitos.repository.IFabricanteRepository;
import com.devSystem.um_pra_muitos.repository.IProdutoRepostitory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/produto")
@CrossOrigin("*")
public class ProdutoController {
    private final IProdutoRepostitory repositorioProduto;

    private final IFabricanteRepository repositorioFabricante;

    public ProdutoController(IProdutoRepostitory repositorioProduto, IFabricanteRepository repositorioFabricante){
        this.repositorioProduto = repositorioProduto;
        this.repositorioFabricante = repositorioFabricante;
    }

    @PostMapping("/{codFab}")
    public ResponseEntity<?> gravarProduto(@RequestBody Produto novoProduto, @PathVariable Long codFab){
        try{
            Optional<Fabricante> fabricanteOptional = repositorioFabricante.findById(codFab);
            if(fabricanteOptional.isPresent()){
                Fabricante fabricante = fabricanteOptional.get();
                System.out.println(fabricante.toString());
                novoProduto.setFabricante(fabricante);
                Produto produto = repositorioProduto.save(novoProduto);
                System.out.println(produto.toString());
                return ResponseEntity.ok(fabricante);

            }else{
                return ResponseEntity.badRequest().build();
            }
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping
    public ResponseEntity<?> listarProduto(){
        try{
            List<Produto> produtos = repositorioProduto.findAll();
            produtos.forEach(produto -> System.out.println(produto.toString()));
            return ResponseEntity.ok(produtos);
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/{codProd}")
    public ResponseEntity<?> buscarProduto(@PathVariable Long codProd){
        try{
            Optional<Produto> produtoOptional = repositorioProduto.findById(codProd);
            if(produtoOptional.isPresent()){
                Produto produto = produtoOptional.get();
                System.out.println(produto.toString());
                return ResponseEntity.ok(produto);
            }else{
                return ResponseEntity.badRequest().build();
            }
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

}
