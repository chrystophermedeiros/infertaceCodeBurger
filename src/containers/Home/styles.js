import styled from 'styled-components'

export const Container = styled.div`
  height: 100dvh;
  width: 100%;
  background-color: #0d0d10;
  padding-top: 72px;
`

export const HomeImg = styled.img`
  height: 35%;
  width: 100%;
  object-fit: cover;
  object-position: center;

  @media (min-width: 900px) {
    height: 35%;
  }
`
