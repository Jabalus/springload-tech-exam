import styled from 'styled-components'
import theme from '../theme'

type StyledButtonProps = {
  $primary: boolean | undefined
  $fluid: boolean | undefined
}

export const StyledButton = styled.button<StyledButtonProps>`
  line-height: 1.5715;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  border: 1px solid transparent;
  box-shadow: 0 2px #00000004;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 4px 15px;
  font-size: 14px;
  border-radius: 2px;
  color: #000000d9;
  border-color: #d9d9d9;
  background: #fff;
  text-align: center;
  min-width: 80px;
  ${({ $fluid }) => ($fluid ? 'width: 100%' : '')};
  ${({ $primary }) =>
    $primary
      ? `
      color: #fff;
      border-color: ${theme.primaryColor};
      background: ${theme.primaryColor};

      &:hover {
        background: ${theme.primaryColorHover};
      }
    `
      : ''};
`
