import styled from 'styled-components'
import { H4, Body2 } from 'styleguide/typography'

export const StatusMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
const Icon = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  &:hover {
    cursor: pointer;
  }
`
export const ArrowIcon = styled(Icon)`
  background-image: url('./icons/arrow.svg');
`
export const MenuItemsContainer = styled.div`
  display: flex;
  margin: 20px;
  align-items: center;
  @media (max-width: 450px) {
    margin: 10px 2px;
  }
`
export const MenuItem = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 800px) {
    margin: 10px;
  }
  @media (max-width: 450px) {
    margin: 5px;
  }
`
export const MenuItemTop = styled(H4)``

export const MenuItemBottom = styled(Body2)``

export const SeparatingLine = styled.div`
  width: 1px;
  height: 45px;
  background: #e6e6e6;
  margin: 10px;
  @media (max-width: 550px) {
    margin: 5px;
  }
  @media (max-width: 500px) {
    display: none;
  }
`
