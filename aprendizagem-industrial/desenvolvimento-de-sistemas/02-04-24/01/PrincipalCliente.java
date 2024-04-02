import java.util.Scanner;

public class PrincipalCliente {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int op = 0;     // variável relacionada a opção do menu do sistema
        int soma = 0;   // variável auxiliar relacionada a soma da idade
        double somaAltura = 0.0; // variável auxiliar relacionada a soma da altura
        double media = 0.0; // variável auxiliar relacionada a media da idade e da altura
        String nome = "";
        int idade = 0;
        double altura = 0.0;

        System.out.println("========================================= ");
        System.out.println(" Sistema exemplo de uso de Vetor e Classe ");
        System.out.println("========================================= ");
        System.out.print(" Digite a quantidade de clientes: ");
        int n = sc.nextInt();
        Cliente[] client = new Cliente[n];

        do{
            System.out.println("========================================= ");
            System.out.println(" 0 - para sair ");
            System.out.println(" 1 - para cadastrar cliente ");
            System.out.println(" 2 - soma diversa da idade dos clientes ");
            System.out.println(" 3 - soma diversa da altura dos clientes ");
            System.out.println(" 4 - media da idade dos cliente ");
            System.out.println(" 5 - media da altura dos cliente ");
            System.out.println(" ");
            System.out.println(" 9 - Relatório dos Clientes ");
            System.out.println("========================================= ");
            System.out.print(" Digite sua Opção: ");
            op = sc.nextInt();
            System.out.println("========================================= ");

            if(op == 1){
                for(int i = 0; i < client.length; i++){
                    sc.nextLine();
                    System.out.print(" Digite o nome do cliente: ");
                    nome = sc.nextLine();
                    System.out.print(" Digite a idade do cliente: ");
                    idade = sc.nextInt();
                    System.out.print(" Digite a altura do cliente: ");
                    altura = sc.nextDouble();
                    client[i] = new Cliente(nome,idade,altura);
                }
                System.out.println("========================================= ");
                for(int i = 0; i < client.length; i++){
                    System.out.println(client[i].toString());
                }

            }else if(op == 2){
                sc.nextLine();
                soma = 0;
                for(int i = 0; i < client.length; i++){
                    soma += client[i].getIdade();
                }
                System.out.printf(" A soma da idade de todos os clientes é: %d %n",soma);
            }else if(op == 3){
                sc.nextLine();
                somaAltura = 0.0;
                for(int i = 0; i < client.length; i++){
                    somaAltura += client[i].getAltura();
                }
                System.out.printf(" A soma da idade de todos os clientes é: %.2f %n",somaAltura);
            }else if(op == 4){
                sc.nextLine();
                soma = 0;
                media = 0.0;
                for(int i = 0; i < client.length; i++){
                    soma += client[i].getIdade();
                }
                media = (double) soma / client.length;
                System.out.printf(" A media da idade de todos os clientes é: %.2f %n",media);
            }else if(op == 5){
                sc.nextLine();
                somaAltura = 0.0;
                for(int i = 0; i < client.length; i++){
                    somaAltura += client[i].getAltura();
                }
                media = somaAltura / client.length;
                System.out.printf(" A media da altura de todos os clientes é: %.2f %n",media);
            }else if(op == 9){
                System.out.println("========================================= ");
                for(int i = 0; i < client.length; i++) {
                    System.out.println(client[i].toString());
                }
            }

        }while(op != 0);




        sc.close();
    }
}