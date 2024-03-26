import java.util.Scanner;

public class ProgramaVetor {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int [] vet1 = {1, 2, 3, 4, 5};
        int [] vet2 = {0, 0, 0, 0, 0};
        int [] vet3 = {0, 0, 0, 0, 0};

        System.out.println("Programa para verificar se a soma de dois vetores tem resultado par");

        for (int i = 0; i < vet1.length; i++) {
            System.out.printf("Digite o vetor de posição V[%D] = " ,i);
            vet2[i] = scanner.nextInt();
        }

        for (int i = 0; i < vet2.length; i++) {
            vet3[i] = vet1[i] + vet2[i];
            if (vet3[i] % 2 == 0) {
                System.out.printf("A posição V[%D] = %d é par! $n",i, vet3[i]);
            } else {
                System.out.printf("A posição V[%D] = %d é ímpar! $n",i, vet3[i]);
            }
        }

        scanner.close();
    }
}