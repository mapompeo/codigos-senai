import com.google.gson.Gson;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws IOException, InterruptedException {
        Scanner scanner = new Scanner(System.in);

        String url = "https://viacep.com.br/ws/01001000/json/";

        // Criando uma instância do cliente
        HttpClient client = HttpClient.newHttpClient();

        // Criando uma instância de requisição http com um endpoint
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .build();

        // Criando uma instância de resposta HTTP e recebendo os dados como String
        HttpResponse<String> response = client
                .send(request, HttpResponse.BodyHandlers.ofString());

        // Imprimindo a resposta da requisição
        System.out.println(response);

        // Imprimindo o status da requisição
        System.out.println(response.statusCode());

        // Imprimindo o cabeçalho da requisição
        System.out.println(response.headers());

        // Imprimindo o corpo da requisição
        System.out.println(response.body());

        Gson gson = new Gson();

        scanner.close();
    }
}