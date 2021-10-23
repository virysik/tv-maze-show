import { FaRegHeart } from 'react-icons/fa'
import { Container, Ftr, P, Span } from './Footer.styled'

export default function Footer() {
  return (
    <Ftr>
      <Container>
        <P>
          With love for tv shows
          <Span>
            <FaRegHeart />
          </Span>
        </P>
      </Container>
    </Ftr>
  )
}
