var idadeMaior = 0 
var  idadeMenor = 150
var homens = 0
var mulheres = 0
var pessimo = 0
var positivos = 0
var idadeTotal = 0

for (var i = 0; i < 45; i++) {
  
console.log(i);
   // more statements
const idade = prompt("Digite sua idade")
const sexo = prompt("Digite o seu sexo (responda com masculino ou feminino)")
const opiniao = prompt("Digite a sua nota para palestra, sendo no nínimo 1 e no máximo 4")
idadeTotal = idadeTotal + idade

if (idade > idadeMaior)
	idadeMaior = idade

if (idade < idadeMenor)
idadeMenor = idade

if (opiniao == 1)
	pessimo = pessimo + 1

if (opiniao > 2)
	positivos = positivos + 1

if (sexo == "masculino")
	homens = homens + 1 
else 
	mulheres = mulheres + 1 
}
const media = (idadeTotal) / 45

alert("A media de idade é "  + Math.round(media))
alert("A idade da pessoa mais velha é " + idadeMaior)
alert("A idade da pessoa mais nova é " + idadeMenor)
alert("a quantidade de pessoas que responderam péssimo é " + pessimo)
positivos = positivos / 45 * 100
alert("a porcentagem de pessoas que responderam ótimo e bom é  " + Math.round(positivos) + "%")
alert("O numero de homens que responderam o questinario é  " + homens + " e de mulheres é "+ mulheres)



