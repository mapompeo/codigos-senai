import java.util.Scanner;

public class medicamento {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int opcao = 0;
        int quantidadeMedicamentos = 0;

        int id = 0;
        int quantidade = 0;
        double preco = 0.0;
        String nome = "";

        double soma = 0.0;
        double media = 0.0;

        System.out.println("|-------------------------------------------------|");
        System.out.println("|                 Estoque farmácia                |");
        System.out.println("|-------------------------------------------------|");
        System.out.println("|      Digite a quantidade de medicamentos:       |");
        System.out.println("|-------------------------------------------------|");

        quantidadeMedicamentos = scanner.nextInt();
        classMedicamento[] farmacia = new classMedicamento[quantidadeMedicamentos];

        do {
            System.out.println("|-------------------------------------------------|");
            System.out.println("|           Selecione a opção desejada:           |");
            System.out.println("|-------------------------------------------------|");
            System.out.println("| 0 | Para sair do programa                       |");
            System.out.println("| 1 | Cadastrar medicamentos                      |");
            System.out.println("| 2 | Calcular a quantidade total de medicamentos |");
            System.out.println("| 3 | Média diversa de medicamentos disponíveis   |");
            System.out.println("| 4 | Preço médio diverso dos medicamentos        |");
            System.out.println("| 5 | Gerar relatório                             |");
            System.out.println("|-------------------------------------------------|");
            opcao = scanner.nextInt();

            // Cadastrar medicamentos
            if (opcao == 1) {
                for (int i = 0; i < farmacia.length; i++) {
                    System.out.println("Digite o código do produto: ");
                    id = scanner.nextInt();
                    System.out.println("Digite o nome do produto: ");
                    nome = scanner.nextLine();
                    System.out.println("Digite a quantidade do produto: ");
                    quantidade = scanner.nextInt();
                    System.out.println("Digite o preço do produto: ");
                    preco = scanner.nextDouble();

                    farmacia[i] = new classMedicamento(id, nome, quantidade, preco);
                }
            }

            // Calcular a quantidade total de medicamentos
            else if (opcao == 2) {
                for (int i = 0; i < farmacia.length; i++) {
                    soma += farmacia[i].getQuantidade();
                }
                System.out.println("A soma de todos os medicamentos é: %d" + soma);
            }

            // Média diversa de medicamentos disponíveis
            else if (opcao == 3) {
                for (int i = 0; i < farmacia.length; i++) {
                    soma += farmacia[i].getQuantidade();
                }
                media = (double) soma / farmacia.length;
                System.out.println("A média de todos os medicamentos disponíveis é: %3.f");
            }

            // Preço médio diverso dos medicamentos
            else if (opcao == 4) {
                for (int i = 0; i < farmacia.length; i++) {
                    soma += farmacia[i].getPreco();
                }
                media = (double) soma / farmacia.length;
            }

            // Gerar relatório
            else if (opcao == 5) {
                
            }
        }
        while (opcao != 0);
        scanner.close();
    }
}