import {computed} from "vue";

export function useIsMobile() {
  return computed(() => {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i,
    ]

    if (typeof window === 'undefined') return false

    return toMatch.some(toMatchItem => {
      return navigator.userAgent.match(toMatchItem)
    })
  })
}
