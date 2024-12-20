

import { Routes,Route } from 'react-router-dom';
import './App.css';
import BookAppointment from './Page/BookAppointment';
import Navbar from './Page/Navbar';
import Show from './Page/Show';
import Swiperpage from './Page/Swiperpage'

function App() {
  return (
    <div>
           <Navbar />
          <Routes>
                <Route path='/' element={<Swiperpage/>} />
               <Route path='/appointment' element={<BookAppointment/>} />
          </Routes>
         
         
    </div>
  );
}

export default App;
