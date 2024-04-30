package br.com.devsistem.programacaocadastro.principal;

import java.util.Scanner;

public class Principal{
    private Scanner scanner = new Scanner(System.in);
    public void mostraMenu() {
        String opcao = "Sair";
        do {
            String menu = """
                |-----------------------------------------------|
                |       PROGRAMA DE CADASTRO DE USUÁRIO         |
                |-----------------------------------------------|
                | Cadastrar usuário no sistema                  |
                | Listar usuário no sistema                     |
                | Atualizar usuário no sistema                  |
                | Apagar usuário do sistema                     |
                |-----------------------------------------------|
                | Sair do sistema                               |
                |-----------------------------------------------|
                """;
            System.out.println(menu);
            System.out.println("Digite apenas a primeira palavra da sua opção: ");
            opcao = scanner.nextLine();

            switch (opcao.toLowerCase()) {
                case "cadastrar":
                    cadastrarUsuario();
                    break;
                case "listar":
                    listarUsuario();
                    break;
                case "atualizar":
                    atualizarUsuario();
                    break;
                case "apagar":
                    apagarUsuario();
                    break;
                case "sair":
                    System.out.println("Programa finalizado!");
                    break;
                default:
                    System.out.println("Opção inválida!");
            }

        } while (!opcao.equalsIgnoreCase("Sair"));
    }

    private void cadastrarUsuario() {
        System.out.println("Cadastrando usuário");
    }

    private void listarUsuario() {
        System.out.println("Listando usuário");
    }

    private void atualizarUsuario() {
        System.out.println("Atualizando usuário");
    }

    private void apagarUsuario() {
        System.out.println("Apagando usuário");
    }

}
