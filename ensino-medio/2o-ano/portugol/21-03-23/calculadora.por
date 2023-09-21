programa
{
	funcao inicio()
	{
		real num1 = 0.0, num2 = 0.0, resultado = 0.0
		cadeia func = ""
		
		
		escreva("-----------------------------------------\n")
		escreva("		Calculadora\n")
		escreva("-----------------------------------------\n")
		escreva(" escreva A para +     escreva S para -\n")
		escreva(" escreva M para x     escreva D para /\n")
		escreva("-----------------------------------------\n")
		escreva("Insira o primeiro número:")
		leia(num1)
		escreva("Insira a operação:")
		leia(func)
		escreva("Insira o segundo número:")
		leia(num2)

		se(func == "A" ou func == "a"){
			resultado = num1 + num2
			}
		
		senao se((func == "S") ou (func == "s")){
			resultado = num1 - num2
			}

		senao se((func == "M") ou (func == "m")){
			resultado = num1 * num2
			}

		senao se((func == "D") ou (func == "d")){
			resultado = num1 / num2
			}

		escreva("-----------------------------------------\n")
		escreva("	O resultado é: ",resultado,"\n")
		escreva("-----------------------------------------\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 86; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */