import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "source", "tooltip", "unlock" ]
  static classes = [ "supported" ]

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
    if (['input'].includes(this.sourceTarget.tagName.toLowerCase())) {
      navigator.clipboard.writeText(this.sourceTarget.value)
      if ("clipboard" in navigator) {
        this.element.classList.add(this.supportedClass);
      }
    }

    if (this.hasTooltipTarget) {
      this.showTooltip('Copied!', 800);
    }
  }

  showTooltip(text, duration) {
    this.tooltipTarget.textContent = text;
    this.unlockTarget.textContent = text;
    setTimeout(() => {
      this.tooltipTarget.textContent = 'Copy to clipboard';
      this.element.classList.remove(this.supportedClass);
    }, duration);
  }
}