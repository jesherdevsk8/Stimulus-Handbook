import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "slide" ]
  static values = { index: Number, effect: { type: String, default: "kenburns" } }

  connect() {
    console.log("Slideshow, connected?", this.element);
  }

  iinitialize() {
    this.showCurrentSlide()
  }

  next() {
    this.indexValue++;
    if (this.indexValue >= this.slideTargets.length) {
      this.indexValue = 0;
    }
    this.showCurrentSlide()
  }

  previous() {
    this.indexValue--
    if (this.indexValue < 0) {
      this.indexValue = this.slideTargets.length - 1;
    }
    this.showCurrentSlide()
  }

  showCurrentSlide() {
    this.slideTargets.forEach((element, index) => {
      element.hidden = index !== this.indexValue
    })
  }
}