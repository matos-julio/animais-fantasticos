import outsideClick from "./outside-click.js";

export default class initMenuMobile {
  constructor(btn, list, events) {
    this.menuButton = document.querySelector(btn);
    this.menuList = document.querySelector(list);
    this.activeClass = "active";

    // define os argumentos padrão de events
    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuButton.classList.add(this.activeClass);
    this.menuList.classList.add(this.activeClass);

    outsideClick(this.menuList, this.events, () => {
      this.menuButton.classList.remove(this.activeClass);
      this.menuList.classList.remove(this.activeClass);
    });
  }

  addMenuEvents() {
    this.events.forEach((evento) =>
      this.menuButton.addEventListener(evento, this.openMenu)
    );
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuEvents();
    }
    return this;
  }
}
