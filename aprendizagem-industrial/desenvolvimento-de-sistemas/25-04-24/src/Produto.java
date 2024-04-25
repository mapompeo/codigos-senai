public class Produto {
    private String nome;
    private double preco;
    private double avaliacao;
    private int estoque;
    private String marca;

    public Produto() { }

    @Override
    public String toString() {
        return String.format(" Nome: %s " +
                        " Preço R$: %.2f " +
                        " Avaliação: %.2f " +
                        " Estoque: %d " +
                        " Marca: %s %n ",
                getNome(), getPreco(), getAvaliacao(), getEstoque(), getMarca());
    }

    public String getNome() {
        return nome;
    }

    public double getPreco() {
        return preco;
    }

    public double getAvaliacao() {
        return avaliacao;
    }

    public int getEstoque() {
        return estoque;
    }

    public String getMarca() {
        return marca;
    }
}
