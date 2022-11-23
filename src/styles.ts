import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  flex-direction: column;

  .inner {
    width: 100%;
    max-width: 720px;
    display: flex;
    flex-wrap: wrap;

    h1 {
      width: 100%;
    }
    > .column {
      flex-grow: 1;
      margin: 0 1em;
    }
  }
`;