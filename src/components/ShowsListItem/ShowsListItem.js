import { AiFillStar } from 'react-icons/ai'
import { HiOutlineArrowSmRight, HiOutlineArrowSmLeft } from 'react-icons/hi'
import {
  Li,
  Img,
  Title,
  P,
  ImgWrapper,
  DescrWrapper,
  Span,
  LinkWrapper,
  Link,
} from './ShowsListItem.styled'

export default function ShowsListItem({
  img,
  title,
  description,
  rating,
  url,
}) {
  return (
    <Li>
      <ImgWrapper>
        <Img src={img} alt={description}></Img>
      </ImgWrapper>
      <DescrWrapper>
        <Title>
          {title}
          {rating && (
            <Span>
              {rating} <AiFillStar />
            </Span>
          )}
        </Title>
        <P>{description}</P>
        {/* {url && (
          <LinkWrapper>
            <HiOutlineArrowSmRight />
            <Link href={url} target="_blank" rel="noreferrer">
              More info
            </Link>
            <HiOutlineArrowSmLeft />
          </LinkWrapper>
        )} */}
      </DescrWrapper>
    </Li>
  )
}
