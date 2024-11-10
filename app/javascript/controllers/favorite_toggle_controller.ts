import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="favorite-toggle"
export default class extends Controller {
  connect(): void {
    console.log("The controller favorite-toggle has connected!")
  }

  toggle(): void {
    console.log("The button was clicked!")
  }
}
