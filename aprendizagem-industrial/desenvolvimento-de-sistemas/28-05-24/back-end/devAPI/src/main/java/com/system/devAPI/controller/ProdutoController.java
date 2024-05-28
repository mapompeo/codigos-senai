package com.system.devAPI.controller;

import com.system.devAPI.model.Produto;
import com.system.devAPI.repository.ProdutoRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/produtos")
@CrossOrigin("*")
public class ProdutoController {
    private final ProdutoRepository repositoryProduto;

    public ProdutoController(ProdutoRepository repositorioProduto) {
        this.repositoryProduto = repositorioProduto;
    }

    @PostMapping
    public String postProduto(@RequestBody Produto prod) {
        try {
            return "feito";
        }
        catch (Exception e ) {
            e.printStackTrace();
            return "teste";
        }
    }
}