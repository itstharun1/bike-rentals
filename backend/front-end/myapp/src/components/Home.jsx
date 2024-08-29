import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'
import LandingPage from './Landingpage'

function Home() {
    const token = Cookies.get('token')
    if (token === undefined) {
        return <Navigate to="/login" />
        
        }
  return (
    <div>
      <LandingPage/>
    </div>
  )
}

export default Home
