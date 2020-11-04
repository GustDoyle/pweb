var escolhaInput = prompt(
  "Escolha uma opção: \n\n[1] Pedra\n\n[2] Papel\n\n[3] Tesoura"
);

var escolhaUsuario = "";

switch (escolhaInput) {
  case "1":
    escolhaUsuario = "Pedra";
    break;
  case "2":
    escolhaUsuario = "Papel";
    break;
  default:
    escolhaUsuario = "Tesoura";
    break;
}

var randomComputador = Math.random();

var escolhaComputador = "Papel";

if (randomComputador >= 0 && randomComputador < 0.33) {
  escolhaComputador = "Pedra";
} else if (randomComputador >= 0.33 && randomComputador < 0.66) {
  escolhaComputador = "Tesoura";
}

alert(
  "Escolha computador: " +
    escolhaComputador +
    "\nSua escolha: " +
    escolhaUsuario
);

var ganhador = "";

if (escolhaUsuario === escolhaComputador) {
  ganhador = "EMPATE";
} else if (escolhaUsuario === "Papel") {
  ganhador = "USUARIO";
  if (escolhaComputador === "Tesoura") {
    ganhador = "COMPUTADOR";
  }
} else if (escolhaUsuario === "Pedra") {
  ganhador = "USUARIO";
  if (escolhaComputador === "Papel") {
    ganhador = "COMPUTADOR";
  }
} else {
  ganhador = "USUARIO";
  if (escolhaComputador === "Pedra") {
    ganhador = "COMPUTADOR";
  }
}

alert("Resultado: " + ganhador);
