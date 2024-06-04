package com.devSystem.back_end.model;

import jakarta.persistence.*;

@Entity
@Table(name = "doadores")
public class Doador {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private Integer cpf;
    private String telefone;
    private String email;
    private String cep;
    private String logradouro;
    private String complemento;
    private String bairro;
    private String localidade;
    private String uf;

    public Doador(Long id, String nome, Integer cpf, String telefone, String email, String cep, String logradouro, String complemento, String bairro, String localidade, String uf) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
        this.email = email;
        this.cep = cep;
        this.logradouro = logradouro;
        this.complemento = complemento;
        this.bairro = bairro;
        this.localidade = localidade;
        this.uf = uf;
    }

    @Override
    public String toString() {
        return String.format("| Doador: %s \n" +
                        "  | Código: %d \n" +
                        "  | CPF: %d \n" +
                        "  | Telefone: %s \n" +
                        "  | Email: %s \n" +
                        "  | CEP: %s \n" +
                        "  | Logradouro: %s \n" +
                        "  | Complemento: %s \n" +
                        "  | Bairro: %s \n" +
                        "  | Localidade: %s \n" +
                        "  | UF: %s \n",
                getNome(),getId(),getCpf(),getTelefone(),getEmail(),getCep(),getLogradouro(),getComplemento(),getBairro(),getLocalidade(),getUf());
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

    public Integer getCpf() {
        return cpf;
    }

    public void setCpf(Integer cpf) {
        this.cpf = cpf;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getLogradouro() {
        return logradouro;
    }

    public void setLogradouro(String logradouro) {
        this.logradouro = logradouro;
    }

    public String getComplemento() {
        return complemento;
    }

    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getLocalidade() {
        return localidade;
    }

    public void setLocalidade(String localidade) {
        this.localidade = localidade;
    }

    public String getUf() {
        return uf;
    }

    public void setUf(String estado) {
        this.uf = estado;
    }
}