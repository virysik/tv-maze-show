import Footer from '../Footer'
import SearchForm from 'components/SearchForm'
import ShowsList from 'components/ShowsList'
import Spinner from 'components/Spinner'
import toast from 'react-hot-toast'
import { useState, useEffect } from 'react'
import { MdOutlineReportProblem } from 'react-icons/md'
import { fetchShows } from 'services/api'
import { Status } from '../../constants/ApiStatus'
import {
  Header,
  Container,
  Title,
  Main,
  MainTitle,
  Text,
  Wrapper,
} from './AppBar.styled'

export default function AppBar() {
  const [query, setQuery] = useState('')
  const [shows, setShows] = useState(null)
  const [reqStatus, setReqStatus] = useState(Status.IDLE)

  useEffect(() => {
    async function fetchApi() {
      setReqStatus(Status.PENDING)
      try {
        const data = await fetchShows(query)

        if (!data.length) {
          return toast('Please enter the correct search query name', {
            icon: <MdOutlineReportProblem />,
          })
        }

        setShows(data)
        setReqStatus(Status.RESOLVED)
      } catch (error) {
        setReqStatus(Status.REJECTED)
        console.log(error)
      }
    }

    if (query !== '') {
      fetchApi()
    }
  }, [query])

  const handleSubmit = (item) => {
    setQuery(item)
  }

  if (reqStatus === Status.IDLE) {
    return (
      <Wrapper>
        <Header>
          <Container>
            <Title>Most popular TV shows</Title>
            <SearchForm onFormSubmit={handleSubmit} />
          </Container>
        </Header>
        <Main>
          <Container>
            <MainTitle>TV-shows</MainTitle>
            <Text>Your selected tv programs will appear here...</Text>
          </Container>
        </Main>
        <Footer />
      </Wrapper>
    )
  }

  if (reqStatus === Status.PENDING) {
    return (
      <Wrapper>
        <Header>
          <Container>
            <Title>Most popular TV shows</Title>
            <SearchForm onFormSubmit={handleSubmit} />{' '}
          </Container>
        </Header>
        <Main>
          <Container>
            <MainTitle>TV-shows</MainTitle>
            <Spinner />
          </Container>
        </Main>
        <Footer />
      </Wrapper>
    )
  }

  if (reqStatus === Status.RESOLVED) {
    return (
      <Wrapper>
        <Header>
          <Container>
            <Title>Most popular TV shows</Title>
            <SearchForm onFormSubmit={handleSubmit} />{' '}
          </Container>
        </Header>
        <Main>
          <Container>
            <MainTitle>TV-shows</MainTitle>
            {shows && <ShowsList searchItems={shows} />}
          </Container>
        </Main>
        <Footer />
      </Wrapper>
    )
  }

  if (reqStatus === Status.REJECTED) {
    return (
      <Wrapper>
        <Header>
          <Container>
            <Title>Most popular TV shows</Title>
            <SearchForm onFormSubmit={handleSubmit} />{' '}
          </Container>
        </Header>
        <Main>
          <Container>
            <MainTitle>TV-shows</MainTitle>
            <Text>
              <MdOutlineReportProblem />
              Something went wrong. Please try again later.
            </Text>
          </Container>
        </Main>
        <Footer />
      </Wrapper>
    )
  }
}
