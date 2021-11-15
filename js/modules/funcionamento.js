export default function initFuncionamento() {
  // armazena os dias e horario de funcionamento
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  // armazena os dias e horario do usuario
  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const abertoDia = diasSemana.indexOf(diaAgora) !== -1; // True === está aberto naquele dia
  const horarioAberto =
    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

  if (abertoDia && horarioAberto) {
    funcionamento.classList.add("aberto");
  }
}
