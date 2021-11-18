export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  // armazena os dias de funcionamento do "serviço"
  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario
      .split(",")
      .map(Number);
  }

  // armazena os dias e horario do usuario
  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3; // horario brasilia = UTC-3
  }

  estaAberto() {
    const abertoDia = this.diasSemana.indexOf(this.diaAgora) !== -1; // True === está aberto naquele dia
    const horarioAberto =
      this.horarioAgora >= this.horarioSemana[0] &&
      this.horarioAgora < this.horarioSemana[1];

    return abertoDia && horarioAberto;
  }

  aberto() {
    if (this.estaAberto()) this.funcionamento.classList.add(this.activeClass);
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.aberto();
    }

    return this;
  }
}
