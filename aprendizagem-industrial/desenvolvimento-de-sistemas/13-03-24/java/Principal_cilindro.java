import java.util.Scanner;

public class Principal_cilindro {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Cálculo de volume do cilindro");
        System.out.print("Digite o valor do raio: ");
        double raio = scanner.nextDouble();
        System.out.print("Digite o valor da altura: ");
        double altura = scanner.nextDouble();

        Cilindro cilindro = new Cilindro(raio, altura);

        double volume = cilindro.CaclulcarCilindro();

        System.out.println("O volume do cilindro é " + volume);

        scanner.close();
    }
}
