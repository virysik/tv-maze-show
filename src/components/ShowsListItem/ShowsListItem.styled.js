import styled from '@emotion/styled'

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  width: 964px;
  height: 490px;
  margin-bottom: 20px;
  padding: 10px;

  background-color: #fff;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;

  :hover,
  :focus {
    box-shadow: 0px 8px 43px rgba(255, 107, 1, 0.6);
  }
`

export const Img = styled.img`
  height: 100%;
  width: 100%;
`

export const ImgWrapper = styled.div`
  max-width: 960px;
  min-width: 320px;
  border-radius: 4px;
  overflow: hidden;
`

export const Title = styled.h3`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  font-size: 20px;
`

export const P = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`

export const DescrWrapper = styled.div`
  padding: 20px;
`

export const Span = styled.span`
  display: flex;
  align-items: center;
`
