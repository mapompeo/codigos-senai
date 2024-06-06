package com.desenvolvedor.ApiJava.model;

import jakarta.persistence.*;

@Entity
@Table(name = "usuarios")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private Integer idade;

    public Usuario(){}

    @Override
    public String toString(){
        return String.format("| Código: %d \n" +
                             "  | Nome: %s \n" +
                             "  | Idade: %d \n",
                             getId(),getNome(),getIdade());
    }

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Integer getIdade() {
        return idade;
    }

    public void setIdade(Integer idade) {
        this.idade = idade;
    }
}
