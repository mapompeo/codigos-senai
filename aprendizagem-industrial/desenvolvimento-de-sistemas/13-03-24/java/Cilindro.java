public class Cilindro {
    private double raio;
    private double altura;

    public Cilindro(double raio, double altura) {
        this.raio = raio;
        this.altura = altura;
    }

    public double CaclulcarCilindro() {
        double volume = 0.0;
        volume = Math.PI * (this.raio * this.raio * this.altura);
        return volume;
    }
}
