import styled from 'styled-components'

export const Container = styled.div`
  background-color: #0d0d10;
  color: white;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #9758a6;

  .container-top {
    display: flex;
    flex-direction: column;
    gap: 5px;

    h2 {
      margin-bottom: 5px;
    }
  }
  .container-button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 30px;
    font-size: 24px;
    border-bottom: 1px solid #9758a6;
  }
`
