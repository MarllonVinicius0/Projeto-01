class FraseModel {
  /**
   * Busca uma frase.
   * @returns {Promise<Object>}
   */
  static async buscarFrase() {
    const termoDeBusca = "Alegria";
    let url = `https://pensador-api.vercel.app/?term=${termoDeBusca} + ${termoDeBusca}&max=30`;
    

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)

      const frases = data.frases;
      const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
      return {
        texto: fraseAleatoria.texto,
        autor: fraseAleatoria.autor,
      };
    } catch (error) {
      console.error("Erro ao buscar frase:", error);
      return {
        texto:
          "Não foi possivel carregar uma frase, Tente novamente mais tarde.",
        autor: "Sistema:",
      };
    }
  }
}
