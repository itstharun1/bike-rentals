import { BrowserRouter,Route,Routes } from 'react-router-dom';

import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import BikePage from './components/BikePage';
import BikeRental from './components/UploadBike';
import DisplayItem from './components/DisplayItem';
import MyUploads from './components/MyUploads';
import Update from './components/Update';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Home />} />
      <Route path="/bike" element={<BikePage />} />
      <Route path="/uploadBike" element={<BikeRental />} />
      <Route path='/items/:id' Component={DisplayItem} />
      <Route path='/myuploads/:id' Component={MyUploads} />
      <Route path='/update/:id' Component={Update} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
