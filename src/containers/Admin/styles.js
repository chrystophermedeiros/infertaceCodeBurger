import styled from 'styled-components'

export const Container = styled.div`
  background-color: black;
  color: white;
  min-height: 100dvh;
  display: flex;
  width: 100vw;
  justify-content: flex-start;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`

export const ContainerItens = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
`
