programa
{
	funcao inicio()
	{
		real num1 = 0.0, num2 = 0.0, num3 = 0.0, num4 = 0.0, num5 = 0.0, num6 = 0.0, num7 = 0.0
		real mediaMaior = 0.0, mediaMenor = 0.0
		real maior = 0.0, menor = 0.0
		
		escreva("-----------------------------------\n")
		escreva("    C�lculo da m�dia das 4 notas   \n")
		escreva("-----------------------------------\n")
		escreva("Digite o primeiro n�mero:\n")
		leia(num1)
		escreva("Digite o segundo n�mero:\n")
		leia(num2)
		escreva("Digite o terceiro n�mero:\n")
		leia(num3)
		escreva("Digite o quarto n�mero:\n")
		leia(num4)
		escreva("Digite o quinto n�mero:\n")
		leia(num5)
		escreva("Digite o sexto n�mero:\n")
		leia(num6)
		escreva("Digite o s�timo n�mero:\n")
		leia(num7)
		
		se(num1 >= 6.0){
			maior = maior + num1
			mediaMaior = mediaMaior + 1
		}
		senao{
			menor = menor + num1
			mediaMenor = mediaMenor + 1
		}
		
		se(num2 >= 6.0){
			maior = maior + num2
			mediaMaior = mediaMaior + 1
		}
		senao{
			menor = menor + num2
			mediaMenor = mediaMenor + 1
		}
		
		se(num3 >= 6.0){
			maior = maior + num3
			mediaMaior = mediaMaior + 1
		}
		senao{
			menor = menor + num3
			mediaMenor = mediaMenor + 1
		}
		
		se(num4 >= 6.0){
			maior = maior + num4
			mediaMaior = mediaMaior + 1
		}
		senao{
			menor = menor + num4
			mediaMenor = mediaMenor + 1
		}
		
		se(num5 >= 6.0){
			maior = maior + num5
			mediaMaior = mediaMaior + 1
		}
		senao{
			menor = menor + num5
			mediaMenor = mediaMenor + 1
		}
		
		se(num6 >= 6.0){
			maior = maior + num6
			mediaMaior = mediaMaior + 1
		}
		senao{
			menor = menor + num6
			mediaMenor = mediaMenor + 1
		}
		
		se(num7 >= 6.0){
			maior = maior + num6
			mediaMaior = mediaMaior + 1
		}
		senao{
			menor = menor + num6
			mediaMenor = mediaMenor + 1
		}
		
		mediaMaior = maior / mediaMaior
		mediaMenor = menor / mediaMenor
		
		escreva("-------------------------------------------------------\n")
		escreva("     A m�dia dos n�meros maiores que 6 � ",mediaMaior,"\n")
		escreva("     A m�dia dos n�meros menores que 6 � ",mediaMenor,"\n")
		escreva("-------------------------------------------------------\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta se��o do arquivo guarda informa��es do Portugol Studio.
 * Voc� pode apag�-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1473; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */