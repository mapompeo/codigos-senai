programa
{
	funcao inicio()
	{
		real valorHora = 0.0, horasMes = 0.0, salarioBruto = 0.0, salarioLiquido = 0.0, inss = 0.0, sindicato = 0.0, impostoRenda = 0.0

		escreva("Insira quanto você ganha por hora: R$")
		leia(valorHora)
		escreva("Insira quantas horas você trabalha por mês: R$")
		leia(horasMes)

		salarioBruto = valorHora * horasMes
		
		impostoRenda = salarioBruto * 11 / 100
		sindicato = salarioBruto * 5 / 100
		inss = salarioBruto * 8 / 100
		salarioLiquido = salarioBruto - inss - sindicato - impostoRenda

		escreva("\n")
		escreva("Você ganha R$",salarioBruto," por mês.\n")
		escreva("Você pagou R$",inss," de INSS.\n")
		escreva("Você pagou R$",sindicato," para o sindicato.\n")
		escreva("Você pagou R$",impostoRenda,"  de imposto de renda.\n")
		escreva("Seu salário líquido é de: R$",salarioLiquido,".\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 288; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */