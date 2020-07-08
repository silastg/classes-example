class Pessoa {
  constructor(nome, altura, peso) {
    this.nome = nome;
    this.altura = altura;
    this.peso = peso;
  }
}

class Vingador extends Pessoa {
  constructor(
    nome,
    altura,
    peso,
    poderes,
    temArmadura,
    temArma,
    isMembroFundador,
    isImortal
  ) {
    super(nome, altura, peso);
    this.poderes = poderes;
    this.temArmadura = temArmadura;
    this.temArma = temArma;
    this.isMembroFundador = isMembroFundador;
    this.isImortal = isImortal;
  }

  lutar() {
    alert(`${this.nome} está lutando usando ${this.poderes[1]}`);
  }
}

const thor = new Vingador(
  "Thor",
  "1.85",
  "100kg",
  ["Deus do Trovão", "Super força", "Vôo", "Longevidade"],
  true,
  true,
  false,
  false
);

const ironman = new Vingador(
  "Iron Man",
  "1.80",
  "85kg",
  ["Inteligência", "Gerador de Energia", "Vôo", "Dinheiro"],
  true,
  true,
  false,
  false
);

document.getElementById("lutart").onclick = function () {
  thor.lutar();
};

document.getElementById("lutari").onclick = function () {
  ironman.lutar();
};
