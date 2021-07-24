import { Typography } from "antd"
import styled from "styled-components"
const { Paragraph } = Typography

export const ModalTitle = styled(Paragraph)`
  margin-top: 14px;
  color: ${({ theme }) => theme.colors.textDark};
  font-weight: bold;
`
