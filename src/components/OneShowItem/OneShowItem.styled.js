import styled from '@emotion/styled'

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
`
export const Li = styled.li`
  margin-top: 10px;
  margin-left: 10px;
  flex-basis: calc((100% - 50px) / 5);

  transform: scale(1);
  transition: all 0.2s ease-in-out;

  :hover,
  :focus {
    transform: scale(1.1);
  }
`

export const Link = styled.a`
  color: inherit;
`

export const Btn = styled.button`
  position: absolute;
  top: 0px;
  right: -4px;

  border: none;
  background-color: transparent;
  transform: scale(1);
  transition: all 0.2s ease-in-out;

  :hover,
  :focus {
    transform: scale(1.2);
  }
`

export const ImgWrapper = styled.div`
  width: 100px;
  border-radius: 4px;
  overflow: hidden;
`
