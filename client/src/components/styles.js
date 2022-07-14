import { Row } from 'antd'
import styled from 'styled-components'

export const StyledControls = styled(Row)`
  border: 1px solid red;
  .buttons {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    
    .ant-btn {
      width: 45%;

      margin: 10px 0;
    }
  }

  .form {
    padding: 20px;
    padding-left: 0;
  }
`
