import axios from 'axios'
import { API } from 'constants/API'
import defaultImg from 'images/defaultPoster.jpg'

axios.defaults.baseURL = API.BASE_URL

export const fetchShows = async (query) => {
  const params = `/search/shows?q=${query}`
  const { data } = await axios.get(params)
  return data.map((item) => {
    return {
      id: item.show.id,
      img: item.show.image?.original ? item.show.image.original : defaultImg,
      title: item.show.name ? item.show.name : '',
      description: item.show.summary
        ? item.show.summary.replace(/<\/?\w>/gi, '')
        : '',
      rating: item.show.rating.average ? item.show.rating.average : null,
      url: item.show.url ? item.show.url : null,
    }
  })
}
