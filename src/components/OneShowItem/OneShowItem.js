import { IoIosClose } from 'react-icons/io'
import { Ul, Li, Link, Btn } from './OneShowItem.styled'
import PropTypes from 'prop-types'

export default function OneShowItem({ onToggleModal, seasons }) {
  return (
    <>
      <Btn type="button" onClick={onToggleModal}>
        <IoIosClose size={30} />
      </Btn>
      <Ul>
        {seasons.map(({ url, img, id }, inx) => (
          <Li key={id}>
            <Link href={url} target="_blank" rel="noreferrer">
              <img src={img} alt={inx + 1} width="100" />
              Season-{inx + 1}
            </Link>
          </Li>
        ))}
      </Ul>
    </>
  )
}

OneShowItem.propTypes = {
  onToggleModal: PropTypes.func.isRequired,
  seasons: PropTypes.arrayOf(PropTypes.object).isRequired,
}
