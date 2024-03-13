import java.util.Scanner;

public class programa {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double num;

        System.out.print("Digite um número: ");
        num = scanner.nextDouble();
        System.out.println("Um número é: " +num);

        scanner.close();
    }
}