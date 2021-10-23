import ShowsListItem from '../ShowsListItem'
import { Ul } from './ShowsList.styled'
import PropTypes from 'prop-types'

export default function ShowsList({ searchItems }) {
  return (
    <Ul>
      {searchItems.map(
        ({ id, img, title, description, rating, language, genres }) => {
          return (
            <ShowsListItem
              key={id}
              id={id}
              img={img}
              title={title}
              description={description}
              rating={rating}
              lang={language}
              genres={genres}
            />
          )
        },
      )}
    </Ul>
  )
}

ShowsList.propTypes = {
  searchItems: PropTypes.arrayOf(PropTypes.object).isRequired,
}
