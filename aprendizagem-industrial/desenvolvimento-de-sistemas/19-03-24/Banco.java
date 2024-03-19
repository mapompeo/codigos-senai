public class Banco {
    private int numeroConta;
    private String nomeCliente;
    private double saldo;

    public ContaBanco(int numeroConta, String nomeCliente, double saldo) {
        this.numeroConta = numeroConta;
        this.nomeCliente = nomeCliente;
        this.saldo = saldo;
        
        ContaBanco.close();
    }
}