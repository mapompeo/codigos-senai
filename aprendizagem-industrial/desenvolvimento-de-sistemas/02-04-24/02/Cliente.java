public class Cliente {
    private String nome;
    private int idade;
    private double peso;
    private double altura;

    public Cliente(String nome, int idade, double peso, double altura) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    }

    @Override
    public String toString(){
        return  String.format(" | Nome do Cliente: %s | " +
                              " | Idade do Cliente %d | " +
                              " | Peso do Cliente %.2f %n | " +
                              " | Altura do Cliente %.2f %n | ",
                              getNome(), getIdade(), getAltura(), getPeso());
    }

    public String getNome() {
        return nome;
    }

    public int getIdade() {
        return idade;
    }

    public double getAltura() {
        return altura;
    }

    public double getPeso() {
        return peso;
    }
}