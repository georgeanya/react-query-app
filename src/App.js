import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/home'
import RQSuperHeroes from './components/rqsuperheroes'
import SuperHeroes from './components/superheroes'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/super-heroes'>Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/super-heroes'>
            <SuperHeroes />
          </Route>
          <Route path='/rq-super-heroes'>
            <RQSuperHeroes />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App