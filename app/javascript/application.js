import "@hotwired/turbo-rails"
import "./controllers"
import "./components/venue_display"
import "animate.css"

// https://discuss.hotwired.dev/t/are-transitions-and-animations-on-hotwire-roadmap/1547
document.addEventListener("turbo:before-stream-render", (event) => {
  if (event.target.action === "remove") {
    const targetFrame = document.getElementById(event.target.target)
    if (targetFrame.dataset.animateOut) {
      event.preventDefault()
      const elementBeingAnimated = targetFrame
      elementBeingAnimated.classList.add(targetFrame.dataset.animateOut)
      elementBeingAnimated.addEventListener("animationend", () => {
        targetFrame.remove()
      })
    }
  }
})