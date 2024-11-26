import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="favorite-toggle"
export default class extends Controller {
  static targets = [ "elementWithText" ]
  elementWithTextTarget: HTMLElement

  // The types of Stimulus makes available are:
  // String, Number, Boolean, Array, Object, and Function
  static values = {
    hide: { type: Boolean, default: false },
    on: { type: String, default: "On" },
    off: { type: String, default: "Off" },
  }
  onValue: string
  offValue: string
  hideValue: boolean

  toggle(): void {
    this.flipState()
  }

  flipState(): void {
    this.hideValue = !this.hideValue
  }

  // Callback method that is called after a Stimulus value is changed.
  hideValueChanged(): void {
    this.updateText()
  }

  showMessage(event): void {
    console.log(event.params.message)
  }

  updateText(): void {
    this.elementWithTextTarget.innerText = this.hideValue ? this.onValue : this.offValue
  }
}
