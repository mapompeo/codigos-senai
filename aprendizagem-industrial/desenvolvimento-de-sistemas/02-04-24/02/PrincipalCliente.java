import java.util.Scanner;

public class PrincipalCliente { 
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int opcao = 0;
        double imc = 0.0;
        String nome = "";
        int idade = 0;
        double altura = 0.0;
        double peso = 0.0;
        String imcClassifica = "";
        double somaAltura = 0.0;

        System.out.println("================");
        System.out.println(" Cálculo de IMC ");
        System.out.println("================");
        System.out.print(" Digite a quantidade de clientes: ");
        int numeroDeClientes = sc.nextInt();
        Cliente[] paciente = new Cliente[numeroDeClientes];

        do{
            System.out.println("================");
            System.out.println(" 0 - para sair ");
            System.out.println(" 1 - para cadastrar cliente ");
            System.out.println(" 2 - soma diversa da idade dos clientes ");
            System.out.println("================");
            System.out.print(" Digite sua Opção: ");
            opcao = sc.nextInt();
            System.out.println("================");

            if (opcao == 1) {
                for(int i = 0; i < paciente.length; i++){
                    sc.nextLine();
                    System.out.print(" Digite o nome do cliente: ");
                    nome = sc.nextLine();
                    System.out.print(" Digite a idade do cliente: ");
                    idade = sc.nextInt();
                    System.out.print(" Digite o peso do cliente: ");
                    peso = sc.nextDouble();
                    System.out.print(" Digite a altura do cliente: ");
                    altura = sc.nextDouble();

                    paciente[i] = new Cliente(nome, idade, peso, altura);
                    imc = peso / (altura * altura);

                    if (imc <= 18.5) {
                        imcClassifica = "Abaixo do peso";
                    }
                    else if (imc > 18.5 || imc <= 24.9) {
                        imcClassifica = "Peso normal";
                    }
                    else if (imc > 25 || imc <= 29.9) {
                        imcClassifica = "Sobrepeso";
                    }
                    else if (imc > 30 || imc <= 34.9) {
                        imcClassifica = "Obesidade grau I";
                    }
                    else if (imc > 35 || imc <= 39.9) {
                        imcClassifica = "Obesidade grau II";
                    }
                    else if (imc > 40 || imc <= 49.9) {
                        imcClassifica = "Obesidade grau III";
                    }
                    else if (imc > 50 || imc <= 59.9) {
                        imcClassifica = "Obsevidade grau IV";
                    }
                    else {
                        imcClassifica = "Obesidade grau V";
                    }
                }
                
                System.out.println("================");
                for (int i = 0; i < paciente.length; i++) {
                    System.out.println(paciente[i].toString());
                }
            }

            

            else if(opcao == 2){
                sc.nextLine();
                for (int i = 0; i < paciente.length; i++) {
                    somaAltura += paciente[i].getAltura();
                }
                System.out.printf(" A soma da idade de todos os clientes é: %.2f %n",somaAltura);
            }


        } while (opcao != 0);
        sc.close();
    }
}