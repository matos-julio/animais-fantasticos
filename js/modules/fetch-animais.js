import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  // fazer o fetch no arquivo Json pra trazer os numeros de animais pro site
  async function criarAnimais() {
    const animaisJSON = await (await fetch(url)).json();

    // cria a div contendo informações sobre os animais
    function createAnimal(animal) {
      const div = document.createElement("div");
      div.classList.add("numero-animal");
      div.innerHTML = `<h3>${animal.especie}</h3>
        <span data-numero>${animal.total}</span>`;

      return div;
    }

    // adiciona a div no body
    const numerosGrid = document.querySelector(target);
    const preencherAnimais = (animal) => {
      const divAnimal = createAnimal(animal);
      numerosGrid.appendChild(divAnimal);
    };
    animaisJSON.forEach((animal) => preencherAnimais(animal));

    // cria a animação na contagem
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  return criarAnimais();
}
