public class Estoque {
    public String nome;
    public int codigo;
    public int quantidade;

    public Estoque() {

    }

    public Estoque(int codigo, String nome, int quantidade) {
        this.codigo = codigo;
        this.nome = nome;
        this.quantidade = quantidade;
    }

    public int adicionarEstoque(int valor) {
        return 0;
    }
}