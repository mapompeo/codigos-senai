package com.developer.Pessoa.principal;
import com.developer.Pessoa.model.Usuario;
import com.developer.Pessoa.repository.IUsuarioRepository;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;

import java.util.Optional;
import java.util.Scanner;

public class Principal {
    private final IUsuarioRepository repository;
    Scanner sc = new Scanner(System.in);

    public Principal(IUsuarioRepository repository) {
        this.repository = repository;
    }
    public void mostraMenu() {
        int op = -1;

        do {
            String menu = """
                    +--------------------------------+
                    |                                |
                    | 0 - Sair do Programa           |
                    | 1 - Cadastrar                  |
                    | 2 - Listar                     |
                    | 3 - Apagar                     |
                    | 4 - Atualizar                  |
                    +--------------------------------+
                    """;

            System.out.println(menu);
            System.out.print("Digite sua opção: ");
            op = sc.nextInt();
            sc.nextLine();

            switch (op) {
                case 0 -> System.out.println("Programa finalizado!");
                case 1 -> cadastrarUsuario();
                case 2 -> listarUsuario();
                case 3 -> apagarUsuario();
                case 4 -> atualizarUsuario();
                default -> System.out.println("Opção inválida");
            }
        } while(op!=0);
    }
    public void cadastrarUsuario() {
        String novoUser = "s";

        while(novoUser.equalsIgnoreCase("S")){
            System.out.print("Insira o nome do usuário: ");
            String nome = sc.nextLine();
            System.out.print("Insira o sobrenome do usuário: ");
            String sobrenome = sc.nextLine();
            System.out.print("Insira a idade do Usuario: ");
            int idade = sc.nextInt();

            Usuario user = new Usuario(nome,sobrenome,idade);
            repository.save(user);

            System.out.println("Gostaria de cadastrar um novo usuario? s/n");
            sc.nextLine();
            novoUser = sc.nextLine();
        }
    }
    public void listarUsuario() {
        repository.findAll().forEach(usuario -> System.out.println(usuario));
    }

    public void apagarUsuario() {
        System.out.println("Digite o código do usuário: ");
        Long cod = sc.nextLong();
        sc.nextLine();

        Optional<Usuario> user = repository.findById(cod);

        if (user.isPresent()) {
            repository.deleteById(cod);
        }
        else {
            System.out.println("Usuário inexistente");
        }
    }

    public void atualizarUsuario() {
        System.out.println("Digite o código do usuário: ");
        Long cod = sc.nextLong();
        sc.nextLine();

        Optional<Usuario> user = repository.findById(cod);

        if (user.isPresent()) {
            System.out.println("Digite o novo valor para nome: ");
            String nome = sc.nextLine();
            System.out.println("Digite o novo valor para sobrenome: ");
            String sobrenome = sc.nextLine();
            System.out.println("Digite o novo valor para idade:");
            int idade = sc.nextInt();

            Usuario novoUser = user.get();
            System.out.println(novoUser);

            novoUser.setNome(nome);
            novoUser.setSobrenome(sobrenome);

            repository.save(novoUser);

            System.out.println("Usuário atualizado no banco de dados!");
        }
        else {
            System.out.println("Usuário inexistente");
        }
    }
}