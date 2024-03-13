import java.util.Scanner;

public class voto {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Sistema para verificar a idade para votar");
        System.out.print("Digite sua idade: ");
        int idade = scanner.nextInt();

        if (idade <= 15) {
            System.out.print("Você não pode votar!");
        } else if (idade >= 16 && idade <= 17) {
            System.out.print("Voto opcional!");
        } else if (idade >= 18 && idade <= 70){
            System.out.print("Voto obrigatório!");
        } else {
            System.out.print("Voto facultativo!");
        }

        scanner.close();
    }
}
