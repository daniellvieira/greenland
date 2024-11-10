import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="favorite-toggle"
export default class extends Controller {
  static targets = [ "elementToHide", "elementWithText" ]
  elementToHideTarget: HTMLElement
  elementWithTextTarget: HTMLElement

  // The types of Stimulus makes available are:
  // String, Number, Boolean, Array, Object, and Function
  static values = { visible: { type: Boolean, default: false } }
  visibleValue: boolean

  // toggle({ params: { text } }): void {
  toggle(): void {
    this.flipState()
  }

  visibleValueChanged(): void {
    console.log("visibleValue changed to", this.visibleValue)
    this.updateHiddenClass()
    this.updateText()
  }

  showMessage(event): void {
    const message = event.params.message
    console.log(message)
  }

  flipState(): void {
    this.visibleValue = !this.visibleValue
  }

  updateHiddenClass(): void {
    this.elementToHideTarget.classList.toggle("hidden", !this.visibleValue)
  }

  updateText(): void {
    this.elementWithTextTarget.innerText = this.newText()
  }

  newText(): string {
    return this.visibleValue ? "Hide" : "Show"
  }
}
