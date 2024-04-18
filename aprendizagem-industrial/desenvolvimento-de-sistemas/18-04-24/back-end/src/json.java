import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class json {
    public static void main(String[] args) throws IOException, InterruptedException {
        // troca de dados HTTP => pergunta e resposta (request and response) JDK17
        // https://docs.oracle.com/en/java/javase/17/docs/api/
        // pergunta: request => https://docs.oracle.com/en/java/javase/17/docs/api/java.net.http/java/net/http/HttpRequest.html
        // resposta: response =>  https://docs.oracle.com/en/java/javase/17/docs/api/java.net.http/java/net/http/HttpResponse.html
        // indicar o recursto => página ou serviço desejado https://viacep.com.br/ws/01001000/json/
        // abrir o corpo System.out.println(response.body());

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://viacep.com.br/ws/01001000/json/")) // endpoint ou rota
                .build();

        HttpResponse<String> response = client
                .send(request, HttpResponse.BodyHandlers.ofString());

        System.out.println(response);
        System.out.println(response.statusCode());
        System.out.println(response.body());
    }
}
