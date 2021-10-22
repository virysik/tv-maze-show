import Footer from '../Footer'
import SearchForm from 'components/SearchForm'
import ShowsList from 'components/ShowsList'

export default function AppBar() {
  return (
    <>
      <header>
        <h2>The most popular tv-shows</h2>
        <SearchForm />
      </header>
      <main>
        <h1>TV-shows</h1>
        <ShowsList />
      </main>
      <Footer />
    </>
  )
}
