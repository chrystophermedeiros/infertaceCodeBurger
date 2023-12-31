import { Link } from 'react-router-dom'
import styled from 'styled-components'
export const Container = styled.div`
  background: #9758a6;
  width: 20%;
  top: 0;
  left: 0;

  hr {
    color: white;
    margin: 50px 15px;
  }

  @media (max-width: 700px) {
    width: 100%;
    padding: 0;

    hr {
      margin: 0;
    }
  }
`

export const ItemContainer = styled.div`
  margin: 10px 0;
  padding: 20px;
  display: flex;
  align-items: center;
  background: ${props => (props.isActive ? '#DC7BEF' : 'none')};
  @media (max-width: 700px) {
    width: 100%;
    padding: 0;
  }
`

export const LinkList = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: whitesmoke;
  padding-left: 20px;
  font-size: 16px;
`
