class MiCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML = `
        <style>
          .card { border: 1px solid #ccc; padding: 10px; margin: 5px; }
        </style>
        <div class="card">
          <h2>${this.getAttribute("titulo")}</h2>
          <p>${this.getAttribute("descripcion")}</p>
          <p>${this.getAttribute("precio")}</p>
        </div>
      `;
    }
}
customElements.define("mi-card", MiCard);
