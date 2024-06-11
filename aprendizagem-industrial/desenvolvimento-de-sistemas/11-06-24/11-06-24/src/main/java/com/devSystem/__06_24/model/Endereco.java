package com.devSystem.__06_24.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "enderecos")
public class Endereco {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long codEndereco;

    @NotBlank(message = "O valor não pode ser nulo")
    @Size(min = 2, message = "Mínimo 2 caracteres")
    private String rua;

    @NotNull
    @Size(min = 1, message = "Mínimo 1 caracter")
    private Integer numero;

    @OneToOne
    @JoinColumn(name = "doador", referencedColumnName = "codDoador", nullable = false)
    @JsonIgnore
    private Doador doador;

    public Endereco(Long codEndereco, String rua, Integer numero) {
        this.codEndereco = codEndereco;
        this.rua = rua;
        this.numero = numero;
    }

    public Doador getDoador() {
        return doador;
    }

    public void setDoador(Doador doador) {
        this.doador = doador;
    }

    public Long getCodEndereco() {
        return codEndereco;
    }

    public String getRua() {
        return rua;
    }

    public void setRua(String rua) {
        this.rua = rua;
    }

    public Integer getNumero() {
        return numero;
    }

    public void setNumero(Integer numero) {
        this.numero = numero;
    }

    @Override
    public String toString() {
        return "Endereco [codEndereco=" + codEndereco + ", rua=" + rua + ", numero=" + numero + ", doador=" + doador
                + "]";
    }
}