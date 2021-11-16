import AnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {
  // fazer o fetch no arquivo Json pra trazer os numeros de animais pro site
  async function fetchAnimais(url) {
    const animaisJSON = await (await fetch(url)).json();
    const numerosGrid = document.querySelector(".numeros-grid");

    // pegar cada elemento do obj e transformar em um animal
    function createAnimal(animal) {
      // criar estrutura html pra substituir a do site
      const div = document.createElement("div");
      div.classList.add("numero-animal");
      div.innerHTML = `<h3>${animal.especie}</h3>
  <span data-numero>${animal.total}</span>`;

      return div;
    }

    animaisJSON.forEach((animal) => {
      const divAnimal = createAnimal(animal);
      numerosGrid.appendChild(divAnimal);
    });

    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }
  fetchAnimais("./animaisapi.json");
}
