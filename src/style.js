import { Layout } from "antd"
import styled from "styled-components"
const { Header } = Layout

export const AppContainer = styled.div`
  text-align: left;
  margin-left: auto;
  margin-right: auto;
`

export const RecipeHeader = styled(Header)`
  max-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  ${({ theme: { media } }) => media.tablet`
    flex-direction: row;
  `};
`

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
`
