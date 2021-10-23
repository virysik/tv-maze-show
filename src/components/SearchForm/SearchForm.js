import { Input, Btn } from './SearchForm.styled'
import PropTypes from 'prop-types'

export default function SearchForm({ onFormSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const { target } = e
    const query = target.elements.query.value.toLowerCase()
    onFormSubmit(query)
    target.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="query"
        placeholder="Please type a query..."
        autoComplete="off"
        autoFocus="on"
      />
      <Btn type="submit">Search</Btn>
    </form>
  )
}

SearchForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
}
