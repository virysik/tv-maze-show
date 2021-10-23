import Loader from 'react-loader-spinner'
import { Div } from './Spinner.styled'

function Spinner() {
  return (
    <Div>
      <Loader
        type="ThreeDots"
        color="#424242"
        height={150}
        width={150}
        timeout={3000}
      />
    </Div>
  )
}

export default Spinner
