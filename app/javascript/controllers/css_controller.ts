import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="css"
export default class extends Controller {
  static classes = [ "css" ]
  cssClasses: string

  static targets = [ "elementToChange" ]
  elementToChangeTarget: HTMLElement

  static values = {
    hide: { type: Boolean, default: false }
  }
  hideValue: boolean

  toggle(): void {
    this.flipState()
  }

  flipState(): void {
    this.hideValue = !this.hideValue
  }

  hideValueChanged(): void {
    this.updateCssClass()
  }

  updateCssClass(): void {
    for (const oneCssClass of this.cssClasses) {
      this.elementToChangeTarget.classList.toggle(
        oneCssClass,
        this.hideValue
      )
    }
  }
}
