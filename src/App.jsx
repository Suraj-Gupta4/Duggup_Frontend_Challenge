import 'typeface-inter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./component/Navbar";
import Description from "./component/Description";
import TimeLine from "./component/Timeline";


function App() {
  

  return (
    <>
      <div>
        <Router>
          <Routes>

          <Route path='/'  element={
            <>
              <Navbar/>
              <Description/>
              <TimeLine/>
            </>
          } />
          

          </Routes>
        </Router>
      
             
      </div>
        
    </>
  )
}

export default App
