import java.util.Scanner;

public class area {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double base = 0.0, altura = 0.0, area = 0.0; // double é um tipo de número real. Também definindo as variaveis utilizando o tipo de dado e também em uma linha para economizar código

        // Quando é utilizado o LN no final da expressão "System.out.println()", significa que será mostrado na tela e pulado uma linha, caso o LN seja apagado, será mostrado tudo em apenas uma linha

        System.out.print("Digite o valor da base: ");
        base = scanner.nextDouble();

        System.out.print("Digite o valor da altura: ");
        altura = scanner.nextDouble();

        area = base * altura;

        System.out.println("O valor da área é: " + area);

        scanner.close();
    }
}
