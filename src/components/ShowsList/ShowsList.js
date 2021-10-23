import ShowsListItem from '../ShowsListItem'
import { Ul } from './ShowsList.styled'

export default function ShowsList({ searchItems }) {
  return (
    <Ul>
      {searchItems.map(({ id, img, title, description, rating, url }) => {
        return (
          <ShowsListItem
            key={id}
            img={img}
            title={title}
            description={description}
            rating={rating}
            url={url}
          />
        )
      })}
    </Ul>
  )
}
