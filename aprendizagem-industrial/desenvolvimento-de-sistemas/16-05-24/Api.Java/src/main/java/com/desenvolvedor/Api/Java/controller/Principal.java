package com.desenvolvedor.Api.Java.controller;

import com.desenvolvedor.Api.Java.model.Usuario;
import com.desenvolvedor.Api.Java.repository.IUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
public class Principal {
    private IUsuarioRepository repositorio;

    @Autowired
    public Principal(IUsuarioRepository repositorio) {
        this.repositorio = repositorio;
    }

    @PutMapping("/usuario")
    public ResponseEntity<Usuario> putUsuarioById(@PathVariable Long id, @ResquestBody Usuario atualizarUsuario) {
        try {
            Optional<Usuario> usuario repositorio.findAllById(id);
            if (usuario.isPresent()) {
                Usuario user = usuario.get();
                System.out.println(atualizarUsuario.toString());


                return ResponseEntity.ok(user);
            }
            else {
                return ResponseEntity.notFound().build();
            }
        }
        catch(Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/")
    public String Home() {
        return "Servidor rodando corretamente!";
    }

    @GetMapping("/usuario/{id}")
    public ResponseEntity<Usuario> getUsuarioById(@PathVariable Long id) {
        try {
            Optional<Usuario> usuario = repositorio.findById(id);
            if (usuario == null) {
                System.out.println("Erro ao buscar usuário");
            } else if (usuario.isPresent()) {
                Usuario user = usuario.get();
                System.out.println(user.toString());
                return ResponseEntity.ok(user);
            }
            else {
                return ResponseEntity.notFound().build();
            }
        }
        catch(Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        return ;
    }

    @GetMapping("/usuario")
    public List<Usuario> getUsuario() {
        List<Usuario> usuario = repositorio.findAll();
        usuario.forEach(user -> System.out.print(usuario));
        return usuario;
    }
}