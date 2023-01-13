import './App.scss'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../src/pages/Home'
import Details from '../src/pages/Details'
import ListPage from './pages/ListPage';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contacts' element={<ListPage/>} />
          <Route path='/contacts/:id' element={<Details/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
