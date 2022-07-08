import styled from 'styled-components'

export const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  header {
    background-color: #282c34;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    font-weight: bold;
  }
  p {
    margin: 0;
  }
  .content {
    display: flex;
    flex-direction: column;
    padding: 20px;
    height: 100%;
    width: 100%;
  }
  .grid {
    border: 1px solid #282c34;
    background-color: #dfe6e9;
  }
  .table-header {
    text-align: center;
    background-color: #b2bec3;
    font-size: calc(10px + 2vmin);
    color: white;
  }
`
