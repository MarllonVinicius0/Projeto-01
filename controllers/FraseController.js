class FraseController {
  constructor(fraseElementId, autorElementId, botaoId) {
    this.fraseElement = document.getElementById(fraseElementId);
    this.autorElement = document.getElementById(autorElementId);
    this.botaoElement = document.getElementById(botaoId);
  }

  init() {
    if (!this.botaoElement) return;

    this.botaoElement.addEventListener("click", this.atualizarFrase.bind(this));
  }

  async atualizarFrase() {
    if (!this.fraseElement || !this.autorElement) return;

    this.fraseElement.textContent = "Carregando...";
    this.autorElement.textContent = "";

    const frase = await FraseModel.buscarFrase();

    this.fraseElement.textContent = frase.texto;
    this.autorElement.textContent = `-${frase.autor}`;
  }
}
