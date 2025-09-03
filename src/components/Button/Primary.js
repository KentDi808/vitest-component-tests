class Button extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const label = this.getAttribute("label");

    this.innerHTML = `
      <button class="btn primary">${label}</button>
    `;
  }
}

customElements.define("primary-button", Button);
