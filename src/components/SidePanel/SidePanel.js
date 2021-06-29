import './sidepanel.css'
import { Link, BrowserRouter as Router } from 'react-router-dom'
const SidePanel = () => {

  return (
    <ul class="nav flex-column fixed-column ">
      <li class="nav-item">
        <Link class="nav-link active  py-3" to="/">
          Dashboard <span class="sr-only">(current)</span>
        </Link>
      </li>
      <li class="nav-item">
        <Link to="/troubleshoot" class="nav-link  py-3" >
          Troubleshooting Steps
        </Link>
      </li>
      <li class="nav-item">
        <Link to="about" class="nav-link  py-3" >
          About us
        </Link>
      </li>
    </ul>
  )
}

export default SidePanel