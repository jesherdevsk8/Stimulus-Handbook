import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "source" ]

  connect() {
    this.generateAndSetPIN();
  }

  generateAndSetPIN() {
    const generatedPIN = this.generatePIN(4);
    this.sourceTarget.value = generatedPIN;
  }

  generatePIN(length) {
    const characters = '0123456789';
    let pin = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      pin += characters.charAt(randomIndex);
    }

    return pin;
  }

  copy() {
    navigator.clipboard.writeText(this.sourceTarget.value).then(() => {
      alert("Texto copiado para a área de transferência!");
    }).catch((error) => {
      console.error('Erro ao copiar para a área de transferência:', error);
    });
  }
}