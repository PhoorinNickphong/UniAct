
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import MainPage from './pages/main/main';
import Status from './pages/status/status';
import Signin from './pages/signin/signin';
import MainLog from './pages/main/mainxlog';
import Signup from './pages/signup/signup';
import Information from './pages/information/information';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainLog/>} />      
        <Route path="/" element={<MainPage />}  />
        <Route path="/status" element={<Status />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/information" element={<Information />} />
        <Route path="/information/:id" element={<Information />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
