package com.developer.pessoa.model;

public class Usuario {
    private Long id;
    private String nome;
    private String sobrenome;

    public Usuario(String nome, String sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    @Override
    public String toString() {
        return String.format("Código: %d " +
                "Nome %d " +
                "Sobrenome: %d %n ",
                getId(), getNome(), getSobrenome());
    }

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }
}

