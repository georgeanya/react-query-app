import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { QueryClientProvider, QueryClient } from 'react-query';
import Home from "./components/home";
import { ReactQueryDevtools } from 'react-query/devtools'
import RQSuperHeroes from "./components/rqsuperheroes";
import SuperHeroes from "./components/superheroes";


const queryClient =new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient} >
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/super-heroes">Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to="/rq-super-heroes">RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/super-heroes" element={<SuperHeroes />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
