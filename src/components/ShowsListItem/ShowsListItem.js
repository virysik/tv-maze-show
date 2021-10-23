import { useEffect, useRef } from 'react'
import Modal from 'components/Modal'
import OneShowItem from 'components/OneShowItem'
import { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { fetchSeasons } from '../../services/api'
import {
  Li,
  Img,
  Title,
  P,
  ImgWrapper,
  DescrWrapper,
  Span,
} from './ShowsListItem.styled'
import PropTypes from 'prop-types'

export default function ShowsListItem({
  id,
  img,
  title,
  description,
  rating,
  lang,
  genres,
}) {
  const [showModal, setShowModal] = useState(false)
  const [seasons, setSeasons] = useState(null)
  const linkEl = useRef(null)

  const toggleModal = () => {
    if (!showModal) {
      document.body.style.overflow = 'hidden'
    }
    if (showModal) {
      document.body.style.overflow = 'inherit'
    }
    setShowModal(!showModal)
  }

  useEffect(() => {
    async function fetchApi() {
      try {
        const data = await fetchSeasons(linkEl.current.id)
        setSeasons(data)
      } catch (error) {
        console.log(error)
      }
    }
    if (showModal) {
      fetchApi()
    }
  }, [showModal])

  return (
    <Li onClick={toggleModal} id={id} ref={linkEl}>
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
        {lang && (
          <p>
            <b>Languages: </b> {lang}
          </p>
        )}
        {genres && (
          <p>
            <b>Genres: </b>
            {genres}
          </p>
        )}

        {showModal && (
          <Modal show={showModal} onClose={toggleModal}>
            {seasons && (
              <OneShowItem onToggleModal={toggleModal} seasons={seasons} />
            )}
          </Modal>
        )}
      </DescrWrapper>
    </Li>
  )
}

ShowsListItem.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  rating: PropTypes.number,
  lang: PropTypes.string,
  genres: PropTypes.string,
}
