import java.util.Scanner;

public class Programa {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int id = 10;
        Estoque produto1 = new Estoque();
        Estoque produto2 = new Estoque();

        // produto1.codigo = 5;
        // produto1.quantidade = 111;

        produto1.nome = "mouse";
        produto2 = produto1;
        produto2.nome = "teclado";
        System.out.println(produto1.nome);

        // System.out.println(id);
        
        // System.out.println("Digite o nome do produto:");
        // String nome = scanner.nextLine();
        // produto.nome = nome;

        // System.out.println("Digite o código do produto:");
        // int codigo = scanner.nextLine();
        // produto.codigo = codigo;

        // System.out.println("Digite a quantidade do produto:");
        // int quantidade = scanner.nextLine();
        // produto.quantidade = quantidade;

        // System.out.println("O produto %s de código %d tem uma quantidade de %d" ,produto.nome, produto.codigo, produto.quantidade);

        scanner.close();
    }
}