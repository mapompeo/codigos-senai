package br.com.devsistem.programacaocadastro;

import br.com.devsistem.programacaocadastro.principal.Principal;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ProgramacaoCadastroApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(ProgramacaoCadastroApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Principal principal = new Principal();
		principal.mostraMenu();
	}
}
