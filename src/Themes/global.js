import { createGlobalStyle, css } from "styled-components"
import normalize from "./normalize"

const sharedStyles = css`
  ${normalize()}
`

export const GlobalStyle = createGlobalStyle`
  ${sharedStyles}
  body {
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`
