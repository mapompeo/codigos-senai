public class classMedicamento {
    private int id;
    private String nome;
    private int quantidade;
    private double preco;
       
    public classMedicamento() {

    }
    
    public classMedicamento(int id, String nome, int quantidade, double preco) {
        this.id = id;
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
    }
    
    public int totalMedicamentos() {
        return 0;
    }

    public double mediaMedicamentos() {
        return 0.0;
    }

    public double precoMedioMedicamentos() {
        return 0.0;
    }


 



    @Override
    public String toString() {
        return String.format("O código do medicamento é %d,");
    }

    // Clique com botão direito, source action e Generate Getter
    public int getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public double getPreco() {
        return preco;
    }
}