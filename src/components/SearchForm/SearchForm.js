export default function SearchForm() {
  return (
    <form>
      <input
        type="text"
        name="query"
        placeholder="Please type a query..."
        autoComplete="off"
        autoFocus="on"
      />
      <button type="submit">Search</button>
    </form>
  )
}
