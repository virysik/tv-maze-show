import axios from 'axios'
import { API } from 'constants/API'
import defaultImg from 'images/poster.jpg'

axios.defaults.baseURL = API.BASE_URL

export const fetchShows = async (query) => {
  const params = `/search/shows?q=${query}`
  const { data } = await axios.get(params)
  return data.map(({ show }) => {
    return {
      id: show.id,
      img: show.image?.original ? show.image.original : defaultImg,
      title: show.name ? show.name : '',
      description: show.summary ? show.summary.replace(/<\/?\w>/gi, '') : '',
      rating: show.rating.average ? show.rating.average : null,
      language: show.language ? show.language : null,
      genres: show.genres ? show.genres.join(', ') : null,
    }
  })
}

export const fetchSeasons = async (id) => {
  const params = `/shows/${id}/seasons`
  const { data } = await axios.get(params)
  return data.map(({ url, image, id }) => {
    return {
      url: url ? url : null,
      img: image?.original ? image.original : defaultImg,
      id,
    }
  })
}
