package com.developer.Pessoa.model;

    import jakarta.persistence.*;

@Entity
@Table(name="usuarios")

public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String sobrenome;
    private Integer idade;

    public Usuario () {}

    public Usuario(String nome, String sobrenome, Integer idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    @Override
    public String toString() {
        return String.format("| Nome: %s \n" +
                             "  | Sobrenome: %s \n" +
                             "  | ID: %d \n" +
                             "  | Idade: %s \n",
                             getNome(),getSobrenome(),getId(),getIdade());
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

    public Integer getIdade() {
        return idade;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }
}
