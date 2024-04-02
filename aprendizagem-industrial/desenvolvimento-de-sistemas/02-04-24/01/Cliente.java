public class Cliente {
    private String nome;
    private int idade;
    private double altura;

    public Cliente(String nome, int idade, double altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }

    @Override
    public String toString(){
        return  String.format(" | Nome do Cliente: %s | " +
                              " | Idade do Cliente %d | " +
                              " | Altura do Cliente %.2f %n",
                              getNome(),getIdade(),getAltura());
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
}