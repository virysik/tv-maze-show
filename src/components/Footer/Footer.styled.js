import styled from '@emotion/styled'
import defaultBgImg from 'images/img8.jpg'

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  padding-right: 30px;
  max-width: 1024px;
`

export const Ftr = styled.footer`
  min-height: 50px;
  margin-top: auto;
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: center;
  color: var(--primary-color);
  background-image: url(${defaultBgImg});
  background-position: 50% 50%;
  background-repeat: repeat;
  background-size: contain;
`
export const P = styled.p`
  display: flex;
  justify-content: center;
  font-size: 20px;
`
export const Span = styled.span`
  margin-left: 10px;
`
