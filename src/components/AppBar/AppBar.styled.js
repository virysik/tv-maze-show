import styled from '@emotion/styled'
import defaultImg from 'images/img8.jpg'
import defaultImgOne from 'images/img4.jpg'
export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  padding-right: 30px;
  max-width: 1024px;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background-image: url(${defaultImgOne});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Header = styled.header`
  min-height: 50px;
  padding-top: 60px;
  padding-bottom: 60px;
  text-align: center;
  color: var(--primary-color);
  background-image: url(${defaultImg});
  background-position: 50% 50%;
  background-repeat: repeat;
  background-size: contain;
`

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 48px;
`

export const Main = styled.main`
  padding-top: 40px;
  padding-bottom: 20px;
`
export const MainTitle = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`

export const Text = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  font-size: 30px;
  font-weight: 700;
  text-align: center;

  color: var(--dark-color);
  animation: scale 2s;
  @keyframes scale {
    0% {
      transform: scale(0.1);
    }

    100% {
      transform: scale(1);
    }
  }
`
