import { updateCarousel } from "./carousel.js"

export function createAdvertising($, newAdvertising) {
  contentFromAdvertising(newAdvertising)

  updateCarousel($, 1, contentFromAdvertising(newAdvertising))
}
