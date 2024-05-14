package br.com.devsistemas.APIRest.controller;

import br.com.devsistemas.APIRest.model.Usuario;
import br.com.devsistemas.APIRest.repository.IUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
public class Principal {
    private IUsuarioRepository repositorio;

    @Autowired
    public Principal(IUsuarioRepository repositorio) {
        this.repositorio = repositorio;
    }

    //----------------------------------------------------------------

    @GetMapping("/")
    public String home() {
        return "Servidor funcionando corretamente!";
    }


    @GetMapping("/usuario")
    public List<Usuario> getUsuario() {
        List <Usuario> usuario = repositorio.findAll();
        usuario.forEach(user -> System.out.print(user.toString()));
        return usuario;
    }
}