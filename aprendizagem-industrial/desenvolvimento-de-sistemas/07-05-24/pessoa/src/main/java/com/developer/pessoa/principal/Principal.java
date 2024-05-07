package com.developer.pessoa.principal;

import jakarta.persistence.*;

import java.util.Scanner;

@Entity
@Table(name="usuarios")
public class Principal {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        public void mostraMenu() {

        int opcao = -1;

        do {
            String menu = """
                    |-----------------------------------------|
                    | 0 - Sair                                |
                    | 1 - Cadastrar                           |
                    | 2 - Listar                              |
                    |-----------------------------------------|
                    """;

            System.out.println(menu);
            Scanner scanner = new Scanner(System.in);
            System.out.print("Digite o número da sua opção: ");
            opcao = scanner.nextInt();
            scanner.nextLine();

            switch (opcao) {
                case 0 -> System.out.println("Programa finalizado!");
                case 1 -> cadastrarUsuario();
                case 2 -> listarUsuario();
                default -> System.out.println("Opção inválida!");
            }
        }
        while (opcao != 0);
    }

    private void listarUsuario() {
        System.out.println("listarusuario");
    }

    private void cadastrarUsuario() {
        System.out.println("cadastrarusuario");
    }
}
