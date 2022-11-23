import styled from "styled-components";
import theme from "../theme";

export const InputContainer = styled.div<{ $fluid: boolean | undefined }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 15px;

  .msg {
    height: 15px;
  }

  ${($fluid) => ($fluid ? "width: 100%;" : "")}

  .msg {
    margin-top: 2px;
    font-size: 10px;
    color: ${theme.errorColor};
  }
`;

export const StyledDropdownBox = styled.div<{
  $error: boolean | undefined;
  $open: boolean | undefined;
}>`
  position: relative;
  box-sizing: border-box;
  margin: 0;
  font-variant: tabular-nums;
  display: inline-block;
  width: 100%;
  min-width: 0;
  color: #000000d9;
  font-size: 14px;
  line-height: 1.5715;
  background-color: #fff;
  transition: all 0.3s;
  margin-top: 5px;
  text-align: left;

  ${({ $error }) => ($error ? `border-color: ${theme.errorColor};` : "")};

  &:focus {
    border-right-width: 1px;
    outline: 0;
  }

  display: flex;
  flex-direction: column;

  .display {
    width: 100%;
    padding: 5px 10px 5px 15px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    transition: all 0.3s;

    ${({ $error, $open }) =>
      $open
        ? `
      border-color: ${$error ? theme.errorColor : theme.primaryColor};
      box-shadow: 0 0 0 2px ${
        $error ? theme.errorOutline : theme.primaryOutline
      };
    `
        : `border-color: ${$error ? theme.errorColor : "#d9d9d9"};`}
  }

  .value-container {
    width: calc(100% - 16px);
    text-align: left;
    min-height: 22px;
    display: flex;
  }

  .display > svg {
    width: 20px;
    height: 20px;
    transform: rotate(0deg);
    transition: all 0.3s ease-in-out;

    ${({ $open }) => ($open ? "transform: rotate(180deg);" : "")}
  }

  .dropdown-menu {
    z-index: 2;
    cursor: pointer;
    position: absolute;
    top: 100%;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    padding: 5px 15px;
    background: #ffffff;

    box-shadow: 0px 5px 24px 1px rgba(0, 0, 0, 0.19);
    -webkit-box-shadow: 0px 5px 24px 1px rgba(0, 0, 0, 0.19);
    -moz-box-shadow: 0px 5px 24px 1px rgba(0, 0, 0, 0.19);

    box-sizing: border-box;
    max-height: 300px;
    overflow-x: auto;
    .option {
      padding: 5px 0px;
    }

    ${({ $open }) => ($open ? "display: block" : "display: none")}
  }
`;

export const Pill = styled.div`
  position: relative;
  display: flex;
  flex: none;
  align-items: center;
  box-sizing: border-box;
  max-width: 100%;
  height: 24px;
  margin-top: 2px;
  margin-bottom: 2px;
  line-height: 22px;
  background: rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(5, 5, 5, 0.06);
  border-radius: 4px;
  cursor: default;
  user-select: none;
  margin-right: 5px;
`;
