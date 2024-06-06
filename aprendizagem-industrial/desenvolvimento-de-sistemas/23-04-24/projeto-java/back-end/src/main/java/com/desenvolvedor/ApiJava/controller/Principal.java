package com.desenvolvedor.ApiJava.controller;

import com.desenvolvedor.ApiJava.model.Usuario;
import com.desenvolvedor.ApiJava.repository.IUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
public class Principal {
    private IUsuarioRepository repositorio;

    @Autowired
    public Principal(IUsuarioRepository repositorio){
        this.repositorio = repositorio;
    }
    // -------------------------------------------------

    @PutMapping("/usuarios/{id}")
    public ResponseEntity<Usuario> putUsuarioPorId(@PathVariable Long id, @RequestBody Usuario atualizaUsuario){
        try{
            Optional<Usuario> usuario = repositorio.findById(id);
            if(usuario.isPresent()){
                Usuario user = usuario.get();
                System.out.println("----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");
                System.out.println(user.toString());
                System.out.println("----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");
                System.out.println(atualizaUsuario.toString()); // verificando dados recebidos
                System.out.println("----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");

                user.setNome(atualizaUsuario.getNome());
                user.setIdade(atualizaUsuario.getIdade());

                System.out.println("-------------------- Use fora do banco -----------------------");
                System.out.println(user.toString());
                System.out.println("----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");

                Usuario novoUsuario = repositorio.save(user);

                System.out.println("-------------------- novo usuario no banco -----------------------");
                System.out.println(user.toString());
                System.out.println("----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");

                return ResponseEntity.ok(user); // codigo incompleto
            }else{
                return ResponseEntity.notFound().build();
            }
        }catch(Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/usuarios/{id}")
    public ResponseEntity<Usuario> delUsuarioPorId(@PathVariable Long id){
        try{
            Optional<Usuario> usuario = repositorio.findById(id);
            if(usuario.isPresent()){
                Usuario user = usuario.get();
                repositorio.deleteById(id);
                System.out.println(user.toString());
                return ResponseEntity.ok(user);
            }else{
                return ResponseEntity.notFound().build();
            }
        }catch(Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/usuarios")
    public ResponseEntity<Usuario> postUsuario(@RequestBody Usuario novoUsuario){
        try{
            Usuario user = repositorio.save(novoUsuario);
            System.out.print(user.toString());
            return ResponseEntity.ok(user);
        }catch(Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/usuarios/{id}")
    public ResponseEntity<Usuario> getUsuarioPorId(@PathVariable Long id){
        try{
            Optional<Usuario> usuario = repositorio.findById(id);
            if (usuario.isPresent()){
                Usuario user = usuario.get();
                System.out.print(user.toString());
                return ResponseEntity.ok(user);
            }else{
                return ResponseEntity.notFound().build();
            }
        }catch(Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/usuarios")
    public List<Usuario> getUsuarios(){
        List<Usuario> usuario = repositorio.findAll();
        usuario.forEach(user -> System.out.print(user));
        return usuario;
    }

    @GetMapping("/")
    public String home(){
        return "Servidor rodando, tudo certo, UFA!";
    }
}
