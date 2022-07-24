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
  
  .header{
    margin-left: 10px;
  }

  .grid {
    margin-left: 10px;
    margin-right: 10px;
    border: 1px solid #282c34;
    background-color: #dfe6e9;
  }

  .count-label{
    margin-left: 10px;
    margin-right: 10px;
  }
  
`

