import { css } from "styled-components"

export const sizes = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  largeDesktop: 1280,
}

/**
 * This function returns an object where the keys are -
 * styled-components based media queries for mobile first.
 *
 */
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})
