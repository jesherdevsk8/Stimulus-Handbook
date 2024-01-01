import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "name" ]

  connect() {
    console.log("Connected?", this.element);
  }

  greet() {
    console.log(`Clicked by, ${this.name}!`)
  }

  get name() {
    return this.nameTarget.value ? this.nameTarget.value : 'Empty Name';
  }

  sayHello() {
    const element = this.nameTarget;
  
    if (element && element.value) {
      const name = element.value;
      console.log(`Hello, ${name}!`);
    } else {
      console.error("Element or element.value is undefined.");
    }
  }
  
}