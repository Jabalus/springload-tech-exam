import styled from 'styled-components'
import theme from '../theme'

export const InputContainer = styled.div<{ $fluid: boolean | undefined }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 15px;

  .msg {
    height: 15px;
  }

  ${($fluid) => ($fluid ? 'width: 100%;' : '')}

  .msg {
    margin-top: 2px;
    font-size: 10px;
    color: ${theme.errorColor};
  }

  /* hide spinner when type number*/

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
`

export const StyledInput = styled.input<{ $error: boolean | undefined }>`
  box-sizing: border-box;
  margin: 0;
  font-variant: tabular-nums;
  position: relative;
  display: inline-block;
  width: 100%;
  min-width: 0;
  padding: 5px 15px;
  color: #000000d9;
  font-size: 14px;
  line-height: 1.5715;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: all 0.3s;
  margin-top: 5px;

  ${({ $error }) => ($error ? `border-color: ${theme.errorColor};` : '')};

  &:focus {
    border-color: ${({ $error }) => ($error ? theme.errorColor : theme.primaryColor)};
    box-shadow: 0 0 0 2px ${({ $error }) => ($error ? theme.errorOutline : theme.primaryOutline)};
    border-right-width: 1px;
    outline: 0;
  }

  &:hover {
    border-color: ${({ $error }) => ($error ? theme.errorColor : theme.primaryColor)};
  }
`
