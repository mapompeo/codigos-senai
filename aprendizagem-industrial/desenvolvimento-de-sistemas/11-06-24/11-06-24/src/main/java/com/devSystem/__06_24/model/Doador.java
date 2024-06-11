package com.devSystem.__06_24.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "doadores")
public class Doador {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long codDoador;
    
    @NotBlank(message = "O campo não pode ser nulo")
    @Size(min = 2, message = "Mínimo 2 caracteres")
    private String nome;

    @NotBlank(message = "Digite apenas os números")
    @Size(min = 11, message = "O tamanho mínimo deve ser 11 digitos")
    private String cpf;

    @OneToOne(mappedBy = "doador",
        cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private Endereco endereco;
    
    public Doador() {

    }

    public Long getCodDoador() {
        return codDoador;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    @Override
    public String toString() {
        return "Doador [codDoador=" + codDoador + ", nome=" + nome + ", cpf=" + cpf + ", endereco=" + endereco + "]";
    }
}