import styled from 'styled-components'

export const Container = styled.div`
  background-color: black;
  height: 100dvh;
  padding-top: 72px;
`

export const ProductImg = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: bottom;

  @media (min-width: 900px) {
    height: 35%;
  }
`

export const CategoriesMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;
  @media (max-width: 700px) {
    flex-wrap: wrap;
    gap: 7px;
    margin: 0 2%;
  }
`

export const CategoryButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  gap: 20px;
  border-bottom: ${props => props.isActiveCategory && '2px solid #9758A6'};
  padding-bottom: 3px;
  color: ${props => (props.isActiveCategory ? '#9758A6' : '#9A9A9D')};
  @media (max-width: 700px) {
    border-width: 1px;
  }
`

export const ProductdContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 5px;
  padding: 10px;
  justify-items: center;
  background-color: #0d0d10;
`
