import outsideClick from "./outside-click.js";

export default class DropdownMenu {
  constructor(menus, events) {
    this.dropdownMenus = document.querySelectorAll(menus);
    this.activeClass = "active";

    // define os argumentos padrão de events
    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // ativa o dropdown menu e adiciona a função que ativa o clique
  // fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;

    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // adiciona os eventos ao menu
  addMenuEvents() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) =>
        menu.addEventListener(userEvent, this.activeDropdownMenu)
      );
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addMenuEvents();
    }

    return this;
  }
}
